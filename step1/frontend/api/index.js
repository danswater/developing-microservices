'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
var webStream = require( './webStream' )( http );

app.use('/', express.static(__dirname + '/../public'));

var pumpData = function () {
	var i      = 0;
	var offset = 200;

	setInterval( function () {
		var inc     = i++;
		var randInt = Math.floor( Math.random() * 100 );
		var temp    = Math.round( ( Math.sin( inc / 40 ) + 4 ) * ( randInt + offset ) );

		webStream.emit( [
			{
				sensorId    : '1',
				time        : ( new Date() ).getTime(),
				temperature : temp
			}
		] );
	}, 1000);
};

http.listen(3000, function(){
  console.log('listening on *:3000');
  pumpData();
});

