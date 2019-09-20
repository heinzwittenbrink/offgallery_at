const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");


module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("readableDate", dateObj => {
     return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
   });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addPlugin(pluginRss);


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

  /* Forestry instant previews */
if( process.env.ELEVENTY_ENV == "staging" ) {
  config.setBrowserSyncConfig({
    host: "0.0.0.0"
  });
}



};
