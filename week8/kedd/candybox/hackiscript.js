'use strict';

var candies = 0;
var lollipops = 0;
var candyIncrease = 0;
var counter = 1000;

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
		candyPerSec.innerHTML = candyIncrease;
		candyAmount.innerHTML = candies;
		lollipopAmount.innerHTML = lollipops;
		increaseCandies();
	} else {
		return
	}
}

function increaseCandies() {
	setInterval(function() {
		addCandy();
	}, counter);
}