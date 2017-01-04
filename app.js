var express = require("express");
var app = express();

app.get('/', function(req, res){

	var Twilio = require('twilio-js');

	Twilio.TwiML.build(function(response) {

		response.say('You are being enqueued');
		//response.enqueue('radio-callin-queue');


		//res.writeHead(200, {'Content-Type': 'text/xml'});
		//res.write('<?xml version="1.0" encoding="UTF-8"?>');
		//res.write(response.emit());
		res.end();

	});

});


app.listen(process.env.PORT || 3000);