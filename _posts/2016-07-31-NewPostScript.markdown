---
layout: post
title:  "Add Jekyll Post"
teaser: "A quick script for a new Jekyll post from template."
date:   2016-07-25
categories: lazy
---
Here is a quick and easy way to start a new post:

{% highlight bash %}
#!/bin/bash
now=$(date +"%Y-%m-%d")
echo -n "Title? "
read title
filename=$now-$title\.markdown
cp ./template ./_posts/$filename
c9 open ./_posts/$filename
{% endhighlight %}

The last line opens it in my favorite IDE tool, C9.