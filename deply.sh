#!/bin/bash

# 静的ファイルをビルド
echo "Building the site..."
hugo --baseURL "https://america.github.io/"

# gh-pages ブランチへデプロイ
echo "Deploying to gh-pages branch..."
git checkout gh-pages || exit 1
cp -r public/* . || exit 1
git add .
git commit -m "Deploy site on $(date '+%Y-%m-%d %H:%M:%S')"
git push origin gh-pages || exit 1
git checkout main || exit 1
