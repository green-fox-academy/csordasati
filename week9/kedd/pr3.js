'use strict';

var kids = [
	{name: 'Julika', age: 8, sex: 'female'},
	{name: 'Tiborka', age: 7, sex: 'male'},
	{name: 'Zsolti', age: 6, sex: 'male'},
	{name: 'Gerda', age: 9, sex: 'female'},
	{name: 'Zsomborka', age: 8, sex: 'male'}
];


// function getTheLongestNamesAge(kids) {
// 	var currentKidWithLongestName = kids[0];
// 	for (var i = 1; i < kids.length; i++) {
// 		if (currentKidWithLongestName)
// 	}

// }

function filterNamesBySex(kids, female) {
	var result = [];
	for (var i = 0; i < kids.length; i++) {
		if (kids[i].sex === female) {
			result.push(kids[i].name)
		}
	}
	return result;
}

console.log(filterNamesBySex(kids, 'female'));

function filterNamesBySex2(kids, female) {
	var result = [];
	kids.forEach(function(kid){
		if (kid.sex === female) {
			result.push(kid.name)
		}
	});
	return result;
}

console.log(filterNamesBySex2(kids, 'female'));