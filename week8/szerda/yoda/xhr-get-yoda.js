'use strict';

var probaRequest = new XMLHttpRequest();
console.log('probaRequest: ', probaRequest);


//	accsess token ez konstans ami nem fog valtozni emiatt nagy betus
var ACCESS_TOKEN = 'JNDzfN0Pz8mshV6DHISeFTRHJy00p1LvLoKjsnSUpz0krIeYGX';
var url = 'https://yoda.p.mashape.com/yoda';

var mondat = 'I should learn';
//az encode atirija a stringet h el lehessen kuldeni
var urlWithParams = url + '?sentence=' + encodeURIComponent(mondat); 

console.log('encodolt mondat: ' + encodeURIComponent(mondat));

probaRequest.open('GET', urlWithParams);
//1, argumentum barmi lehet tulajdonkeppen, 2 access token
probaRequest.setRequestHeader('X-Mashape-Key', ACCESS_TOKEN);

probaRequest.send();


probaRequest.onreadystatechange = function() {
	console.log('valasz: ' + probaRequest.readyState);
	if (probaRequest.readyState === 4) {
		//alapbol nem ir ki semmit mert nem jon meg vissza a szoveg
	console.log('valasz: ' + probaRequest.response);	
	}
}