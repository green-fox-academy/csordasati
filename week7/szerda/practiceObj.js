'use strict';

var kids = [
	{name: 'Tibbor', candies: '2'},
	{name: 'Jozsi', candies: '3'},
	{name: 'Agoston', candies: '0'},
	{name: 'Steve', candies: '7'},
	{name: 'Julika', candies: '4'}
];


// sajat
function getRichiestKidsName(kids) {
	var richiestKid = '';
	var maxCandie = kids[0].candies;
	for (var i = 1; i < kids.length; i++) {
		if (maxCandie < kids[i].candies) {
			maxCandie = kids[i].candies;
			richiestKid = kids[i].name;
		} 
	}
	return richiestKid;
}
console.log(getRichiestKidsName(kids));


// tojas
function getRichiestKid(kids) {
	var richiestKid = kids[0];
	for (var i = 1; i < kids.length; i++) {
		var currentKid = kids[i];
		if(currentKid.candies > richiestKid.candies)
			richiestKid = currentKid;
	}
	return richiestKid.name;
}
console.log(getRichiestKid(kids));

//forEach behelyettesiti a tomb elemeit
function forGetRichiestKidsName(kids) {
	kids.forEach(function(currentKid) {
		if(currentKid.candies > richiestKid.candies)
			richiestKid = currentKid;
	})
}
console.log(forGetRichiestKid(kids));


// reduce
function 