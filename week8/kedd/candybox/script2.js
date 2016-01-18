'use strict';


var candies = 0;
var lollipops = 0;
var candyIncrease = 0;
var time = 1000;
var speed = 1;


var counter;


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
		increaseLollipop();
		decreaseCandies();
		checkLollipops();
		getSpeed();
		time = 1000 / speed;
	} else {
		return
	}
}

function checkLollipops() {
	if (lollipops >= 10) {
		interval();
	}
}

function getSpeed() {
	speed = Math.floor(lollipops / 1);
}

function increaseLollipop() {
	lollipops += 1;
	lollipopAmount.innerHTML = lollipops;
}

function decreaseCandies() {
	candies -= 10;
	candyAmount.innerHTML = candies;
}

function interval() {
	clearInterval(counter);
	counter = setInterval(addCandy, time);
}

