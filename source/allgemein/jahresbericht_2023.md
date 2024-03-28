---
layout: base_nofollow.njk
permalink: /allgemein/rueckblick2023/
---

# off_gallery graz – Projektbericht 2023

      {% image "./assets/pics/2023/grauzonen/ansichten/_MG_9783_(c)_martin_grabner.jpg", "alt", "(min-width: 840px) 720px, calc(93.08vw - 43px)", "Ansicht der Ausstellung „Grauzonen“, Bild: Martin Grabner" %}
	  
	   {% image "./assets/pics/grauzonen-opening/grauzonen-opening-20.jpg", "alt", "(min-width: 840px) 720px, calc(93.08vw - 43px)", "Phosphor-Schlamm bei Kutina. Aus „Imported Desert“ von Bojan Mrđenović. (c) Bojan Mrđenović" %}
	  
	  
    


{%- for rueckblick in collections.rueckblick2023 -%}
<section>
{{ rueckblick.content }}
</section>
{%- endfor -%}

<br/>

## Ausstellungen und Veranstaltungen im Jahr 2023


{%- for ausstellung in collections.ausstellung2023 -%}


{% if ausstellung.data.permalink != "/ausstellungen/2023/bau_stoff_wechsel/" %}
{% if ausstellung.data.permalink != "/ausstellungen/2023/potenzial-des-unscheinbaren/" %}

<section>
<br/>
<h2> {{ausstellung.data.artists}}: {{ausstellung.data.title}}</h2>

{{ ausstellung.content }}
</section>
{% endif %}
{% endif %}

{%- endfor -%}



## Zusätzliche Veranstaltungen / Host Month

{%- for ausstellung in collections.ausstellung2023 -%}

{% if ausstellung.data.permalink == "/ausstellungen/2023/potenzial-des-unscheinbaren/" %}

<section>
<br/>
<h2> {{ausstellung.data.artists}}: {{ausstellung.data.title}}</h2>

{{ ausstellung.content }}
</section>
{% endif %}

{%- endfor -%}


### Veränderungen gegenüber der Planung für 2021 (Korrigierte Version der “Beilage zum Jahresprogramm 2022” vom Main 2022”)
