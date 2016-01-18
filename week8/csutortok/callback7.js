'use strict';

var fs = require('fs');


// MINDENKEPPEN returnnel kell meghivni a callbacket
//itt az volt a para, h siman ketszer hivta meg, hol ott csak egyszer
//kellett volna 

function getFirstIndexInAlmaTxt(string, cb) {
	fs.readFile('alma.txt', funciton(err, cont) {
		if (err) {
			return cb(err);
		}
		var index = 0;
		var stringConctent = String(cont);
		for (var i = 0; i < stringConctent.length; i++) {
			if (stringConctent[i] === string)
				return cb(i);
		} 
	});
}


getFirstIndexInAlmaTxt('p', function(err, index){
	console.log(err, sindex); //--> 3 mert az elso indexe a p
});
