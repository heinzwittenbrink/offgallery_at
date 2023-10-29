import { LitElement, css, html, svg } from "lit";

export class SlideShow extends LitElement {
  static styles = css`
    .wrapper {
      max-block-size: 100%;
      display: grid;
      grid-template-rows: 1fr auto;
      gap: 0.25rem;
    }

    nav {
      display: flex;
      align-items: center;
      max-block-size: 2rem;
      gap: 1rem;
      justify-content: center;
    }

    button {
      display: inline-flex;
      border: none;
      background-color: lightgrey;
      align-items: center;
      padding: 0;
      aspect-ratio: 1 / 1;
      block-size: 100%;
      border-radius: 50%;
      transition: opacity 0.2s ease-in-out;
    }

    button[disabled] {
      opacity: 0.6;
    }

    button svg {
      aspect-ratio: 1 / 1;
      inline-size: 100%;
    }
  `;

  static properties = {
    controls: { type: Boolean },
    showPageCount: { type: Boolean },
    visiblePage: { type: Number },
    totalPages: { type: Number },
  };

  constructor() {
    super();
    this.visiblePage = null;
    this.totalPages = null;
    this.controls = false;
    this.showPageCount = false;
  }

  #slideVisibilityState = null;
  #slides = null;

  firstUpdated() {
    this.#initVisibilityTracking();
  }

  #getSlidesWrapper() {
    const slot = this.shadowRoot.querySelector("slot");
    const nodes = slot.assignedElements();
    const slidesWrapper = nodes[0];
    return slidesWrapper;
  }

  #initVisibilityTracking() {
    const slidesWrapper = this.#getSlidesWrapper();
    this.#slides = [...slidesWrapper.children];
    this.#slideVisibilityState = new Array(this.#slides.length).fill(false);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const associatedSlideIndex = this.#slides.indexOf(entry.target);
          this.#slideVisibilityState[associatedSlideIndex] =
            entry.isIntersecting;
        });

        const totalVisiblePages = this.#slideVisibilityState.filter(
          (visible) => visible
        ).length;
        if (totalVisiblePages > 0) {
          this.totalPages = Math.ceil(this.#slides.length / totalVisiblePages);
          const visibleSlideIndex = this.#slideVisibilityState.indexOf(true);
          this.visiblePage =
            Math.floor(visibleSlideIndex / totalVisiblePages) + 1;
        }
      },
      {
        root: slidesWrapper,
        threshold: 0.6,
      }
    );
    this.#slides.forEach((slide) => observer.observe(slide));
  }

  #next() {
    const slidesWrapper = this.#getSlidesWrapper();
    const visibleSlideIndex = this.#slideVisibilityState.lastIndexOf(true);
    if (visibleSlideIndex > -1) {
      const nextVisibleSlideIndex = visibleSlideIndex + 1;
      if (nextVisibleSlideIndex < this.#slides.length) {
        const nextVisibleSlide = this.#slides[nextVisibleSlideIndex];
        slidesWrapper.scrollTo({
          left: nextVisibleSlide.offsetLeft,
          behavior: "smooth",
        });
      }
    }
  }

  #previous() {
    const slidesWrapper = this.#getSlidesWrapper();
    const visibleSlideIndex = this.#slideVisibilityState.indexOf(true);
    if (visibleSlideIndex > 0) {
      const slidesPerPage = this.#slideVisibilityState.filter(
        (visible) => visible
      ).length;
      const previousVisibleSlideIndex =
        visibleSlideIndex - Math.max(1, slidesPerPage);
      if (previousVisibleSlideIndex >= 0) {
        const previousVisibleSlide = this.#slides[previousVisibleSlideIndex];
        slidesWrapper.scrollTo({
          left: previousVisibleSlide.offsetLeft,
          behavior: "smooth",
        });
      }
    }
  }

  render() {
    const chevronRight = svg`<svg style="transform: translateX(1px)" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
    </svg>`;
    const chevronLeft = svg`<svg style="transform: rotate(180deg) translateX(1px)" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
    </svg>`;
    return html`
      <div class="wrapper">
        <slot></slot>
        <nav>
          ${this.controls
            ? html`<button
                ?disabled=${this.visiblePage === 1}
                type="button"
                aria-label="Vorheriges Bild"
                @click=${this.#previous}
              >
                ${chevronLeft}
              </button>`
            : html``}
          ${this.showPageCount &&
          this.visiblePage != null &&
          this.totalPages != null
            ? html`<span>${this.visiblePage} / ${this.totalPages}</span>`
            : html``}
          ${this.controls
            ? html`<button
                ?disabled=${this.visiblePage === this.totalPages}
                type="button"
                aria-label="Nächstes Bild"
                @click=${this.#next}
              >
                ${chevronRight}
              </button>`
            : html``}
        </nav>
      </div>
    `;
  }
}
customElements.define("slide-show", SlideShow);
