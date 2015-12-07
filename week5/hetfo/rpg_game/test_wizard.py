import unittest
from character import Character
from character import Wizard

class TestWizard(unittest.TestCase):
	def test_exist_wizard(self):
		wizard = Wizard('Dumbledore', 100, 10, 50)

	def test_wizard_strike(self):
		wizard = Wizard('Dumbledore', 100, 10, 20)
		opponent = Character('TestCharacter', 100, 10)
		wizard.strike(opponent)
		self.assertEqual(opponent.hp, 70)
		self.assertEqual(wizard.manna, 15)

	def test_strike_and_manna(self):
		wizard = Wizard('Diablo', 100, 10, 5)
		opponent = Character('TestCharacter', 100, 10)
		wizard.strike(opponent)
		self.assertEqual(opponent.hp, 90)
		self.assertEqual(wizard.manna, 0)

unittest.main()