'use strict';

// console.log('work!');

// var cim = document.querySelector('h1');
// console.log(cim);

// var majomKep = document.querySelector('img');
// majomKep.setAttribute('src', 'http://9gag.com/gag/aA1pqV2');


// var bodyVar = document.querySelector('body');

// function newKep(src) {
// 	var newImg = document.createElement('img');
// 	newImg.setAttribute('src', src);
// 	bodyVar.appendChild(newImg);
// };


// var kepTomb = [
// 		'http://img-9gag-fun.9cache.com/photo/a77bxer_460s.jpg',
// 		'http://img-9gag-fun.9cache.com/photo/axjGbXD_460s.jpg',
// 		'http://img-9gag-fun.9cache.com/photo/aKqBK4Q_460s_v1.jpg',
// 		'http://img-9gag-fun.9cache.com/photo/ab0b8Ev_460s.jpg',
// 		'http://img-9gag-fun.9cache.com/photo/adjprdB_460s.jpg',
// 		'http://img-9gag-fun.9cache.com/photo/aW6ODmZ_460s.jpg',
// 		'http://img-9gag-fun.9cache.com/photo/aZMN4bV_460s_v1.jpg',
// 		'http://img-9gag-fun.9cache.com/photo/aBYrEeZ_460s_v2.jpg',
// 		'http://img-9gag-fun.9cache.com/photo/aVPX5P8_460s.jpg',
// 		'http://img-9gag-fun.9cache.com/photo/am98bmd_460s.jpg',
// 		];

// // kepTomb.forEach(function(src){
// // 	newKep(src);
// // });

// var gomb = document.querySelector('.gomboc');
// gomb.addEventListener('click', function() {
// 	alert('kattintottam');
// });

// window.addEventListener('scroll', function() {
// 	console.log('scrolling');
// 	console.log(window.scrollY);
// });

// var ujKepButton = document.querySelector('gomb');
// ujKepButton.addEventListener('click', newKep('http://img-9gag-fun.9cache.com/photo/aVPX5P8_460s.jpg'));



var cicaGomb = document.querySelector('.cicat');

var kutyaGomb = document.querySelector('.kutyat');

var valtosKep = document.querySelector('.cicakutyakep');

kutyaGomb.addEventListener('click', function() {
	valtosKep.setAttribute('src', 'http://img-9gag-fun.9cache.com/photo/aZMN4bV_460s_v1.jpg');
});

cicaGomb.addEventListener('click', function() {
	valtosKep.setAttribute('src', 'http://img-9gag-fun.9cache.com/photo/axjGbXD_460s.jpg');
});