export default async function (eleventyConfig) {
    //configure eleventy
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.setIncludesDirectory("./templates");
    eleventyConfig.setTemplateFormats("html,njk");
  
  }
 
 
 