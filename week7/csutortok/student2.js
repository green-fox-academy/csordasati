'use strict';

//object
function Student() {
	this.grades = {};

	this.addGrade = function(subject, grade) {
		if( !(subject in this.grades)) {
			this.grades[subject] = [];
		} 
		this.grades[subject].push(grade);
	};

	this.getCount = function() {
		var output = {};
		for (var subject in this.grades) {
			output[subject] = this.grades[subject].length;
		}	
		return output;
	};

	this.getAverage = function() {
		var sum = 0;
		counter = 0;
		for (var subject in this.grades) {
			this.grades[].forEach(function(grade) {
				sum += grade;
				count ++;
			});
		}
		return sum / count;
	};
}


//array
function Student2() {
	this.grades = [];

	this.addGrade = function(subject, grade) {
		this.grades.push({subject: subject, grade: grade})
	};

	this.getCount = function() {
		var outpu = {};
		this.grades.forEach(function(grade) {
			if (!(grade.subject in output)) {
				output[grade.subject] = 0;
			}
			output[grade.subject]++;
		});
	};

	this.getAverage = function() {
		var sum = 0;
		this.grades.forEach(function (grade) {
			sum += grade.num;
		});
		return sum / this.grades.length;
	};


	// this.getCount2 = function() {
	// 	return this.grades.reduce(function (output, grade) {
	// 		if (!(grade.subject in output)) {
	// 			output[grade.subject] = 0;
	// 		}
	// 		output[grade.subject]++;
	// 		return output;
 // 		});
	// }
}
