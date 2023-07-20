module.exports = function (eleventyConfig) {
  // Return your Object options:
  return {
    dir: {
      input: 'src',
      data: '_data',
      includes: '_includes',
      layouts: '_layouts',
      output: 'dist',
    },
    templateFormats: ['html', 'njk', 'md'],
    markdownTemplateEngine: 'njk',
    pathPrefix: '/try-11ty/',
  }
}
