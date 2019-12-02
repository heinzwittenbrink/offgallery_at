---
layout: base.njk

---

## News
<ul class="collection_index">
{%- for news in collections.news -%}
<li>
<a href="{{news.url}}">{{news.data.title}}</a>
<p>{{ news.data.teaser }} </p>
</li>
{%- endfor -%}

{%- assign news_old = collections.news_old | reverse -%}
{%- for news_old in collections.news_old -%}
<li>

<a href="{{news_old.url}}">{{news_old.data.title}}</a>
<p>{{ news_old.data.teaser }} </p>
</li>

{%- endfor -%}
</ul>
