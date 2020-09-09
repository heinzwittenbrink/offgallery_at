---
layout: base.njk
changeFreq: daily
pagination:
  data: collections.blog
  size: 2
  reverse: true
  alias: blog
---
<section>
<h2>Blog</h2>


<ul class="collection_index">
{%- for blog in blog -%}
<li>
<a href="{{blog.url}}">{{blog.data.title}}</a>
<p>{{ blog.data.teaser }}</p>
</li>
{%- endfor -%}
</ul>

{%- if pagination.pageLinks.length > 1 -%}
<nav class="pagination">
  {%- if pagination.previousPageLink -%}
    <a class="pagination__item" href="{{ pagination.previousPageHref | url }}">Neuere Posts</a>
  {%- endif -%}

  {%- if pagination.nextPageLink -%}
    <a class="pagination__item" href="{{ pagination.nextPageHref | url }}">Ältere Posts</a>
  {%- endif -%}
</nav>
{%- endif -%}

</section>
