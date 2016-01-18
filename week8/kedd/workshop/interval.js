'use strict';

var count = 0;	

var interval = setInterval(function() {
	count ++;
	console.log('jee-jee-jee', count);
}, 500);

setTimeout(function() {
	console.log('boom');
	clrearInteral(interval);
}, 5000);

setTimeout(function() {
	for (var i = 0; i < 1234123421; )
}, 2000);