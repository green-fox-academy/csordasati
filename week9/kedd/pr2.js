'use strict';


function Objektum() {
	var _this = this;

	this.tomb = [1, 2, 3, 4];
	this.uresTomb = [];
	this.kereses = function() {
		this.tomb.forEach( function(elem){
			_this.uresTomb.push(elem)
		}) 
	}
}

var Objektum2 = {
	tomb : [1, 2, 3, 4];
}



var mittomen = new Objektum();
mittomen.kereses()
console.log(mittomen.uresTomb);


