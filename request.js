var request = require('request');
var fs = require('fs');

var query = 'https://sytantris.github.io/http-examples/future.jpg'

request.get(query)
  .on('error', function (err) {
    throw err;
  })
  .on('response', function (response) {
    console.log('Response status message: ', response.statusMessage);
    console.log('Response status code: ', response.statusCode);
    console.log('Content type: ', response.headers['content-type']);
    console.log('Downloading image...');
  })
  .pipe(fs.createWriteStream('./future.jpg'))
  .on('finish', function () {
    console.log('Download complete.');
  })