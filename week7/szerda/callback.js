function placeAnOrder (ordernumber) {

	console.log('customer order', ordernumber);

	cookAndDeliverFood(function() {
		console.log('Deliver food order:', ordernumber);
	});
}

function cookAndDeliverFood() {
	setTimeout(callback, 5000);
}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);