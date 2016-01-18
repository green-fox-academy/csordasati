// 'use strict';


// //practice 1 
// var a = 3;

// function biggerBy(number, number2) {
// 	var result = number + number2;
// 	return result;
// }

// console.log(biggerBy(a, 10));

// //practice2
// var b = 100;

// function smallerBy(number, number2) {
// 	var result = number - number2;
// 	return result;
// }

// console.log(smallerBy(b, 7));

// //practice3

// var c = 44;

// function doubleNumber(number) {
// 	var result = number * 2;
// 	return result;
// }

// console.log(doubleNumber(c));

// //practice4

// var d = 125;

// function divideNumber(number) {
// 	var result = number / 5;
// 	return result;
// }

// console.log(divideNumber(d));


// //practice5
// var e = 145673456;

// function divisorNumber(number) {
// 	if (number % 7 === 0) {
// 		return true;
// 	} else {
// 		return false
// 	}
// }

// console.log(divisorNumber(e));

// //practice6
// var f1 = 123;
// var f2 = 345;

// function biggerThan(f1, f2) {
// 	if (f1 > f2) {
// 		return true;
// 	} else {
// 		return false
// 	}
// }

// console.log(biggerThan(f1, f2));

// //practice7
// var g1 = 350;
// var g2 = 200;

// function biggerThan(g1, g2) {
// 	if (g1 < g2 * 2) {
// 		return true;
// 	} else {
// 		return false
// 	}
// }

// console.log(biggerThan(g1, g2));

// //practice8
// var h = 1357988018575474;

// function divisorNumberEleven(number) {
// 	if (number % 11 === 0) {
// 		return true;
// 	} else {
// 		return false
// 	}
// }

// console.log(divisorNumberEleven(h));

// //practice9
// var i = [2134, 3, 432, 543, 134, 5435];

// function giveTheFirstAndLastElement(array) {
// 	var first = array[0];
// 	var last = array[array.length-1];
// 	return [first, last];
// }

// console.log(giveTheFirstAndLastElement(i));

// //practice10
// var j = [54, 23, 66, 12]

// function giveTheSecundAndThirdElementsResult(array) {
// 	var secund = array[1];
// 	var third = array[2];
// 	return secund + third;
// }

// console.log(giveTheSecundAndThirdElementsResult(j));

// //practice11
// var k = [1, 2, 3, 4, 5]

// function incrementTheThirdElemnt(array) {
// 	var result = array[2];
// 	return result + 2;
// }

// console.log(incrementTheThirdElemnt(k));

// //practice12
// var k = 'pzthon';

// function changeLetter(string) {
// 	var str = string;
// 	var result = str.replace('z', 'y');
// 	return result;
// }

// console.log(changeLetter(k));

// //practice13
// var m1 = 124;
// var m2 = 456;

// function isEvenNumbers(a, b) {
// 	if (a % 2 === 0 && b % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// console.log(isEvenNumbers(m1, m2));

// //practice14
// var n1 = 124;
// var n2 = 456;

// function isNumbersBiggerThan100(a, b) {
// 	if (a <= 100 && b <= 100) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// console.log(isNumbersBiggerThan100(n1, n2));

// //practice15
// var o = 123;

// function isNumberBiggerThan100(a) {
// 	if (a >= 100) {
// 		return 'Hoooray!';
// 	} else {
// 		return a + ' is not bigger than 100';
// 	}
// }

// console.log(isNumberBiggerThan100(o));

// //practice16
// var p = 426;

// function isNumberDividableBy4(a) {
// 	if (a % 4 === 0) {
// 		return 'Yeah!!, End od program';
// 	} else {
// 		return 'End od program';
// 	}
// }

// console.log(isNumberDividableBy4(p));


// //practice17
// var q = 24;
// var out = 0

// function isQEven(a) {
// 	if (a % 2 === 0) {
// 		return out + 1;
// 	} else {
// 		return 'End od program';
// 	}
// }

// console.log(isQEven(q));

// //practice18
// var r = 'monkey';

