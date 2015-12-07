# def count_letters(input_string):
# 	output = {}
# 	if len(input_string) > 0:
# 		output[input_string[0]] = len(input_string)
# 	return output

def count_letters(input_string):
	output = {}
	if len(input_string) > 0:
		for i in input_string:
			if i in output:
				output[i] += 1
			else:
				output[i] = 1
	return output
