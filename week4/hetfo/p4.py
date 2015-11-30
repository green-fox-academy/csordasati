def fakt(n):
    if n == 0:
        return 1
    else:
        return (n * fakt(n-1))

print(fakt(6))

def fakt1(num):
	factorial = 1
	i = 1
	while i <= num:
		factorial  *= i
		i += 1
	return factorial

print(fakt1(6))

def fakt3(num):
	output = 1
	for n in range(1, num + 1):
		output *= n
	return output

print(fakt3(6))