// function isMonkeyLongerThanFour(a) {
// 	if (a.length > 4) {
// 		return 'long';
// 	} else {
// 		return 'short';
// 	}
// }

// console.log(isMonkeyLongerThanFour(r));

// //practice19
// var s = 'cheese';

// function isWordsLengthEven(a) {
// 	if (a.length % 2 === 0) {
// 		return 'even';
// 	} else {
// 		return false;
// 	}
// }

// console.log(isWordsLengthEven(s));

// //practice20
// var t = 'seasons';
// var out20 = 6;

// function isWordsFirstAndLastLetterSame(a) {
// 	if (a[0] === a[a.length-1]) {
// 		return out20 * 2;
// 	} else {
// 		out20 / 2;
// 	}
// }

// console.log(isWordsFirstAndLastLetterSame(t));


// //practice21
// var t = 'seasons';
// var out20 = 6;

// function isWordsFirstAndLastLetterSame(a) {
// 	if (a[0] === a[a.length-1]) {
// 		return out20 * 2;
// 	} else {
// 		out20 / 2;
// 	}
// }

// console.log(isWordsFirstAndLastLetterSame(t));

// //practice22
// var u = 13;


// function isUBiggerThan(vmi) {
// 	if (vmi >= 10 && vmi <= 20) {
// 		return 'Sweet!';
// 	} else if (vmi <= 10) {
// 		return 'More!';
// 	} else {
// 		return 'Less!';
// 	}
// }


// console.log(isUBiggerThan(u));

// //practice23
// var w = 123;
// var credits = 100;
// var isBonus = false;


// function practice23(credit, bonus) {
// 	if (credit >= 50 && bonus === false) {
// 		return w - 2;
// 	} else if (a <= 50 && bonus === false) {
// 		return w - 1;
// 	} else  if (bonus === true) {
// 		return w;
// 	}
// }

// console.log(practice23(credits, isBonus));

// //practice25
// var y = 6;

// function practice25(number) {
// 	for (var i = 0; i <= y; i++) {
// 		console.log(i);
// 	}
// }
// practice25(y);

// //console.log(practice23(credits, isBonus));


// //practice26
// var z = 4;
// var text = 'gold'

// function practice26(number, text) {
// 	for (var i = 1; i <= z; i++) {
// 		console.log(text);
// 	}
// }
// practice26(y, text);


// //practice27
// var aa = [4, 5, 6, 7];

// function practice27(array) {
// 	for (var i = 0; i <= array.length-1; i++) {
// 		console.log(array[i]);
// 	}
// }
// practice27(aa);

//practice28
// var ab = [4, 5, 6, 7];

// function practice28(array) {
// 	var result = [];
// 	for (var i = 0; i <= array.length-1; i++) {
// 		result[i] = array[i] * 2;
// 	}
// 	return result;
// }

// console.log(practice28(ab));

//practice29
// var ac = ['kuty', 'macsk', 'cic', 'pin'];

// function practice28(array) {
// 	var result = [];
// 	for (var i = 0; i <= array.length-1; i++) {
// 		result[i] = array[i] + 'a';
// 	}
// 	return result;
// }

// console.log(practice28(ac));

//practice30
// var ad = [3, 4, 5, 6, 7];

// function practice30(array) {
// 	var result = 0;
// 	for (var i = 0; i <= array.length-1; i++) {
// 		result += array[i];
// 	}
// 	return result;
// }

// console.log(practice30(ad));


//practice31
// var ae = 'Jozsi';

// function practice31(name) {
// 	return 'Hello ' + name;
// }

// console.log(practice31(ae));


//practice32
// var ae = 'Jozsi';

// function practice31(name) {
// 	return 'Hello ' + name;
// }

// console.log(practice31(ae));


// practice35
// function factorial(number) {
// 	if (number === 1) {
// 		return 1;
// 	} else {
// 		return factorial(number - 1) * number
// 	}
// }

// console.log(factorial(5));


//practice36
// var numbers = [3, 4, 5, 6, 7];

