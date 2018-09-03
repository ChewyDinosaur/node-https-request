const https = require('https');

function getAndPrintHTMLChunks() {

  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {

  });

}