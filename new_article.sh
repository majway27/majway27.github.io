#!/bin/bash
now=$(date +"%Y-%m-%d")
echo -n "Title? "
read title
filename=$now-$title\.markdown
cp ./template ./_posts/$filename
c9 open ./_posts/$filename