// function reverseAnArray(anArray) {
// 	var result = [];
// 	var j = 0;

// 	for (var i = anArray.length-1; i >= 0; i--) {
// 		result[j] = anArray[i];
// 		j++;
// 	}
// 	return result;
// }	

// console.log(reverseAnArray(numbers));


//practice37
// var numbers = [3, 4, 5, 6, 7];

// function anArrayFilterOddOrEven(anArray) {
// 	var result = [];

// 	for (var i = 0; i <= anArray.length-1; i++) {
// 		if (anArray[i] % 2 === 0) {
// 			result.push(anArray[i]);
// 		}
// 	}
// 	return result;
// }	

// console.log(anArrayFilterOddOrEven(numbers));


//practice38
// var numbers = [7, 5, 8, -1, 2]

// function selectTheMinimalElement(anArray) {
// 	var result = anArray[0];

// 	for (var i = 0; i <= anArray.length-1; i++) {
// 		if (result > anArray[i]) {
// 			result = anArray[i];
// 		}
// 	}
// 	return result;
// }	

// console.log(selectTheMinimalElement(numbers));



//practice39
// var names = ['Zakarias', 'Hans', 'Otto', 'Ole'];

// function selectTheShorterName(anArray) {
// 	var result = anArray[0];

// 	for (var i = 0; i <= anArray.length-1; i++) {
// 		if (result.length > anArray[i].length) {
// 			result = anArray[i];
// 		}
// 	}
// 	return result;
// }	

// console.log(selectTheShorterName(names));


//practice40 object in array
// var students = [
//         {name: 'Rezso', age: 9.5, candies: 2},
//         {name: 'Gerzson', age: 10, candies: 1},
//         {name: 'Aurel', age: 7, candies: 3},
//         {name: 'Zsombor', age: 12, candies: 5}
// 	];


// function objectInArray(array) {
// 	var result = [];
// 	for (var i = 0; i <= array.length-1; i++) {
// 		if (array[i].age <= 10) {
// 			result.push(array[i]);
// 		}
// 	}
// 	return result
// }

// console.log(objectInArray(students));


// //practice41

// students2 = [
//         {'name': 'Rezso', 'age': 9.5, 'candies': 2},
//         {'name': 'Gerzson', 'age': 10, 'candies': 1},
//         {'name': 'Aurel', 'age': 7, 'candies': 3},
//         {'name': 'Zsombor', 'age': 12, 'candies': 5},
//         {'name': 'Olaf', 'age': 12, 'candies': 7},
//         {'name': 'Teodor', 'age': 3, 'candies': 2}
// ]

// function objectInArray2(array) {
// 	var result = 0;
// 	for (var i = 0; i <= array.length-1; i++) {
// 		if (array[i].candies > 4) {
// 			//result++;
// 			console.log(array[i]);
// 		}
// 	}
// 	return result
// }

// console.log(objectInArray2(students2));


// //practice46

// function Pirate() {
// 	var me = this;
	
// 	this.counter = 0;

// 	this.drinkRum = function() {
// 		this.counter += 1;
// 	}

// 	this.howsGoinMate = function () {
// 		if (this.counter >= 5) {
// 			console.log('Arrr!');
// 		} else {
// 			console.log('Nothin!!');
// 		}
// 	}

// }

// var jack = new Pirate();
// jack.drinkRum();
// jack.drinkRum();
// jack.drinkRum();
// jack.drinkRum();
// jack.drinkRum();
// jack.howsGoinMate();

function Student() {
	var me = this;

	this.grades = [];

	this.addGrade = function(number) {
		if (number >= 1 || number < 6) {
			this.grades.push(number);

		} else {
			console.log('wrong grade!!');
		}
	}

	this.getAverage = function() {
		array = this.grades;
		result = 0;
		for (var i = 0; i < array.length; i++) {
			result += array[i];
		}
		return result / array.length;		
	}
}

var gyuri = new Student();

gyuri.addGrade(2);
gyuri.addGrade(2);
gyuri.addGrade(5);

console.log(gyuri.getAverage());
console.log(array);