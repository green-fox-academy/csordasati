'use strict';

function generateRange(min, max, step) {
	var result = [];
	for (var i = min; i <= max; i += step) {
		result.push(i);
	}
	return result;
}

console.log(generateRange(2, 10, 2));