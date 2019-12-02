---
layout: base.njk

---


## Ausstellungen
<ul class="collection_index">

{%- for ausstellung in collections.ausstellung -%}
<li>
<img class="teaser_image" src="/assets/pics/{{ausstellung.data.image}}.jpg"/>
<a href="{{ausstellung.url}}">{{ausstellung.data.title}}</a>
<p>{{ ausstellung.data.teaser }} </p>
</li>
{%- endfor -%}

</ul>
