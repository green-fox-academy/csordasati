'use strict';

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function(base) {
	numbers.forEach(function(e) {
		console.log(e + '*' + base + '=' + e * base);
	});
});