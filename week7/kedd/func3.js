'use strict';

var myArray = [1, 2, 3, 4, 5, 6];

function addListElemnets(list) {
	var result = list[0];
	
	for (var i = 1; i < list.length; i++) {
		result = result * list[i];
	}
	console.log(result);
}

addListElemnets(myArray);

function sumListElements(list) {
	var total = list.reduce(function(a, b) {return a + b;});
	console.log(total);
}

sumListElements(myArray);