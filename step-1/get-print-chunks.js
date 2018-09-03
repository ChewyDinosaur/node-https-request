const https = require('https');

function getAndPrintHTMLChunks() {

  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  // Send the request
  https.get(requestOptions, function(response) {

    // Set encoding to UTF-8
    response.setEncoding('utf8');

    // WHen a chunk of data is received
    response.on('data', function(data) {
      console.log('--- Chunk received. Length: ' + data.length + '---');
      console.log(data + '\n');
    });
  });

}

getAndPrintHTMLChunks();