 var io = require('socket.io-client')
var socket = io('http://localhost:8000');
 socket.on('connect', function(){
  console.log(socket.id); // 'G5p5...'
});


socket.emit('submit', {text:"some test"}, function (data) {
	console.log(data); // data will be 'woot'
	socket.close()
})


 socket.on('hello',function(data){
  console.log(data); // 'G5p5...'
});