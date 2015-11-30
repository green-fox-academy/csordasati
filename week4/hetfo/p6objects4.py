class Character():
	def __init__(self, name, health_point, damage):
		self.name = name
		self.health_point = health_point
		self.mydamage = damage

	def get_health(self, health_point):
		if self.health_point + health_point >= 100:
			print(self.name + 'has max life')
		else:
			 self.health_point += health_point

	def get_damage(self, attack_to):
		mydamage = self.mydamage
		if attack_to.health_point - self.mydamage <= 0:
			print(attack_to.name + ' is dead')
		else:
			attackt_to.health_point -= mydamage
	
	def get_status(self):
		print('health: ' + str(self.health_point))
		print('damage: ' + str(self.mydamage))
		print('name: ' + self.name)



tibike = Character('tibike', 100, 15)
jozsika = Character('jozsika', 10, 15)
andraska = Character('andraska', 50, 15)