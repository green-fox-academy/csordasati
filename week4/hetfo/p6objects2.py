class Car:
	def __init__(self, color, car_type, km):
		if type(color) != str:
			raise Exception("color is a string!")
		self.color = color
		self.car_type = type
		self.km = km

	def ride(self, km):
		self.km += km

	def get_miles(self):
		return self.km * 0.6213

	def get_status(self):

tesla = Car('pink', 'tesla S', 1200)

tesla.ride(220)

print(tesla.km)