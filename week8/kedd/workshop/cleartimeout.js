'use strict';

timeout = setTimeout(function() {
	console.log('jeeej \\o/');
}, 1000);


//nem engedi lefuttatni a timeoutot
clearTimelout(timeout);