'use strict';

var url = 'https://yoda.p.mashape.com/yoda';
var ACCESS_TOKEN = 'JNDzfN0Pz8mshV6DHISeFTRHJy00p1LvLoKjsnSUpz0krIeYGX';
var responseContainer = document.querySelector('.yoda-response');



function onDone(response) {
	responseContainer.innerText = response;
}


//a callback azert kell h ujra felhasznalhato maradjon. igy ha visszatert az ertek akkor barmilyen fuggvenyt meg tudunk hivni
function createRequest(url, callback) {
	var probaRequest = new XMLHttpRequest();
	probaRequest.open('GET', url);
	probaRequest.setRequestHeader('X-Mashape-Key', ACCESS_TOKEN);
	probaRequest.send();
	probaRequest.onreadystatechange = function() {
		console.log('allapot', probaRequest.readyState);
	if (probaRequest.readyState === 4) {
			callback(probaRequest.response);
		}
	}
}



var yodaInput = document.querySelector('.yoda-input');
var yodaButton = document.querySelector('.yoda-button');

var mondat = yodaInput.value;
var urlWithParams = url + '?sentence=' + encodeURIComponent(mondat);

yodaButton.addEventListener('click', function() {
	responseContainer.innerText = 'Loading...'
	createRequest(url, onDone);
});