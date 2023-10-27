const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const fg = require("fast-glob");
const Image = require("@11ty/eleventy-img");
const path = require("path");

// noop template tag literal so we get html string highlighting...
const html = (strings, ...expressions) => {
  let result = strings[0];

  for (let i = 1, l = strings.length; i < l; i++) {
    result += expressions[i - 1];
    result += strings[i];
  }

  return result;
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addFilter("printDate", (dateString, formatString) => {
    return DateTime.fromISO(dateString).toFormat(formatString);
  });

  eleventyConfig.addFilter("renderPicture", async (imageName) => {
    // throw if imageName is not an array where the first two elements are strings:
    if (
      !Array.isArray(imageName) ||
      typeof imageName[0] !== "string" ||
      typeof imageName[1] !== "string"
    ) {
      throw new Error(
        `The renderPicture filter requires an array with two strings as the first two elements, was passed '${imageName}'.`
      );
    }

    const src = `./assets/pics/${imageName[0]}_1440px.jpg`;
    const alt = imageName[1];

    return renderImage(
      src,
      alt,
      `(min-width: 840px) 720px, calc(93.08vw - 43px)`,
      null,
      null,
      null
    );
  });

  eleventyConfig.addPlugin(pluginRss);

  // Run search for images in /assets/pics/slideshow and convert into an array of file paths
  const slideshowImages = fg.sync(["assets/pics/slideshow/*"]);

  // Convert array of slideshow image filepaths into an 11ty collection:
  eleventyConfig.addCollection("slideshow", function (collection) {
    return slideshowImages;
  });

  async function renderImage(
    src,
    alt,
    sizes,
    caption = null,
    objectFit = null,
    objectPosition = null
  ) {
    let metadata = await Image(src, {
      widths: [180, 256, 360, 720, 1080, 1140, 1440],
      formats: ["avif", "webp"],
      outputDir: path.join(eleventyConfig.dir.output, "/assets/pics"),
      filenameFormat: function (id, src, width, format, options) {
        const extension = path.extname(src);
        const name = path.basename(src, extension);

        return `${name}-${width}w.${id}.${format}`;
      },
      urlPath: "/assets/pics",
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };

    const cssVars = [
      ["responsive-image-object-fit", objectFit],
      [`responsive-image-object-position`, objectPosition],
    ].filter(([, value]) => Boolean(value));

    const cssVarString = cssVars
      .map(([name, value]) => `--${name}: ${value}`)
      .join("; ");

    return html`
      <figure class="responsive-image" style="${cssVarString}">
        ${Image.generateHTML(metadata, imageAttributes)}
        ${caption ? html` <figcaption>${caption}</figcaption> ` : ``}
      </figure>
    `;
  }

  eleventyConfig.addShortcode("image", renderImage);

  return {
    templateFormats: [
      "md",
      "njk",
      "css",
      "woff",
      "woff2",
      "jpg",
      "jpeg",
      "png",
      "svg",
    ],
    dir: {
      output: "_site",
    },
  };
};
