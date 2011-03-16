---
layout: post
title: Post generation and ignoring files
published: false
date: 2011-03-16T02:45:09Z
signature: Sam Mulube
---

# Page generator

In the quest for a simple to deal with blogging platform, for the massive
amount of posts I'm unlikely to write, this blog is now hosted on github pages.
This is fine, and I think it will work ok for me, but I wanted a little tool to
automate some of the cruft neeeded to publish pages to Github.

Ideally I wanted a Rake task that would: given a page title, create a correctly
named file (including date in the file name, plus with the title converted into
url friendly (slug) form.

This was actually very straightforward (trivial) to implement, but I enjoyed
using [Stringex](httpss://github.com/rsl/stringex) for generating page URLs.

Anyway, here's the very minimal Rakefile in total

# Ignore files

Having added Rakefile and Gemfiles to the blog, these were getting published to
the generated site, when content was pushed to Github. I don't think this is a
particular issue, as nothing particularly confidential there. However it seemed
a bit messy. 

I discovered that there's a exclude option that can be set for Jekyll
(http://blog.patrickcrosby.com/2009/09/05/jekyll-exclude-files.html)

Adding the desired exclusions had the desired effect, that these files were no
longer publically available from the github pages.
