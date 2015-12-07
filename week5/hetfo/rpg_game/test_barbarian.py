import unittest
from character import Barbarian
from character import Character

class TestBarbarian(unittest.TestCase):
	def test_exist_barbarian(self):
		barbarian = Barbarian('TestBarbarian', 100, 10)

	def test_super_strike(self):
		barbarian = Barbarian('TestBarbar', 100, 10)
		opponent = Character('Test', 100, 10)
		barbarian.super_strike(opponent)
		self.assertEqual(opponent.hp, 80)


unittest.main()