def initCar(color, type, km):
	car = {'color': '', 'type': '', 'km': 0}
	car['color'] = color
	car['type'] = type
	car['km'] = km
	return car

lada = {
# properties:
	'color' : 'red',
	'type' : 'Lada 1200',
	'km' : 40000
}

tesla = {
	'color' : 'red',
	'type' : 'pink',
	'km' : 1000
}

volkswagen = initCar('red', 'volkswagen', '40000')
print(volkswagen)

audi = initCar('blue', 'Audi', '2300')
print(audi)

def ride(car, km):
	car['km'] += km

ride(tesla, 220)
print(tesla)

