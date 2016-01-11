'use strict';

function Student(name) {
	this.name = name,
	this.grades = [],
	this.addGrade = function(grade){
		return this.grades.push(grade);
	}
	this.getAvarage = function() {
	return this.grades.reduce(function(acc, grades) {
		return acc + grades;}) / this.grades.length;
	}
	this.getAvarage2 = function() {
		var sum = 0;
		this.grades.forEach(function(grade) {
			sum += grade;
		}),
		return sum / this.grades.length;
	}
}

var Jozsi = new Student(Jozsi);
Jozsi.addGrade(5);
Jozsi.addGrade(3);
Jozsi.addGrade(4);

console.log(Jozsi.grades);
console.log(Jozsi.getAvarage());