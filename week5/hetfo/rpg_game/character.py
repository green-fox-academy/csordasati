class Character():
	def __init__(self, name, hp, damage):
		self.name = name
		self.hp = hp
		self.damage = damage

	def drink_potion(self):
		self.hp += 10

	def normal_strike(self, name):
		name.hp -= self.damage

	def get_status(self):
		life_status = 'DEAD'
		if self.hp > 0:
			life_status = 'HP:' + str(self.hp)
		return self.name + '\n' + life_status

class Herlic(Character):
	def heal(self, friendly):
		friendly.hp += 10

class Barbarian(Character):
	def super_strike(self, opponent):
		opponent.hp -= 2 * self.damage

class Monster(Character):
	def super_attack(self, opponent):
		opponent.hp -= self.damage
		self.hp += 2

class Wizard(Character):
	def __init__(self, name, hp, damage, manna):
		self.manna = manna
		super().__init__(name, hp, damage)

	def strike(self, opponent):
		if self.manna > 5: 
			opponent.hp -= 3 * self.damage 
		else:
			opponent.hp -= self.damage 
		self.manna -= 5






