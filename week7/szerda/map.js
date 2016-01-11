'use strict';

var benaSzavak = ['kuty', 'macsk', 'alm', 'kacs'];
var faszaSzavak = [];
var faszaSzavak2 = [];
var faszaSzavak3 = [];

// for ciklus
for (var i = 0; i < benaSzavak.length; i++) {
	faszaSzavak.push(benaSzavak[i] + 'a');
}

console.log(faszaSzavak);

// foreach
benaSzavak.forEach(function(szo){
	faszaSzavak2.push(szo + 'a');
});

console.log(faszaSzavak2);

// map egy uj tombbel tud visszaterni, itt is mukodik az 'e' 'i' 'arr', ez kicsit absztraktabb megoldas mint az elozoek
var faszaSzavak3 = benaSzavak.map(function(szo) {
	return szo + 'a';
});

console.log(faszaSzavak3);

