'use strict';

var b = {matek: 3, irodalom: 2};

function a() {
	for (var key in b) {
		console.log(key + ' : ' + b[key]);
	}
}

a();