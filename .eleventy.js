

module.exports = function(eleventyConfig) {
  return {
    templateFormats: [
      "md",
      "njk",
      "css"
    ],
    dir: {
      output: "docs"
    }
  };
};
