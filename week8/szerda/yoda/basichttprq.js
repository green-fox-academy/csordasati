'use strict';



function onDone(response) {
	var responseContainer = document.querySelector('.yoda-response');
	responseContainer.innerText = response;
}

function createRequest(url) {
	var probaRequest = new XMLHttpRequest();
	probaRequest.open('GET', url);
	probaRequest.setRequestHeader('X-Mashep-Key', ACCESS_TOKEN);
	probaRequest.send();
	probaRequest.onreadystatechange = function() {
		console.log('allapot', probaRequest.readyState);
	if (probaRequest.readyState === 4) {
			callback(probaRequest.response);
		}
	}
}