---
layout: base.njk
changeFreq: weekly

---

<section>
  <h2>Ausstellungen</h2>
</section>


{%- for ausstellung in collections.ausstellung -%}
<section>
{{ ausstellung.data.image | renderTeaser() | safe }}
<a href="{{ausstellung.url}}">{{ausstellung.data.title}}</a>
<p>{{ ausstellung.data.teaser }} </p>
</section>
{%- endfor -%}
