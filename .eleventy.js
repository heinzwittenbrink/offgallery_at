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

  eleventyConfig.addFilter('printDate', (dateString, formatString) => {
    return DateTime.fromISO(dateString).toFormat(formatString);
  });


  eleventyConfig.addFilter('renderPicture', (imageName) => {return "<img sizes='(max-width:720px) 100vw, (max-width: 1260px) 70vw, calc(50vw - 100px)' srcset='/assets/pics/"+ imageName[0] + "_180px.jpg 180w, /assets/pics/" + imageName[0] + "_360px.jpg 360w, /assets/pics/" + imageName[0] + "_720px.jpg 720w, /assets/pics/" + imageName[0] + "_1080px.jpg 1080w, /assets/pics/" + imageName[0] + "_1440px.jpg 1440w ' src='/assets/pics/"+ imageName[0] + "_720px.jpg' alt='" + imageName[1] + "'>" }

);

  eleventyConfig.addFilter('renderTeaser', (imageName) => {return "<img  srcset='/assets/pics/"+ imageName[0] + "_180px.jpg 180w, /assets/pics/" + imageName[0] + "_360px.jpg 360w, /assets/pics/" + imageName[0] + "_720px.jpg 720w' sizes='(max-width: 360px) 180px,  360px' src='/assets/pics/"+ imageName[0] + "_720px.jpg' alt='" + imageName[1] + "'>" }

);



  eleventyConfig.addPlugin(pluginRss);


  return {
    templateFormats: [
      "md",
      "njk",
      "css",
      "jpg",
      "svg"
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
