'use strict';

var fs = require('fs');

function countLetterInAlmaTxt(string, callack) {
	fs.readFile('alma.txt', function(err, cont) {
		var count = 0;
		var stringContent = String(cont)
		for (var i = 0; i < stringContent.length; i++) {
			if (stringContent[i] === string) {
				count++;			
			}
		}
		callack(count);
	});
}


countLetterInAlmaTxt('a', function(count) {
	console.log(count);
});