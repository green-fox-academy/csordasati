'use strict';

var kids = [
	{name: 'Julika', age: 8, sex: 'female'},
	{name: 'Tiborka', age: 7, sex: 'male'},
	{name: 'Zsolti', age: 6, sex: 'male'},
	{name: 'Gerda', age: 9, sex: 'female'},
	{name: 'Zsomborka', age: 8, sex: 'male'}
];

function countBySex() {
	var result = {female: 0, male: 0};

	kids.forEach(function(kid) {
		result[kid.sex]++;
	});
	return result;
}

console.log(countBySex());


function countBySex2() {
	var result = {};

	kids.forEach(function(kid) {
		if(!(kid.sex in result)) {
			result[kid.sex] = 0;
		}
		result[kid.sex]++;
	});
	return result;
}

console.log(countBySex());