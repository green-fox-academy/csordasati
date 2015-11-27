def create__palindrome(word):
	return word + word[::-1]

output = create__palindrome('pear')
print(output)