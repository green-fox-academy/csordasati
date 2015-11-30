class Bank_account():
	def __init__(self, name, balance):
		if type(name) != str:
			raise Exception("name is a string!")
		if type(balance) != int:
			raise Exception("balance is a number!")
		self.name = name
		self.balance = balance

	def pay(self, money):
		if money > self.balance:
			print(self.name + ' has not enough money for this action')
		else:
			self.balance -= money

	def receive(self, money):
		self.balance += money

	def print_balance(self):
		print(self.balance)

	def self_like(self):
		print (self.name + ' bizony mondom neked, fasza vagy!!')

	def transfer(self, name_to, money):
		# self.balance -= money
		# name_to.balance += money
		self.pay(money)
		name_to.receive(money)


jozsika = Bank_account("jozsika", 1000)
tibike = Bank_account('tibike', 1000)