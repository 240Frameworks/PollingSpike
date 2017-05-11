// var http = require('http');
var request = require('request')

var callback = function (error, response, body) {
  	output = JSON.parse(body);
  if(output['status']=='success'){
  	process.exit(0)
  }
 
  if(output['status']!='success' && Object.keys(output).length>0){
  	setInterval(function(){request('http://localhost:4200/status', callback)}, 1000)

  }
  
}

request({
	method: 'POST',
	uri: 'http://localhost:4200/submit',
	multipart: [{
        'content-type': 'application/json',
        'body': JSON.stringify({foo: 'bar'})
      }]
}, function(error, response, body){
		console.log("polling status")
		request('http://localhost:4200/status', callback)
})


