'use strict';

var counter = 0;
var body = document.querySelector('body');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var defaultPicture = document.querySelector('.default_picture');
var thumbnail = document.querySelector('.thumbnail');
var h1 = document.querySelector('.h1');
body.style.textAlign = 'center';

defaultPicture.style.boxShadow = '0 17px 7px #777';
body.style.background = '#D3D3D3';
var pictures = [
		'c:/test/node/160107/gallery2/pictures/city1.jpg',
		'c:/test/node/160107/gallery2/pictures/city2.jpg',
		'c:/test/node/160107/gallery2/pictures/city3.jpg',
		'c:/test/node/160107/gallery2/pictures/city4.jpg',
		'c:/test/node/160107/gallery2/pictures/city5.jpg',
		'c:/test/node/160107/gallery2/pictures/city6.jpg',
		'c:/test/node/160107/gallery2/pictures/city7.jpg',
		'c:/test/node/160107/gallery2/pictures/city8.jpg',
		'c:/test/node/160107/gallery2/pictures/city9.jpg',
		'c:/test/node/160107/gallery2/pictures/city10.jpg',
		];


right.addEventListener('click', function() {
	defaultPicture.setAttribute('src', rightStep());
	clearThumbnailDiv();
	createThumbnailsPic();
});

left.addEventListener('click', function() {
	defaultPicture.setAttribute('src', leftStep());
	clearThumbnailDiv();
	createThumbnailsPic();
});

function rightStep() {
	if (counter === pictures.length-1) {
		counter = 0;
	} else {
		counter ++;
	}
	return pictures[counter];
};

function leftStep() {
	if (counter === 0) {
		counter = pictures.length-1;
	} else {
		counter --;
	}
	return pictures[counter];
};

function clearThumbnailDiv() {
	thumbnail.innerHTML = ''
}

function createThumbnailsPic() {
	var image;
	var next = counter;
	var last = counter;
	
	if (counter - 1 < 0) {
		last = pictures.length - 1;
	} else {
		last = counter - 1;
	};

	if (counter + 1 > pictures.length - 1) {
		next = pictures.length + 1;
	} else {
		next = counter + 1;
	}
	
	prevTHumb(last);
	actualThumb();
	nextThumb(next);
}

function prevTHumb(last) {
	var image = document.createElement('img');
	image.setAttribute('src', pictures[Number(last)]);
	setThumbnailStyle(image);
	thumbnail.appendChild(image);
}

function actualThumb () {
	var image = document.createElement('img');
	image.setAttribute('src', pictures[counter]);
	setThumbnailStyle(image);
	thumbnail.appendChild(image);
}

function nextThumb (next) {
	var image = document.createElement('img');
	image.setAttribute('src', pictures[next]);
	setThumbnailStyle(image);
	thumbnail.appendChild(image);
}


function setThumbnailStyle(image) {
	image.style.height = '60px';
	image.style.width = '56px';
	image.style.margin = '10px'
}



function HtmlFactoryTag() {
	this.htmlObject = {}
	
	this.setNameToNode = function(name) {
		var tagName = 'tagName'; 
		this.htmlObject[tagName] = name;
	}

	this.setClassToNode = function (nameOfClass) {
		var nodeClass = 'nodeClass';
		this.htmlObject[nodeClass] = nameOfClass;
	}
	
	this.addIdToNode = function (nameOfId) {
		var nameOfId = 'nodeId';
		this.htmlObject[nodeId] = nameOfId;
	} 
	
};

function addTagToBody(object) {
	var nodeName = document.createElement(object.htmlObject.tagName);
	nodeName.className = object.htmlObject.nodeClass;
	body.appendChild(nodeName);

};






createThumbnailsPic();
var imageContainer = new HtmlFactoryTag();
imageContainer.setTagName('div');
imageContainer.setClass('test');
addTagToBody(imageContainer);
console.log(imageContainer);