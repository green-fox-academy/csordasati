'use strict';

function createRequest(
	method,
	url,
	data,
	callback
	) {
		var req = new XMLHttpRequest();
		req.open(method, url);
		probaRequest.setRequestHeader('content', 'application/json');
		req.send(data);
		
	}