// Create web server
// 1. Start the server
// 2. Handle request and response
// 3. Return the result

// 1. Start the server
// 1.1 Import http module
var http = require('http');

// 1.2 Create server
var server = http.createServer();

// 1.3 Start server, and listen to port 3000
server.listen(3000, function() {
    console.log('Server is running on port 3000');
});

// 2. Handle request and response
// 2.1 Event: request
// This event is fired when a client send request
// to current server
server.on('request', function(request, response) {
    console.log('Server received a request');
    console.log('Method: ', request.method);
    console.log('URL: ', request.url);
    console.log('Headers: ', request.headers);

    // 2.2 Event: response
    // This event is fired when server send response
    // to client
    response.write('Hello');
    response.end();
});