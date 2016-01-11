'use strict';

function Student() {
	this.grades = {},
	this.addGrade = function(subject, grade){
		
			if (subject in this.grades) {
				this.grades[subject].push(grade);
			} else {
				this.grades[subject] = [grade];
			}
		}
	this.getCount = function() {
		var result = [];
		for (var key in this.grades) {
			result[key] = this.grades[key].length
		}
		return result
	}
	this.getAvarage = function() {
		var sum = 0;
		var counter = 0;
		for (var key in this.grades) {
			this.grades[key].forEach(function(e) {
				sum += e;
				counter ++;
			});
		return sum / counter;
		}
	}	
	this.getAvarageBySubject = function() {
		var gradesAvg = {};
		for (var key in this.grades) {
			gradesAvg[key] = (this.grades[key].reduce(function (acc, grade) {
				return acc + grade;
			}, 0) /this.grades[key].length).toFixed(2);
		}
		return gradesAvg;
	}

}


var dezso = new Student();
dezso.addGrade('matek', 5);
dezso.addGrade('matek', 2);
dezso.addGrade('matek', 3);
dezso.addGrade('rajz', 1);
dezso.addGrade('rajz', 4);

console.log(dezso.grades);
console.log(dezso.getCount());
console.log(dezso.getAvarage());
console.log(dezso.getAvarageBySubject());














// var dezso = new Student();
// // barmilyen tantargy lehet
// dezso.addGrade('matek', 4);
// dezso.addGrade('matek', 2);
// dezso.addGrade('rajz', 3);
// dezso.addGrade('rajz', 4);

// dezso.getCount() //return {rajz: 2, matek: 2}
// dezso.getAvarage() // az osszes jegyeinek az atlaga
// dezso.getAvarageBySubject() //tantargyankent mondja meg az atlagot

// var obj = {}
// obj.a = 3 // {a: 3}
// obj['b'] = 4
// obj.['c'] = [2, 3, 4, 5]
// obj.c.push(5) = [2, 3, 4, 5, 5] 