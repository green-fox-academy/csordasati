import unittest
from character import Herlic
from character import Character

class TestHerlic(unittest.TestCase):
	def test_exist_herlic(self):
		herlic = Herlic('TestHerlic', 100, 10)

	def test_can_heal(self):
		herlic = Herlic('TestHerlic', 100, 10)
		friendly = Character('Test', 100, 10)
		herlic.heal(friendly)
		self.assertEqual(friendly.hp, 110)


unittest.main()