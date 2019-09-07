

module.exports = function(eleventyConfig) {
  return {
    templateFormats: [
      "md",
      "njk",
      "css",
      "jpg"
    ],
    dir: {
      output: "_site"
    }
  };
};

const pluginRss = require("@11ty/eleventy-plugin-rss");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
};
