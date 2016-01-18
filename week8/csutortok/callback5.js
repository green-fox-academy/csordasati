'use strict';

var fs = require('fs');

function countLetterP(callack) {
	fs.readFile('alma.txt', function(err, cont) {
		var count = 0;
		var stringContent = String(cont)
		for (var i = 0; i < stringContent.length; i++) {
			if (stringContent[i] === 'p') {
				count ++;			
			}
		}
		callack(count);
	});
}


// alma.txt
countLetterP(function(count) {
	console.log(count); // --> 2
});