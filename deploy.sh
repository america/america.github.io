#!/bin/bash

# Build the site
hugo

# Push to gh-pages branch
git checkout gh-pages
cp -r public/* .
git add .
git commit -m "Deploy site updates"
git push origin gh-pages
git checkout main
