---
layout: page
title: Tags
permalink: /tags/
sitemap:
  priority: 0.7
---
{% for tag in site.tags %}
* [{{ tag.title }}]({{ site.baseurl }}/tags/{{ tag.title }})
{% endfor %}
