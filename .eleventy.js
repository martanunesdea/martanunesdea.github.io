const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
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
      return DateTime.fromJSDate(dateObj).toFormat('dd MMMM yyyy').toLocaleString();
    });

    eleventyConfig.addPassthroughCopy("index.css");

    return {
        templateFormats: ['njk', 'md', 'html'],
        dir: {
          input: "content",
          // ⚠️ This value is relative to your input directory.
          includes: "../_includes",
          data: "../_data",
          output: "_site",
          layouts: "../_includes/layouts"
        }
      }
};

exports.render = function(data) {
    return `<ul>
      ${data.collections.post.map(post => `<li>${post.data.title}</li>`).join("\n")}
    </ul>`;
};