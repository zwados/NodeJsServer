var http = require('http');
var fs = require('fs');
var error = fs.readFileSync('./error.jpg');

var server = http.createServer();

server.on('request', function (request, response) {
    if (request.method === 'GET' && request.url === '/hello') {
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            if(err) {
            console.log(err)
            response.end();
            } else {          
            response.write(data);
            response.end();
            }
        })
       
    } else {
            response.setHeader("Content-Type", "image/jpeg");
            fs.readFile('./error.jpg', function(err, data) {
            response.statusCode = 404;
            response.write(error);
            response.end();
            });
    };
});

server.listen(8080);