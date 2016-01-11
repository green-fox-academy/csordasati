'use strict';

var dogs = ['morzsi', 'tappancs', 'zsemle', 'lady', 'bundi'];
var dogss = {morzsi: 2, tappancs: 3, zsemle: 3, lady: 1, bundi: 8};

// az 'e' a tomb elemet mutatja, az 'i' pedig a helyet, az 'arr' az egesz tombot oda rakja, aminek az a jelentosege, h ha nincs betve valtozoba akkor o elmenti az 'arr'-ba

dogs.forEach(function(e, i, arr) {
	console.log(e, i, arr);
});


