'use strict';

function textMultiply(word, number) {
	var multiplyWord = ''
	for (var i = 0; i < number; i++) {
		multiplyWord += word;
	}
	console.log(multiplyWord);
}

textMultiply('Ati', 3);


//rekurzivan + objektum orientaltan
function recursiontextMultiply(word, number) {
	if (number === 0) {
		return '';
	} else {
		return word + textMultiply(word, number - 1);
	}
}

// rekurzivan + funkcionalisan
function recursion2(word, number) {
	return number > 0 ? word + textMultiply(word, number - 1) : '';
}

console.log(recursiontextMultiply('ati', 4))
console.log(recursion2('bela', 4))
