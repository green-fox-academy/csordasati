class Player:
	def __init__(self, name, hp, dmg):
		self.name = name
		self.hp = hp
		self. dmg = dmg

	def drink_potion(self):
		self.hp += 10

	def strike(self, enemy):
		enemy.hp -= self.dmg
		print('Enemy hp: ' + str(enemy.hp))

	def print_status(self):
		print(self.name)
		if self.hp <= 0:
			print('DEAD... hahahahaa')
		else:
			print('HP: ' + str(self.hp))

# leorokli az osszes eddigi tulajdonsagat a Playernek
class Cerlic(Player):
	def heal(self, ally):
		ally.hp += 10
		print('Ally hp: ' + str(ally.hp))

balrog = Player('Balrog', 100, 20)
gandalf = Player('Gandalf', 50, 40)
melkor = Cerlic('Melkor', 1000, 80)

balrog.print_status()
# for i in range(3):
	


	