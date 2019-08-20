

module.exports = function(eleventyConfig) {
  return {
    templateFormats: [
      "md",
      "njk",
      "css",
      "jpg"
    ],
    dir: {
      output: "docs"
    }
  };
};
