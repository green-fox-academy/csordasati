'use strict';

var human = {
	word: 'kacsa',
	speak: speak
};

var peaople = {
	word: ['kacsa', 'macska', 'Mammlasz'],
	speak: tell
};


//ebben a this nem a fuggvenyen beluli this lesz
function tell() {
	var _this = this;
	this.word.forEach(function(w) {
		console.log('I am ' + _this.name);
		console.log('blaablaa' + w);
	});
}


function speak() {
	console.log('blaablaa', this.word);
}

//blaalblaa
human.speak();


//nagy error mert undefined
speak();