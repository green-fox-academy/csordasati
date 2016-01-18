'use strict';


var arabicToRoman = require('./kata');
var tape = require('tape');


tape('roman converter', function(t) {
	t.equal(arabicToRoman(0), '');
	t.equal(arabicToRoman(1), 'I');
	t.equal(arabicToRoman(2), 'II');
	t.equal(arabicToRoman(3), 'III');
	t.equal(arabicToRoman(4), 'IV');
	t.equal(arabicToRoman(5), 'V');
	t.equal(arabicToRoman(6), 'VI');
	t.equal(arabicToRoman(7), 'VII');
	t.equal(arabicToRoman(8), 'VIII');
	t.equal(arabicToRoman(9), 'IX');
	t.equal(arabicToRoman(10), 'X');

	t.end();
});
