---
title: "sudoersのNOPASSWDを絞り込んだら、PCが2回勝手に落ちた話"
date: 2026-09-30T00:00:00+09:00
draft: false
description: "sudo systemctl restart bluetoothがパスワード無しで通ったことをきっかけに、GTFOBins、SSHの強制コマンド、rrsync、OpenSSHのソースコードまで辿って、権限を絞り込んだ記録。原因不明のままPCが2回落ちた顛末も含めて書く。"
tags:
  - arch-linux
  - openssh
  - ssh
  - sudo
  - reverse-engineering
---

`sudo systemctl restart bluetooth`と打ったら、パスワードを聞かれずに通った。何かがおかしい。ここから、GTFOBinsの調査、SSH鍵の作り直し、rrsyncとの格闘、そしてOpenSSHのソースコードを読むところまで進んだ調査の記録。最後には、原因が分からないままPCが2回勝手に落ちるという、後味の悪いオチが付く。

---

## きっかけ: パスワードを聞かれない

Bluetoothの調子が悪くて`sudo systemctl restart bluetooth`を打った。いつもならパスワードを聞かれるはずが、そのまま通った。直近でsudoを使った覚えもない。おかしいと思って`sudo -n -l`(パスワード無しで、自分に許可されているsudoコマンドを一覧表示する)を叩いてみた。

```text
ユーザー takashi は takashi-pc 上で コマンドを実行できます
    (ALL : ALL) ALL
    (root) NOPASSWD: /usr/bin/rsync, /usr/bin/systemctl, /usr/bin/poweroff
```

`/etc/sudoers.d/`配下に、`rsync`・`systemctl`・`poweroff`の3つが、**パスワード無しで、引数を問わず**実行できる設定が入っていた。

## GTFOBinsで確認した危険性

