---
layout: base_nofollow.njk
permalink: /allgemein/rueckblick2024/
---

# off_gallery graz – Projektbericht 2023

      {% image "./assets/pics/2024/nature-de-luxe/opening/andrew-opening-nature-de-luxe.jpg", "alt", "(min-width: 840px) 720px, calc(93.08vw - 43px)", "Andrew Phelps bei der Eröffnung der  Ausstellung „Nature de Luxe“, Bild: Peter Rieser" %}
	  
	   {% image "./assets/pics/2024/getting-close/workshop/cyanotype-workshop-1.jpg", "alt", "(min-width: 840px) 720px, calc(93.08vw - 43px)", "Zyanotypie-Workshop mit Liz Nicol“, Bild: Heinz Wittenbrink" %}
	  
	 <br/>
	 <br/>
 

{%- for rueckblick in collections.rueckblick2024 -%}
<section>
{{ rueckblick.content }}
</section>
{%- endfor -%}

<br/>

## Ausstellungen und Veranstaltungen im Jahr 2024


{%- for ausstellung in collections.ausstellung2024 -%}


{% if ausstellung.data.permalink != "/ausstellungen/2024/ghosts-of-memories/" %}

<section>
<br/>
<h3> {{ausstellung.data.title}}</h3>

{{ ausstellung.content }}
</section>
{% endif %}

{%- endfor -%}



## Zusätzliche Veranstaltungen / Host Month

{%- for ausstellung in collections.ausstellung2024 -%}

{% if ausstellung.data.permalink == "/ausstellungen/2024/ghosts-of-memories/" %}

<section>
<br/>
<h2> {{ausstellung.data.title}}</h2>

{{ ausstellung.content }}
</section>
{% endif %}

{%- endfor -%}

<br/>
<br/>

### Veränderungen gegenüber der Planung für 2024 

Die Ausstellung „Eine Ahnung von Wildnis – A Notion of the Wild“ haben wir zusätzlich in das Programm aufgenommen. Sie verweist auf unser Jahresprogramm 2024, dessen Thema „Sehnsucht nach Wildnis“ ist. Eine ursprünglich vorgesehene Ausstellung zur Infrastruktur Venedigs angesichts der Bedrohung durch Überflutung wird durch eine Ausstellung über die venezianische Lagune im Frühjahr 2024 ersetzt. 

### Ansichten der Ausstellungen im Web

Ansichten aller Ausstellungen des Jahres 2024 sowie vieler der gezeigten Werke sind auf unserer Website (jeweils in den Abschnitten „Ansichten“ und „Werke“ zu den einzelnem Ausstellungen) publiziert. URL: <https://offgallery.at/ausstellungen>

