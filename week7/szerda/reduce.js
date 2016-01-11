'use strict';


// tombbol szeretnenk egy szamot csinalni, erre jo reduce
// reduce('acc', 'e', 'i', 'arr')
// a nulla az akkumulator kezdeti erteke

// var sum = numbers.reduce(function(accumulator, num) {
// 	return accumulator + num;
// }, 0)

var numbers = [5, 6, 3, 9];

function reduceSum(acc, num) {
	return acc + num
}

var sum.numbers.reduce(reduceSum, 0);

console.log(sum);