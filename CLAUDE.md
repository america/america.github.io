# CLAUDE.md

## Reactビルドの運用ルール

このリポジトリはHugo静的サイト + 一部ページにReactコンポーネントを埋め込む構成。

- GitHub Actions(`.github/workflows/gh-pages.yml`)は `hugo --minify` のみを実行する。ReactのビルドはCIに含まれていない。
- `src/react/*.jsx` / `*.tsx` を変更した場合、または `data-diagram` 属性を使う新規ページ/記事を追加した場合は、pushする前に必ず `npm run build-react`(= `node scripts/build-react.mjs`)を実行し、`static/js/bundle.js` / `bundle.js.map` の変更も同じコミットに含めること。
- ビルドには `SUPABASE_URL` / `SUPABASE_ANON_KEY` 環境変数が必要(`.env` 経由、`.env.example` 参照)。未設定だとビルドスクリプトはエラー終了する。
- 純粋なMarkdown記事(Reactマウントポイントを使わないもの)のみの変更ならReactビルドは不要。

## アクセス解析(Cloudflare Web Analytics)

- `layouts/partials/extend_head.html` に、Cloudflare Web Analyticsのビーコンスクリプトを埋め込み済み(2026-08-12)。PaperModの`head.html`が`extend_head.html`を呼ぶ拡張ポイントなので、全ページの`<head>`に自動で入る。
- Cookieを使わず個人を特定しない集計方式のため、GDPR同意バナー等の追加対応は不要という判断。GAのような個人単位トラッキングは使っていない。
- 管理画面: Cloudflareダッシュボード(`dreamers.ball66@gmail.com`アカウント) → Analytics → Web analytics → `america.github.io`。DNSをCloudflareに向けているわけではない(GitHub Pagesのまま)、JSスニペットによる手動セットアップ。同アカウントには無関係の別サイト`america66.work`も登録されているので混同しないこと。
- `data-cf-beacon`のトークンは公開ビーコン用で秘匿情報ではない(HTMLに埋め込まれて配信される前提のもの)ため、リポジトリにコミットして問題ない。

## OGPカバー画像(cover.png)は毎回作る

- ページバンドル形式(`content/post/<slug>/index.md`)の新規記事には、**聞かれる前に毎回**`cover.png`(1200×630)を作ること。「前回面倒だったから今回は省略する」は禁止(2026-08-14に実際にそれをやって指摘された)。
- PaperModテーマは記事のページバンドル内にある`*cover*`という名前を含む画像ファイルを自動検出し、`og:image`(OGP/Twitterカード用)として使う。frontmatterに`cover:`キーは不要。
- 画像の作り方: HTML/CSSでデザイン→`python3 -m http.server`でローカル配信→`chromium --headless --disable-gpu --no-sandbox --hide-scrollbars --window-size=1200,630 --screenshot=out.png URL`でheadless Chromiumから直接スクリーンショット。これで1200×630ぴったり、端まで欠けなく撮れる。
  - **`mcp__claude-in-chrome`のブラウザ拡張機能(`resize_window`→スクリーンショット/`zoom`)は使わないこと**。このユーザーの環境(Sway/swayfxのタイリングWM)では`resize_window`が実際のウィンドウ幅に反映されず、指定サイズと違う範囲がキャプチャされて画像の端が欠ける(実際に一度これで失敗した)。
  - サーバー起動時、zshの`noclobber`設定により`command > 既存のログファイル`のリダイレクトが失敗することがある。ログは`/dev/null`に捨てるか、事前に`rm -f`しておく。
- ユーザーはPSN(PlayStation Network)のチャットでリンクを貼ってプレビューを確認することが多い。PSNのリンクプレビューキャッシュは**クエリパラメータ(`?v=2`等)でのキャッシュ回避が効かない**(URL正規化で無視される可能性)。画像を直したのにPSN側のプレビューが更新されない場合は、**画像ファイル名自体を変える**(`cover.png`→`cover-v2.png`など)とキャッシュを回避できた実績がある。
- 複数記事のカバーが似たテンプレートの使い回しにならないよう、記事ごとに配色・モチーフを変えること(2026-08-14、2記事目のカバーを1記事目とほぼ同じレイアウト・配色で作ってしまい指摘された)。
- 戦争・歴史・政治的に敏感なテーマの記事では、国旗を連想させる色や形(赤い円、日の丸を思わせる配置など)を安易に装飾に使わないこと。2026-08-14、特攻隊をテーマにした記事のカバーに赤い円を置いたところ「右翼っぽくない?」と指摘され、削除・配色変更した。意図してなくても、テーマとの組み合わせ次第で特定の政治的立場を連想させてしまう。

## GitHub Pagesデプロイが `Deployment cancelled` で失敗する場合

