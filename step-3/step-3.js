const https = require('https');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


function getAndPrintHTML(options) {
  let output = '';

  // Send the request
  https.get(options, function(response) {

    // Set encoding to UTF-8
    response.setEncoding('utf8');

    // When a chunk of data is received, append it to the output
    response.on('data', function(data) {
      console.log('--- Chunk received. Length: ' + data.length + '---');
      output += data;
    });
    
    // When all data has been received, log it to the console
    response.on('end', function() {
      console.log('Request complete, logging the data: ')
      console.log(output);
    });
  });
}

getAndPrintHTML(requestOptions);