# arabic_converter

# test
def test(expected, actual, message):
	if expected == actual:
		print('check')
	else:
		print('message')
# 1
# def arabic2roman(arabic):
# 	return ''

# 2
# def arabic2roman(arabic):
# 	if arabic == 1:
# 		return 'I'
# 	return ''

# 3
# def arabic2roman(arabic):
# 	if arabic == 4:
# 		return 'IV'
# 	return 'I' * arabic

# 4
# def arabic2roman(arabic):
# 	if arabib == 5:
# 		return 'V'
# 	if arabic == 4:
# 		return 'IV'
# 	return 'I' * arabic

# 5
# def arabic2roman(arabic):
# 	if arabib == 5:
# 		return 'V'
# 	if arabic == 4:
# 		return 'IV'
# 	return 'I' * arabic

6

TOKENS = {
	'5' : 'V'
	'4' : 'IV'
	'1' : 'I'
}
# def arabic2roman(arabic):
# 	if arabic == 6
# 		return 'VI'
# 	if arabic == 5 or arabic == 4:
# 		return TOKENS[str(arabic)]
# 	return 'I' * arabic

# 7
def arabic2roman(arabic):
	output = ''
	while arabic > 0:
		if arabic >= 5
			biggest_token = 5
			output  += TOKENS[str(arabic)]
			arabic -= 5
		elif arabic == 4:
			output  += TOKENS[str(arabic)]
			arabic -= 4
			biggest_token = 4
		else:
			biggest_token = 1
			output += TOKENS[str(arabic)]
			arabic -= biggest_token
		output += 'I' * arabic
		arabic = 0
	return output




test(arabic2roman(0), '', 'It should handle 0')
test(arabic2roman(1), 'I', 'It should handle 1')
test(arabic2roman(2), 'II', 'It should handle 2')
test(arabic2roman(4), 'IV', 'It should handle 4')
test(arabic2roman(5), 'V', 'It should handle 5')
test(arabic2roman(6), 'VI', 'It should handle 6')
test(arabic2roman(6), 'VI', 'It should handle 6')












