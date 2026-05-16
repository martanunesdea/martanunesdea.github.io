import { DateTime } from "luxon";

export default function(eleventyConfig) {
    eleventyConfig.addCollection("allMySortedContent", function(collectionApi) {
        return collectionApi.getAllSorted();
    });

    eleventyConfig.addCollection("tagList", function(collection) {
        let tagSet = new Set();
        collection.getAll().forEach(item => {
            (item.data.tags || []).forEach(tag => tagSet.add(tag));
        });
        return tagSet;
    });

    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toFormat('dd MMMM yyyy');
    });

    eleventyConfig.addPassthroughCopy("index.css");
    eleventyConfig.addPassthroughCopy({ "_includes/marta.jpeg": "marta.jpeg" });

    return {
        templateFormats: ['njk', 'md', 'html'],
        dir: {
            input: "content",
            includes: "../_includes",
            data: "../_data",
            output: "_site",
            layouts: "../_includes/layouts"
        }
    };
}
