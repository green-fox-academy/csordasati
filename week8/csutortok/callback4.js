'use strict';

var fs = require('fs');


// a cb mar reg lefut amikor es visszaad egy ures sttringet
//es csak utana fogja beolvasni a fajlt

function readAlmatxt(callback) {
	var output = '';
	fs.readFile('alma.txt', function(err, content) {
		output = String(output);
	});
	callback(output)
}

function readAlmatxt(callback) {
	fs.readFile('alma.txt', function(err, content) {
		var output = String(output);
		callback(output);
	});
}


readAlmatxt(function() {
	console.log(content)
});
