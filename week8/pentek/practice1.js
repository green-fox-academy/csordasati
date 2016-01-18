var pirates = [
	{pirate: 'Olaf', id: 4},
	{pirate: 'Olafffy', id: 1},
	{pirate: 'Olafmal', id: 2}
	];


var stashes = [
	{id: 1, gold: 1},
	{id: 2, gold: 2},
	{id: 4, gold: 3}
	];

	
	function getThatPiratesGold(name) {
		var piratesId = 0;
				for (var i = 0; i < pirates.length; i ++) {
			if (pirates[i].pirate === name) {
				piratesId = pirates[i].id
			}
		}
	console.log(findGoldwithId(piratesId));
	}

//conosle.log(pirates[]);

getThatPiratesGold('Olaf'); //3 arany


function findGoldwithId(id) {
		var gold = 0;
		for (var i = 0; i < stashes.length; i ++) {
		if (piratesId === stashes[i].id) {
			gold = stashes[i].gold;
		}
	}
	return gold;
}