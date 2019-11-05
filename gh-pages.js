// publish to gh-pages
const ghpages = require('gh-pages');
ghpages.publish('build', function(err) {
  console.log('Error:', err);
});