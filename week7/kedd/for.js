'use strict';

var dogs = ['Kacsa', 'Kutya', 'Morzsi', 'Majom', 'Gyere ide!']

for (var i = 0; i < 5; i++) {
	console.log(i);
}

for (var i = 0; i < dogs.length; i++) {
	console.log(dogs[i]);
}

var student = {
	kor: 6,
	nev: 'Tibike',
	labmeret: 35
};


//objektumokon igy lehet vegig iteralni SOHA NEM HASZNALJUK TOMBBON
for (var key in student) {
	// console.log(key);
	// console.log(student[key]);
	console.log(key + ': ' + student[key]);
}

