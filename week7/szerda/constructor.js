'use strict';


// konstruktor fuggveny
function Car(color, type, km) {
	this.color = color;
	this.type = type;
	this.km = km;
	this.ride = function(km){
		this.km += km;
	}
}

var golf = new Car('kopoott piros', '1es golf', 1e10);

golf.ride(400);

console.log(golf.km)

