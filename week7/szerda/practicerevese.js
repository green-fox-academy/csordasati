'use strict';

// how reverse a string
function reverseString(string) {
	var reversedString = ''
	for (var i = string.length - 1; i >= 0; i--) {
		reversedString += string[i]
	}
	return reversedString;
}

console.log(reverseString('asdad'));

// leggazdasagosabb
function reversed(s) {
  s = s.split('');
  var len = s.length,
      halfIndex = Math.floor(len / 2) - 1,
      tmp;
  for (var i = 0; i <= halfIndex; i++) {
  	console.log(s[i]);
    tmp = s[len - i - 1];
    s[len - i - 1] = s[i];
    s[i] = tmp;
  }
  return s.join('');
}

console.log(reversed('gezakekazeg'))

// rekurzivan
function reverse2(input) {
	return reverseRecursive(input, input.length-1);
}
​
function reverseRecursive(input, i) {
	if (i < 0) {
		return '';
	} else {
		return input[i] + reverseRecursive(input, i - 1);
	}
}
​
console.log(reverse2('kacsa'));
