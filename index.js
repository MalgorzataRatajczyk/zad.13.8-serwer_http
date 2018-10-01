var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            response.write(data);

        });
        response.end();
    } else {
        fs.readFile('./cats.jpg', 'utf-8', function(err, data) {
            response.write(err, '<img src="./cats.jpg" alt="wrong adress"');
        });
            response.end();
    }
    
});

server.listen(8080);