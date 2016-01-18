'use strict';

function runIn5secunds(callback) {
	setTimeout(callback, 5000);
}

runIn5secunds(function() {
	console.log('jeeejjj');
});