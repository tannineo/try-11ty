module.exports = function (eleventyConfig) {
  // Return your Object options:
  return {
    dir: {
      input: 'content',
      output: 'dist',
    },
    pathPrefix: '/try-11ty/',
  }
}
