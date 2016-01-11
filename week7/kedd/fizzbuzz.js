'use strict';

function fizzBuzz (number) {
	if (number % 3 === 0 && number % 5 === 0 || \5\test(toString(number))) {
		console.log('fizzbuzz');
	} else if (number % 3  === 0) {
		console.log('fizz');
	} else if (number % 5 === 0) {
		console.log('buzz');
	} else {
		console.log(number);
	}
}

function countToNinetynine () {
	for (var i = 0; i < 99; i++) {
		fizzBuzz(i);
	}
}

countToNinetynine();
