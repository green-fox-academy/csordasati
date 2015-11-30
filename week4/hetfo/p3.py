numbers = [4, 5, 6, 7, 8, 9, 10]

def addNumbers(list):
	result = 0
	for i in range(len(list)):
		result = list[i] + result
	return result