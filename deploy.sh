#!/usr/bin/env  sh

set -e

npm run build

git init
git add -A
git commit -m 'New Deploy'
git push -f  https://github.com/boss-oma/vuejs-pages.git master:gh-pages

