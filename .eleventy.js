const { DateTime } = require("luxon");  

module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/app.js");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/admin");
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    eleventyConfig.addShortcode("mobile", () => `9952537`);


    eleventyConfig.addFilter("postDate", (dateObj) => {

        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);

    })


    return{
        dir: {
            input: "src", 
            output: "public"
        },
        
    };

    

}

