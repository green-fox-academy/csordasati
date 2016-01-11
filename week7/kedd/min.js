'use strict';

var numbersArray = [7, 8, -1, 4, 3, 12];
var actualMin = Infinity;
var actualMin = numbers[0];

for (var i = 0; i < numbersArray.length; i++) {
	if (numbersArray[i] < actualMin) {
		actualMin = numbersArray[i];
		actualMin = numbersArray[i] < actualMin ? numbersArray[i] : actualMin;
	}
}

console.log(actualMin);