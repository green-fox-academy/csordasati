'use strict';

var fs = require('fs');

fs.readFile('alma.txt', function(err, almaCont) {
	fs.readFile('korte.txt', function(err, korteCont){
		console.log(almaCont + korteCont);
	});
});