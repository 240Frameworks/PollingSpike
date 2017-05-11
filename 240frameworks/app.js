// var http = require('http');

// //The url we want is `www.nodejitsu.com:1337/`
// var options = {
//   host: 'localhost',
//   path: '/hello',
//   //since we are listening on a custom port, we need to specify it by hand
//   port: '3000',
//   //This is what changes the request to a POST request
//   method: 'GET'
// };

// callback = function(response) {
//   var str = ''
//   response.on('data', function (chunk) {
//     str += chunk;
//   });

//   response.on('end', function () {
//     console.log(str);
//   });
// }

// var req = http.request(options, callback);
// //This is the data we are posting, it needs to be a string or a buffer
// // req.write("hello world!");
// // req.end();

// req.on('socket', function (socket) {
//     socket.setTimeout(100);  
//     socket.on('timeout', function() {
//         req.abort();
//     });
// });

// req.on('error', function(err) {
//     if (err.code === "ECONNRESET") {
//         console.log("Timeout occurs");
//         //specific error treatment
//     }
//     //other error treatment
// });

// req.write('something');
// req.end();



// var Server = require('socket.io');
// var PORT   = 3000;
// var server = require('http').Server();

// var io = Server(PORT);

// io.close(); // Close current server

// server.listen(PORT); // PORT is free to use

// io = Server(server);

// var chat = io.of('/chat');
// chat.emit('an event sent to all connected clients in chat namespace');

// var submit = io.of("/hello")
// submit.emit("hello world")
var a = []
a.push("success")
for (var i = 0; i < 10; i++) {
	a.push('pending')
}

var express = require('express');  
var app = express();
var server = require('http').createServer(app); 

bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get('/status', function(req, res,next) {  
	var status = JSON.stringify({"status": a.pop()})
	// console.log(status)
    res.end(status);

});

app.post('/submit', function(req, res,next) {
	// var status = JSON.stringify({"status": a.pop()})
	console.log(req.body)
    res.end('submitted');

});

server.listen(4200); 



