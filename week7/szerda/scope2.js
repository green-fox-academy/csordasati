'use strict';

var global = 7;
var c = 8;

function printLocal() {
	var a = 123;
	var c = 9;

	console.log(a);
	console.log(global)
	console.log('local c:', c);

}


printLocal();
console.log(global);


// error mert nem latja
// console.log(a);