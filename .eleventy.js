const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const fg = require("fast-glob");
const Image = require("@11ty/eleventy-img");
const path = require("path");

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

  eleventyConfig.addFilter("renderPicture", (imageName) => {
    return `<img srcset='
      /assets/pics/${imageName[0]}_180px.jpg 180w,
      /assets/pics/${imageName[0]}_360px.jpg 360w,
      /assets/pics/${imageName[0]}_720px.jpg 720w,
      /assets/pics/${imageName[0]}_1080px.jpg 1080w,
      /assets/pics/${imageName[0]}_1440px.jpg 1440w'
      sizes='(max-width:720px) 100vw, (max-width: 1260px) 70vw, calc(50vw - 100px)'
      src='/assets/pics/${imageName[0]}_720px.jpg'
      alt='${imageName[1]}' >`;
  });

  eleventyConfig.addFilter("renderTeaser", (imageName) => {
    return `<img srcset='
      /assets/pics/${imageName[0]}_180px.jpg 180w,
      /assets/pics/${imageName[0]}_360px.jpg 360w, 
      /assets/pics/${imageName[0]}_720px.jpg 720w, 
      /assets/pics/${imageName[0]}_1080px.jpg 1080w, 
      /assets/pics/${imageName[0]}_1440px.jpg 1440w' 
      sizes='(max-width: 720px) 86vw, 720px'
      src='/assets/pics/${imageName[0]}_720px.jpg'
      alt='${imageName[1]}'>`;
  });

  eleventyConfig.addPlugin(pluginRss);

  // Run search for images in /assets/pics/slideshow and convert into an array of file paths
  const slideshowImages = fg.sync(["assets/pics/slideshow/*"]);

  // Convert array of slideshow image filepaths into an 11ty collection:
  eleventyConfig.addCollection("slideshow", function (collection) {
    return slideshowImages;
  });

  eleventyConfig.addShortcode("image", async function (src, alt, sizes) {
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

    // You bet we throw an error on a missing alt (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes);
  });

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
