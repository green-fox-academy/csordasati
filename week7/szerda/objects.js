'use strict';

var humwee = {
	type: 'Rendes humwee',
	color: 'Terep',
	km: '20000',
	ride: ride
};

function ride(km) {
	this.km += km;
}

humwee.ride(200);

console.log(humwee.km);


var skoda = {
	type: 'Rendes humwee',
	color: 'Terep',
	km: '20000',
	ride: function (km) {
		this.km += km;
	}
};

skoda.ride(200);
