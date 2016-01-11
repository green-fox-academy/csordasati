'use strict';

var index = 0;
var j = 0;
var myArray = [1, 'kecske', 3, 'kalap']

while (index <= 10) {
	console.log(index++);
	if (index === 4){
		break;
	}
}

while (j < myArray.length) {
	console.log(myArray[j]);
	j++;
}

