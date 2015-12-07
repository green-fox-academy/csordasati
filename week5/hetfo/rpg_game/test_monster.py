import unittest
from character import Monster
from character import Character

class TestMonster(unittest.TestCase):
	def test_exist_monster(self):
		monster = Monster('TestMonsta', 100, 10)

	def test_monster_passiv_skill(self):
		monster = Monster('TestMonsta', 100, 10)
		opponent = Character('Test', 100, 10)
		monster.super_attack(opponent)
		self.assertEqual(opponent.hp, 90)
		self.assertEqual(monster.hp, 102)

unittest.main()