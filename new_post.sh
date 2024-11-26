#!/bin/bash

# 記事のタイトルを引数として受け取る
if [ -z "$1" ]; then
  echo "Usage: $0 <post-title>"
  exit 1
fi

POST_TITLE="$1"
POST_SLUG=$(echo "$POST_TITLE" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')

# 新しい記事を作成
hugo new "posts/${POST_SLUG}.md"

# 編集を開始
echo "New post created: content/posts/${POST_SLUG}.md"
echo "Opening the post for editing..."
nvim "content/posts/${POST_SLUG}.md"
