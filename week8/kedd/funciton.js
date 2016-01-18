'use strict';

var button = document.querySelector('button');


// ehelyett
button.addEventListener('click', function() {
	shout();
});

//igy kell meghivni
button.addEventListener('click', shout);



function shout() {
	console.log('AJAJAJAJJ');
	console.log('AJAJAJAJJ');
	console.log('AJAJAJAJJ');
	console.log('AJAJAJAJJ');
}

