#!/bin/bash

echo "Enter post title:"
read title
slug=$(echo "$title" | tr '[:upper:]' '[:lower:]' | tr -d ' ' | tr -cd '[:alnum:]_-')

hugo new content/posts/"$slug".md

echo "New post created: content/posts/$slug.md"
