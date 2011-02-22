---
layout: default
title: a sensitive dependence on initial conditions
---

<ul class="posts">
  {% for post in site.posts %}
    <li>
      <span class="post_date">{{ post.date | date_to_string }}</span>
      <span class="post_title"><a href="{{ post.url }}">{{ post.title }}</a></span>
    </li>
  {% endfor %}
</ul>
