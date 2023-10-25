---
title: ResponsiveImage Component
author: Heinz Wittenbrink
eventtype: "Eröffnung"
tags:
date: "2023-09-23"
teaser:
layout: base.njk

quote:
---

<style>
  main {
    padding: 30px;
    min-height: 10000px;
  }
  
  </style>

    <h1>ResponsiveImage Component</h1>

  <article>
    <h3>Portrait aspect ratio with caption</h2>
    <div style="resize:both;overflow:auto;border:1px solid black;padding:16px;height:400px">
      <figure class="responsive-image">
        {% image "./assets/pics/grauzonen-opening/grauzonen-opening-4.jpg", "alt", "(min-width: 840px) 720px, calc(93.08vw - 43px)" %}
        <figcaption>
        Phosphor-Schlamm bei Kutina. Aus „Imported Desert“ von Bojan Mrđenović. (c) Bojan Mrđenović
        </figcaption>
      </figure>
    </div>
  </article>

  <article>
    <h3>Landscape aspect ratio with caption</h2>
    <div style="resize:both;overflow:auto;border:1px solid black;padding:16px;height:400px">
      <figure class="responsive-image">
        {% image "./assets/pics/grauzonen-opening/grauzonen-opening-20.jpg", "alt", "(min-width: 840px) 720px, calc(93.08vw - 43px)" %}
        <figcaption>
        Phosphor-Schlamm bei Kutina. Aus „Imported Desert“ von Bojan Mrđenović. (c) Bojan Mrđenović
        </figcaption>
      </figure>
    </div>
  </article>
  
  <article>
    <h3>Landscape aspect ratio without caption</h2>
    <div style="resize:both;overflow:auto;border:1px solid black;padding:16px;height:400px">
      <figure class="responsive-image">
        {% image "./assets/pics/grauzonen-opening/grauzonen-opening-20.jpg", "alt", "(min-width: 840px) 720px, calc(93.08vw - 43px)" %}
      </figure>
    </div>
  </article>

  <article>
    <h3>Portrait aspect ratio with caption (cover)</h2>
    <div style="resize:both;overflow:auto;border:1px solid black;padding:16px;height:400px">
      <figure class="responsive-image" style="--responsive-image-object-fit: cover">
        {% image "./assets/pics/grauzonen-opening/grauzonen-opening-4.jpg", "alt", "(min-width: 840px) 720px, calc(93.08vw - 43px)" %}
        <figcaption>
        Phosphor-Schlamm bei Kutina. Aus „Imported Desert“ von Bojan Mrđenović. (c) Bojan Mrđenović
        </figcaption>
      </figure>
    </div>
  </article>
  
  <article>
    <h3>Portrait aspect ratio with caption (image position bottom right)</h2>
    <div style="resize:both;overflow:auto;border:1px solid black;padding:16px;height:400px">
      <figure class="responsive-image" style="--responsive-image-object-position: bottom right;">
        {% image "./assets/pics/grauzonen-opening/grauzonen-opening-4.jpg", "alt", "(min-width: 840px) 720px, calc(93.08vw - 43px)" %}
        <figcaption>
        Phosphor-Schlamm bei Kutina. Aus „Imported Desert“ von Bojan Mrđenović. (c) Bojan Mrđenović
        </figcaption>
      </figure>
    </div>
  </article>
