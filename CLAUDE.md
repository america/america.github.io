# CLAUDE.md

## Reactビルドの運用ルール

このリポジトリはHugo静的サイト + 一部ページにReactコンポーネントを埋め込む構成。

- GitHub Actions(`.github/workflows/gh-pages.yml`)は `hugo --minify` のみを実行する。ReactのビルドはCIに含まれていない。
- `src/react/*.jsx` / `*.tsx` を変更した場合、または `data-diagram` 属性を使う新規ページ/記事を追加した場合は、pushする前に必ず `npm run build-react`(= `node scripts/build-react.mjs`)を実行し、`static/js/bundle.js` / `bundle.js.map` の変更も同じコミットに含めること。
- ビルドには `SUPABASE_URL` / `SUPABASE_ANON_KEY` 環境変数が必要(`.env` 経由、`.env.example` 参照)。未設定だとビルドスクリプトはエラー終了する。
- 純粋なMarkdown記事(Reactマウントポイントを使わないもの)のみの変更ならReactビルドは不要。

## GitHub Pagesデプロイが `Deployment cancelled` で失敗する場合

`Deploy Hugo site to GitHub Pages` ワークフローの `deploy` ジョブが `##[error]Deployment cancelled.` で失敗することがある(例: run #82, 2026-08-06)。

- Hugoのビルド自体は成功しアーティファクトも作成済みで、`actions/deploy-pages@v4` がデプロイステータスを確認している段階でキャンセルされる、GitHub Pages側の一時的な不具合。
- ワークフローの `concurrency.cancel-in-progress: false` 設定が原因でキャンセルされているわけではない。
- コードやワークフロー設定に問題があるわけではないので、修正は不要。GitHub Actionsの画面から「Re-run failed jobs」で再実行すれば成功する(実際に再実行で解決した)。
- 頻発するようであれば、デプロイ失敗時の自動リトライステップの追加を検討する。

## 未完了タスク

- `src/react/ReactionButton.tsx` / `src/react/supabaseClient.ts`(Supabase連携のいいねボタン)はまだ `src/react/index.jsx` のmount対象に登録されておらず、どのページにも配置されていない。Supabase側の `reactions` テーブルと `increment_reaction` RPC関数の存在確認も未実施。
- **上記に伴い、`.env.example` / `scripts/build-react.mjs` / `src/react/ReactionButton.tsx` / `src/react/supabaseClient.ts` はコミットしないこと。** リアクションボタン機能が完成する(index.jsxへの組み込み・実配置・Supabase側の動作確認まで終わる)まで、これらのファイルはuntrackedのまま維持する。機能が完成したら、この一文は削除してまとめてコミットしてよい。
