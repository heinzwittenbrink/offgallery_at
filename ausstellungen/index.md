---
layout: base.njk

---


## Ausstellungen



{%- for ausstellung in collections.ausstellung -%}
<section>
{{ ausstellung.data.image | renderTeaser() | safe }}
<a href="{{ausstellung.url}}">{{ausstellung.data.title}}</a>
<p>{{ ausstellung.data.teaser }} </p>
</section>
{%- endfor -%}
