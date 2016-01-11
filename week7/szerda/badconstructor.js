'use strict';

var student = {
	age: 10,
	sayYourAge: sayYourAge 
};

function sayYourAge() {
	console.log('Iam ' + this.age);	
}

student.sayYourAge();


// eltorik hiszen this-re nem tudja ertelmezni
// ha viszont 'use strict' nelkul hivjuk meg akkor lefut
sayYourAge();