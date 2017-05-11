var Server = require('socket.io');
var PORT   = 8000;
var server = require('http').Server();

var io = Server(PORT);

io.close(); // Close current server

server.listen(PORT); // PORT is free to use

io = Server(server);

io.on('connection', function(client){
   client.on("submit", function(data, fn){
   	console.log(data)
   	 setTimeout(function(){ 
        fn("dude submitted");
    }, 1000)
   })

});

// io.on('submit', function(client){
// 	console.log("dsfls")
// 	console.log(client)
// })