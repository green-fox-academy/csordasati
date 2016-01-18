'use strict';

var candies = 0;
var lollipops = 0;
var candyIncrease = 0;
var counter = 0;

var candyAmount = document.querySelector('.candy');
var lollipopAmount = document.querySelector('.lollipop');
var candyPerSec = document.querySelector('.candy_per_sec');
candyPerSec.innerHTML = candyIncrease;

var addCandyButton = document.querySelector('.add_candy');
var addLollipopButton = document.querySelector('.buy_lollipop');

addCandyButton.addEventListener('click', function(){
	addCandy();
});

addLollipopButton.addEventListener('click', function() {
	getLollipop();
});


function addCandy() {
	candyAmount.innerHTML = ++candies;
}

function getLollipop() {
	if (candies >= 10) {
		lollipops += 1;
		candies -= 10;
		candyIncrease += 1;
		counter += 1;
		candyAmount.innerHTML = candies;
		candyPerSec.innerHTML = candyIncrease;
		lollipopAmount.innerHTML = lollipops;
	} else {
		return
	}
}

setInterval(function() {
	console.log(counter);
		candies += counter
		candyAmount.innerHTML = candies;	
	}, 1000);