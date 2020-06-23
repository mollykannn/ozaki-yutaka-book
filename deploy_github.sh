set -e

gitbook build

cd _book

git init
git add -A
git commit -m 'Page Deploy'
git push -f git@github.com:mollykannn/ozaki-yutaka-book.git master:gh-pages

cd ..
git add .
git commit -a -m "$1"
git push origin master