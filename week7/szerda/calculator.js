function multiplicationTable() {
	var output = '';
	for (var j = 1; j <= 10; j++) {
		console.log('----------------')
		for (var i = 1; i <= 10; i++) {
			output += j + ' * ' + i + ' = ' + j * i + '\n';
		}
	}
	return output;
}
console.log(multiplicationTable());

// function recMultiplication(number, i) {
// 	if (i < 10) {
// 		return '';
// 	}
// 	return i + '*' + number + '=' + number * i + '\n' + recMultiplication(number, i - 1);
// }

// console.log(recMultiplication(4, 1));

// sima for
var szorzotTabla1 = '';
for (var i = 1; i <= 10; i++) {
	szorzotTabla1 += i + 'x' + 4 + '=' + i * 4 + '\n';
}
console.log(szorzotTabla1);


// foreach
var szorzotTabla2 = '';
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(function(e) {
	szorzotTabla2 += e + 'x' + 4 + '=' + e * 4 + '\n';
});
console.log(szorzotTabla2);


// map
var szorzotTabla3 = '';
var szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sorok = szamok.map(function(e) {
	return e + '*' + 4 + '=' + e * 4;
});
szorzotTabla3 = sorok.join('\n');
console.log(szorzotTabla3);

// reduce

