'use strict';

var myArray = [1, 2, 3, 4, 5, 6, 7];

// faszan kiirja a szamokat
function printElem(e) {
	console.log(e);
}

myArray.forEach(printElem);

// megszorozza 10el
myArray.forEach(function(e) {
	console.log(e * 10)
});

// szorzotabla az e valtozo a function scope miatt csak itt erheto el!!

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

numbers.forEach(function(e){
	console.log(e + '*' + 4 + '=' + e * 4);
});