[GTFOBins](https://gtfobins.org/)は、Unix系のバイナリを悪用した権限昇格の手口をまとめたデータベースだ。`systemctl`と`rsync`のページを見ると、この設定がどれだけまずいかがすぐ分かる。

**systemctl**: 自分でsystemdのサービスファイルを作り、`systemctl link`→`systemctl enable --now`で登録・起動すれば、そのサービスはroot権限で動く。あるいは`SYSTEMD_EDITOR`環境変数に自分のスクリプトを指定した状態で`systemctl edit`を叩くと、そのスクリプトがrootで呼ばれる。

**rsync**: `--rsh`(または`-e`)オプションで、任意のコマンドを「リモートシェル」として起動できる。`sudo rsync -e /bin/sh ...`のような形で、rootのシェルを直接取れる。

つまりこの設定は、**一般ユーザーのまま実質rootになれる**、という状態だった。`poweroff`だけは被害が限定的(シャットダウンのみ)だが、残り2つは深刻。

## 誰がこれを使っていたのか

このPCで動いている自動化を一通り確認したが、`systemd` timerにもcronにも、この3つのNOPASSWDに依存しているものは見当たらなかった。

答えは、別のマシン(自宅のミニPC、以下NAS)側にあった。`backup-arch`という、このPCの`/home` `/boot` `/etc`を毎晩NASへrsyncでバックアップするスクリプトが、SSH経由でこのPCに対して`sudo rsync`を実行していた。バックアップ完了後、`sudo systemctl stop/start`でコンテナを一時停止する処理と、`sudo poweroff`で自動シャットダウンする処理も持っていた。

`backup-arch`の最初のコミットは2025年10月。当時は別のAIアシスタントを使って組んだもので、SSH経由の`sudo`実行を前提にした設計だった。`systemctl`を使っていた「バックアップ前後にコンテナを止める」処理は、後になって「そもそも止める対象がバックアップ範囲に含まれておらず、意味が無かった」という理由で既に削除されていたが、sudoers側の許可だけが広いまま残っていた。

## 絞り込みの設計: rrsyncとSSH強制コマンド

`rsync`と`systemctl`のNOPASSWDを外し、その代わりに、必要な操作だけをできる形に絞り込むことにした。

rsyncには`rrsync`(restricted rsync)という、rsync本体に同梱されている補助スクリプトがある。SSHの`authorized_keys`で、特定の鍵に対して`command="rrsync -ro /path/to/dir"`のように強制コマンドを指定すると、その鍵で接続してきたクライアントが何を要求しても無視され、指定した1つのディレクトリへの読み取り専用アクセスだけが許可される。

ただし`rrsync`は、**1回の起動につき1つのディレクトリしか制限できない**。今回は`/home` `/boot` `/etc`の3か所が必要だったので、ディレクトリごとに専用の鍵を1本ずつ、計3本作った。加えて、シャットダウン専用の鍵をもう1本。合計4本の鍵、それぞれに対応する強制コマンドを`authorized_keys`に設定した。

```text
command="sudo /usr/bin/rrsync -ro /home",restrict ssh-ed25519 AAAA... nas-backup-home
command="sudo /usr/bin/rrsync -ro /boot",restrict ssh-ed25519 AAAA... nas-backup-boot
command="sudo /usr/bin/rrsync -ro /etc",restrict ssh-ed25519 AAAA... nas-backup-etc
command="sudo /usr/bin/poweroff",restrict ssh-ed25519 AAAA... nas-backup-poweroff
```

`sudoers`側も、引数まで完全一致させた形にする。

```text
takashi ALL=(root) NOPASSWD: /usr/bin/rrsync -ro /home
takashi ALL=(root) NOPASSWD: /usr/bin/rrsync -ro /boot
takashi ALL=(root) NOPASSWD: /usr/bin/rrsync -ro /etc
takashi ALL=(root) NOPASSWD: /usr/bin/poweroff
```

sudoersでコマンドに引数を明示すると、**その引数と完全一致したときだけ**許可される。ワイルドカードを使わなければ、`rsync --rsh=/bin/sh ...`のような任意引数での起動はできなくなる。

### 罠: sudoが環境変数を消す

設定した直後、`rrsync`が「Not invoked via sshd」というエラーで落ちた。原因はソースを読んですぐ分かった。

```python
command = os.environ.get('SSH_ORIGINAL_COMMAND', None)
if command is None:
    die("Not invoked via sshd")
```

`rrsync`は、クライアントが本来要求してきたコマンド(`SSH_ORIGINAL_COMMAND`)を読んで、それが安全な範囲かを検証する。ところが`sudo`は、デフォルトでほとんどの環境変数を消してから子プロセスを起動する。`command="sudo rrsync ..."`という形で強制コマンドを組んでいたので、`rrsync`にたどり着く前に肝心の環境変数が消えていた。

```text
Defaults!/usr/bin/rrsync env_keep += "SSH_ORIGINAL_COMMAND SSH_CONNECTION"
```

sudoersに、`rrsync`実行時だけこの2つの環境変数を残す設定を1行追加して解決した。

### 余談: rrsyncのTOCTOU対策が思ったより本格的だった

`rrsync`のソース(Pythonで書かれている、`/usr/share/doc/rsync/support/rrsync`が原本で、Arch Linuxでは`/usr/bin/rrsync`にインストールされる)を読んでいて、単なる「パスをディレクトリ配下に制限するだけのラッパー」だと思っていたら、思ったよりずっと本格的なTOCTOU(Time-of-check to time-of-use)対策が入っていて感心した。`validated_arg()`関数の一部を、コメントごとそのまま引用する。

```python
            # Inode-pin the validated path so an attacker cannot flip a
            # path component AFTER realpath validates it but BEFORE the
            # exec'd rsync resolves it.
            #
            # CRITICAL: open with O_RDONLY (not O_PATH).  An O_PATH fd
            # holds a path/dentry reference and /proc/self/fd/N for an
            # O_PATH fd re-resolves the path on open -- which means the
            # race window stays open across the exec.  A regular
            # O_RDONLY fd holds an open file (inode-bound), and
            # /proc/self/fd/N for a regular fd references the inode
            # directly -- exactly the race-closing primitive we need.
            #
            # O_NOFOLLOW on this open means a symlink that raced into
            # place between realpath and this open is refused at the
            # leaf.  A subsequent fstat() + readlink-of-fd verifies the
            # pinned inode is still within the restricted tree (a
            # parent-component race that landed on an in-tree symlink
            # but outside-tree target would surface here).
            try:
                if sender_leaf_unopened:
                    raise InterruptedError()   # jump to the sender-pin branch
                try:
                    # O_NONBLOCK so a special file that raced in after the
                    # lstat above still cannot block this open.
                    fd = os.open(real_arg,
                                 os.O_RDONLY | os.O_NOFOLLOW | os.O_NONBLOCK)
                except IsADirectoryError:
                    fd = os.open(real_arg,
                                 os.O_RDONLY | os.O_NOFOLLOW | os.O_DIRECTORY)
            except InterruptedError:
                fd = None
            except FileNotFoundError:
                if am_sender:
                    die('post-realpath open failed (race detected):',
                        orig_arg, 'No such file or directory')
```

`os.path.realpath()`でパスを検証した**直後**に、誰かがシンボリックリンクをすり替えて制限ディレクトリの外を指すようにする、という古典的なTOCTOU攻撃がある。これに対して、検証したパスを`O_NOFOLLOW`付きで開いてファイルディスクリプタとして握っておき(`O_PATH`ではなく通常の`O_RDONLY`で開くのがポイントで、コメントにある通り`O_PATH`だと`/proc/self/fd/N`が open 時にパスを**再解決**してしまいレース窓が閉じない)、以降のrsync本体の処理はそのfd経由(`/proc/self/fd/N`)でアクセスさせることで、検証後のすり替えを物理的に塞いでいる。**「実際に落ちた原因を追っている最中にたまたま読んだラッパースクリプトの中に、本格的なセキュリティエンジニアリングが埋まっていた」**という、今回の調査の中で一番愉快な副産物だった。

## 1回目の事故

絞り込みの途中、4本の鍵が正しく強制コマンドを発動するか、順番に接続テストをした。home・boot・etcはsudoのパスワードを要求されて失敗し(まだ絞り込み前だったので)、poweroffも同じように失敗するだろうと考えて、同じ調子でテストした。

**実際には成功して、PCが本当にシャットダウンした。**

原因は単純だった。その時点で`sudoers`にはまだ、絞り込み前の広い`NOPASSWD:/usr/bin/poweroff`(引数を問わない形)が残っていた。`poweroff`は成功すれば必ず実際にシャットダウンする、という当たり前のことを、「一連の動作確認の一部」として無言で実行してしまった。

## 引数を完全一致に絞った後、2回目の事故

`sudoers`を引数完全一致の形に直し、home・boot・etcの3本が正しく動くことを確認し、`backup.py`(NAS側のバックアップスクリプト)も新しい鍵構成に書き換えて、手動でフル実行させて成功を確認した。ここまでは順調だった。

その後、しばらく経ってから、**また突然PCが落ちた。**

## 原因を追う

まず、確実な事実から押さえた。

```text
$ journalctl -b -1 -u sshd --since "23:00"
9月 29 23:06:31 takashi-pc sshd-session[24158]: Accepted publickey for takashi
    from 192.168.3.20 port 39462 ssh2: ED25519 SHA256:bAFktN8...
```

指紋を照合すると、`nas-backup-poweroff`(シャットダウン専用の鍵)と完全に一致した。NAS(`192.168.3.20`)から、この鍵で正規に接続があり、強制コマンドが正しく発動した、という事実は動かない。

問題は、**何がこの接続を起こしたのか**、だった。

- **プロセス一覧**: NAS上にrsync/ssh/poweroff絡みの幽霊プロセスは残っていない
- **SSH多重化ソケット**: 残っていない
- **cron**: 全行コメントアウト済みで、何も動いていない
- **systemd timer**: `backup-arch.timer`は前日03:21に実行済み、次回は翌日03:16。この時間帯には動いていない
- **ssh-agent**: NASにはそもそもエージェント自体が起動していない
- **シェルの`chpwd`/`precmd`/終了フック**: `.zshrc`等に該当する仕掛けは無い

一つ、検討する価値のある仮説が残った。**もしssh-agentに4本の鍵が読み込まれていたら**、`ssh arch`のような、この鍵を指定していない普通の接続でも、エージェントが持っている鍵を順に試し、たまたま`poweroff`用の鍵が先に認証を通ってしまう可能性がある。そうなれば、クライアントが何を要求したかに関係なく、サーバー側の強制コマンドが動く。

この仮説は、ssh-agentが動いていないことで直接否定できた。それでも念のため、OpenSSHのソース(このマシンと同じ`OpenSSH_10.5p1`を`git clone --depth 1 https://github.com/openssh/openssh-portable.git`でそのままクローン)を読んで、`readconf.c`の該当箇所を確認した。`fill_default_options()`という、設定ファイルを読み終えた後に空欄を既定値で埋める関数の中に、この判定がある。

```c
	if (options->add_keys_to_agent == -1) {
		options->add_keys_to_agent = 0;
		options->add_keys_to_agent_lifespan = 0;
	}
	if (options->num_identity_files == 0) {
		add_identity_file(options, "~/", _PATH_SSH_CLIENT_ID_RSA, 0);
		add_identity_file(options, "~/", _PATH_SSH_CLIENT_ID_ECDSA, 0);
		add_identity_file(options, "~/",
		    _PATH_SSH_CLIENT_ID_ECDSA_SK, 0);
		add_identity_file(options, "~/",
		    _PATH_SSH_CLIENT_ID_ED25519, 0);
		add_identity_file(options, "~/",
		    _PATH_SSH_CLIENT_ID_ED25519_SK, 0);
		add_identity_file(options, "~/",
		    _PATH_SSH_CLIENT_ID_MLDSA44_ED25519, 0);
	}
	if (options->escape_char == -1)
		options->escape_char = '~';
```

`add_identity_file()`が呼ばれる箇所は`if (options->num_identity_files == 0)`のガード1本だけで、他のどこにも既定鍵を足す経路は無い。`num_identity_files`は`readconf.c`の`process_config_line()`内、`oIdentityFile`(`IdentityFile`ディレクティブのパース)がヒットするたびに`add_identity_file()`経由でインクリメントされる値そのものだ。つまり「`IdentityFile`を1回でも書いた瞬間、この関数のガードはfalseになり、二度と既定鍵は足されない」という単純な話で、複数の`IdentityFile`を書いても、ssh-agentを使っても関係ない。

接続に使っていた`~/.ssh/config`の`Host arch`ブロックは、明示的に`Identityfile ~/.ssh/arch_key`を書いていたので、`num_identity_files`は最低でも1になり、このガードには入らない。エージェントも動いていない。つまり、OpenSSHの仕組み上、**「別の目的で普通に接続したら、たまたま違う鍵が選ばれた」ということはソースレベルで起こり得ない**、と確認できた。

journalctlとカーネルログもb-1(前回起動)分を遡って確認したが、シャットダウン処理そのものの記録以外に手がかりは無かった。ログイン用のセッション情報は残っていても、**ターミナルに何を打ち込んだかという内容そのものは、そもそもどんなログにも記録されない**。技術的に、これ以上は追えなかった。

## 原因不明のまま、被害は減らす

何が接続を起こしたのか、最終的に特定できなかった。それでも、「鍵さえあれば無条件でシャットダウンできる」状態を放置するのは違う。原因が分からないなら、**結果の被害を小さくする**方向で対策した。

ガードスクリプトを1本追加した。`poweroff`用の鍵で接続があっても、直前10分以内に`home`・`boot`・`etc`の3本全部のrrsyncが実際に成功した記録(このPC自身の`journalctl`のsudoログ)が無ければ、シャットダウンを拒否する。

```bash
#!/bin/bash
set -euo pipefail
WINDOW="-10 min"

for dir in home boot etc; do
    if ! journalctl -t sudo --since "$WINDOW" 2>/dev/null \
            | grep -q "COMMAND=/usr/bin/rrsync -ro /$dir"; then
        echo "backup-arch guard: recent rrsync for /$dir not confirmed, refusing shutdown" >&2
        exit 1
    fi
done

exec /usr/bin/shutdown -h +1 "backup-arch: verified shutdown after backup"
```

このスクリプトはroot所有・書き込み不可にした上で、`authorized_keys`の強制コマンドと`sudoers`の両方を、生の`poweroff`ではなくこのスクリプト経由に変更した。承認条件が揃わなければ拒否され、揃っていても即座に落ちるのではなく`shutdown -h +1`(1分後、全端末に警告表示、`sudo shutdown -c`でキャンセル可)にした。

拒否側の動作は、実際に接続して確認済み。承認側(本物のバックアップ後に本当にシャットダウンする流れ)は、この記事を書いている時点では、その夜の`backup-arch.timer`の本番実行を待っている。

## 教訓

- **NOPASSWDに引数を付けないと、実質的に無制限の権限を渡していることになる。** GTFOBinsは、この種の「便利だから広く許可した」設定がどれだけ危ういかを機械的に教えてくれる。
- **rrsyncのような制限付きラッパーは、1つの目的にしか使えないよう最初から設計されている。** それに合わせて、鍵1本に1つの役割、という単位で分割する方が、結局は管理しやすい。
- **sudoは環境変数を消す。** 強制コマンドの後ろに別のツールを挟むときは、そのツールが何を前提にしているか(環境変数、標準入出力、カレントディレクトリ)を疑ってかかる必要がある。
- **原因が特定できないことは、対策を諦める理由にならない。** 「なぜ起きたか」が分からなくても、「起きたときにどこまで被害が広がるか」は設計で縮められる。

原因不明のまま終わった調査というのは、正直、気持ちのいいものではない。それでも、調べられる場所は全部調べた上で「分からない」と言うのと、調べずに「分からない」と言うのとでは、次に同じことが起きたときの備え方が違う。