`Deploy Hugo site to GitHub Pages` ワークフローの `deploy` ジョブが `##[error]Deployment cancelled.` で失敗することがある(例: run #82, 2026-08-06)。

- Hugoのビルド自体は成功しアーティファクトも作成済みで、`actions/deploy-pages@v4` がデプロイステータスを確認している段階でキャンセルされる、GitHub Pages側の一時的な不具合。
- ワークフローの `concurrency.cancel-in-progress: false` 設定が原因でキャンセルされているわけではない。
- コードやワークフロー設定に問題があるわけではないので、修正は不要。GitHub Actionsの画面から「Re-run failed jobs」で再実行すれば成功する(実際に再実行で解決した)。
- 頻発するようであれば、デプロイ失敗時の自動リトライステップの追加を検討する。
- 2026-08-06中に「Deployment cancelled」(朝)と「deployment_in_progressが数分続く」(深夜、最終的には自動成功)の2回、同種の詰まりを経験した。ホスティング自体をCloudflare Pages/Netlify/Vercelなどに乗り換える案も出たが、今すぐ移行する話にはなっていない。今後また頻発するようなら移行を検討する。

## リアクションボタン(Supabase連携)

- `src/react/ReactionButton.tsx` / `src/react/supabaseClient.ts` で実装。`layouts/partials/extend_post_content.html`(PaperModの拡張ポイント)経由で `type: post` の全記事本文末尾に自動配置される(`data-slug` はページの `RelPermalink`)。個別記事に手動でshortcodeを置く必要はない。
- Supabase側に `reactions` テーブル(`slug`, `reaction`, `count`)と `increment_reaction` RPC(SECURITY DEFINERでinsert/update)が必要。**`anon`ロール向けのSELECT用RLSポリシーが無いと、クリック直後は正しい数字が見えても、ページをリロードすると常に0/…に戻る**(RPCはRLSを回避して書き込めるが、初回ロードの直接SELECTはRLSでブロックされるため)。2026-08-12時点で `create policy "Allow public read of reaction counts" on reactions for select to anon using (true);` を追加済み。
- Supabaseの無料プランは非アクティブが続くと自動的にプロジェクトが一時停止(pause)し、その間はプロジェクト固有のURLごとDNSが引けなくなる。ダッシュボードで「Restore project」すれば数分で復帰する。
- `.env` の `SUPABASE_ANON_KEY` は一度、先頭の`e`が欠落した状態でコミットされかけたことがある(JWTなので`eyJ...`で始まるはず)。値を入れ替えるときは先頭文字まで含めて完全一致しているか確認すること。
- リアクション種別は `ReactionButton.tsx` 内の `REACTIONS` 配列(`like`👍 / `laugh`😂 / `sad`😢)で定義。`increment_reaction` RPCは `p_reaction` を汎用的にupsertする実装(reaction名を決め打ちしていない)なので、種別を増やす場合はDB側の変更は不要で `REACTIONS` 配列に追加するだけでよい。1記事1レコードではなく `(slug, reaction)` の組で行が分かれる点に注意。

## コメント機能(Supabase連携、2026-08-15追加)

- `src/react/CommentSection.tsx` で実装。リアクションボタンと同じ `layouts/partials/extend_post_content.html` の拡張ポイントに `data-diagram="comments" data-slug="{{ .RelPermalink }}"` として配置され、`type: post` の全記事に自動で付く。
- Supabase側に `comments` テーブル(`id`, `slug`, `author_name`, `body`, `approved` boolean default false, `created_at`)が必要。SQLは会話ログ参照(2026-08-15にSQL Editorで作成済み)。
- **投稿は承認制**。`anon`のINSERTポリシーは `with check (approved = false)` で、投稿者が自分でapproved=trueにして即表示させることはできない。`anon`のSELECTポリシーは `using (approved = true)` で、未承認のコメントは他の閲覧者には一切見えない。新しいコメントを表示するには、Supabaseダッシュボード(またはSQL Editorで `update comments set approved = true where id = '...'`)で手動承認する運用。
- フォームには画面上非表示のハニーポット用input(`comment-honeypot`クラス、`tabIndex={-1}`, `aria-hidden`)があり、ここに値が入っていたら送信をUI上は成功したように見せつつ実際にはSupabaseへ送信しない(単純なbot対策、人間はこのフィールドに触れない前提)。
- 2026-08-15、ローカルのHugoサーバーで実際に投稿→リロードで非表示確認→SQL Editorで`approved = true`に更新→リロードで表示確認、という一連の流れを実機で確認済み。
- **新規コメント投稿時のメール通知(2026-08-15追加)**: Supabaseダッシュボードを開かないと新着コメントに気づけない問題への対策として、`comments`テーブルへのINSERT時にResend([resend.com](https://resend.com)、無料枠)経由でメール通知を送るPostgresトリガーを設定済み。Edge Functionは使わず、`pg_net`拡張(`net.http_post`)でSupabase Postgres上のトリガー関数から直接Resend APIを呼ぶ構成。APIキーはSupabase Vault(`vault.create_secret` / `vault.decrypted_secrets`)に保存し、平文でSQLや会話に残さない運用。送信元は`onboarding@resend.dev`(ドメイン認証なしで使えるResendのテスト送信元)、宛先は`dreamers.ball66@gmail.com`固定。トリガー関数名は`notify_new_comment`、トリガー名は`on_new_comment`。2026-08-15、ローカルでテストコメントを投稿し、実際にGmailへ通知メール(件名「新しいコメントが届きました」)が届くことを確認済み。

## scroll-reveal.js の threshold トラップ(2026-08-12修正)

- `assets/js/scroll-reveal.js` はスクロールで視界に入った要素に `reveal-in` を付けて `site-pop-in` アニメーションを発火させる(`.post-content > *:first-child` などが対象)。`IntersectionObserver` の `threshold` を `0.15` にしていたが、これは「要素の高さの15%以上が同時にビューポートに入る」ことを要求するため、**ビューポートの6〜7倍を超える高さのコンポーネント(KimberlyCombosなど)では物理的に閾値へ到達できず、`opacity:0`のまま永久に非表示になる**バグがあった。DOM上には存在しコンソールエラーも出ないため発見しづらい。`threshold: 0` に変更して修正済み。今後、縦に長いReactコンポーネントを `.post-content` の最初の子要素として追加する場合はこの点に注意。

## アニメーション実装方針(2026-08-07時点)

- `src/react/SF6MozcInvestigation.jsx` のアニメーションは **Framer Motion**(`framer-motion`パッケージ、`dependencies`に追加済み)を使う。CSSのtransitionによる手書きアニメーションは廃止済み。今後この手のReactコンポーネントに新しいアニメーションを足す場合もFramer Motionで統一すること。
- `variants`/`staggerChildren`で段階的表示、`type:"spring"`(stiffness高め・damping低め)で勢いよく飛んできて弾む動きにしている。`MotionConfig reducedMotion="user"`で`prefers-reduced-motion`にも対応済み。
- サイト全体(`assets/css/custom.css`)の配色は明るいパレット(Inter/Newsreaderフォント)に統一済み、`hugo.toml`の`defaultTheme`は`light`固定。記事一覧カードと記事タイトルにも、CSSの`cubic-bezier(0.34, 1.56, 0.64, 1)`オーバーシュートイージングで同系統の「弾んで登場する」演出を入れている。
- SF6MozcInvestigation.jsxには浮遊ブロブ・電光ティッカー・動くグラデーション枠がまだ残っている。
- **訂正(2026-08-07)**: 「過剰装飾ぎみ」という指摘はユーザー本人の発言ではない(以前のセッションでの記録が不正確だった可能性がある)。ユーザーが実際に指示したのは逆で、**「シュイーン」と勢いよく動く、プロを超えるレベルのデザインにしたい**という方向。装飾を削る方向には倒さないこと。次に触るときは、Framer Motionでさらに速度・勢いのあるモーション(spring設定のstiffnessをさらに上げる、streakを強調する等)を検討する。

## 多言語対応(日英同時投稿、2026-08-17〜)

- **新規記事は日本語版(`index.md`)と英語版(`index.en.md`)を同時に作成する。** 聞かれる前に毎回両方書くこと(cover.pngと同じ扱い)。
- `hugo.toml`の`[languages]`で`ja`(weight 1)・`en`(weight 2)を定義済み。`defaultContentLanguage = 'ja'`、`defaultContentLanguageInSubdir = false`のため、日本語はルート直下、英語版は`/en/`配下に生成される。
- タグは言語非依存のslug(英単語、例: `psychology`, `loneliness`, `transcript`)で統一する。表示名は`content/tags/<slug>/_index.md`(日本語名)と`_index.en.md`(英語名)のペアで管理する。新しいタグを使う前に、`content/tags/`配下に対応するペアが既にあるか確認し、なければ新規作成する。
- 既存の日本語タグ(例: "心理学")を使っている記事に後から英語版を足す場合、**同じタグを共有している他の全記事のtagsも一緒にslugへ変更する**こと。変更前に`grep -rl "^  - <タグ名>$" content/post/*/index.md`等で共有範囲を必ず確認する(2026-08-17、これを怠ると日英でタグが分断される不具合が起きた)。
- 新設するタームページの`_index.md`には`aliases: - /tags/<旧日本語URL>/`を必ず付ける。本番で既に旧URL(日本語タグ名そのまま)がインデックスされている可能性があるため、リダイレクトを維持する。
- 言語切り替えボタン(ヘッダーの En/Ja)は`layouts/partials/header.html`(PaperMod標準からの上書き、2026-08-17追加)で、現在ページ自身の`.Translations`を参照する実装。英語版が存在しない記事ではサイト直下へのフォールバックになる。
- Hugo devサーバーのFast Render Modeは、タグページや記事一覧のキャッシュが古いまま残ることがある(特に新規タグ追加や既存`tags:`変更の直後)。確認時に記事が0件/一部だけ表示されて見えたら、**まずサーバーを再起動(`--disableFastRender`推奨)してフルリビルドしてから再確認する**。ブラウザ側は`scroll-reveal.js`のフェードイン中は一瞬記事が見えないだけのことがあるので、数秒待つかDOM(`getComputedStyle`等)を直接確認してから「表示されない」と判断すること。
