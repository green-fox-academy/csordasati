t = open('alma.txt')

def counter(text):
	list_counter = []
	text = t
	text_line = t.readlines()
	lines = 0
	characters = 0
	for line in text_line:
		lines += 1
		for n in line:
			characters += 1
	list_counter.append(lines)
	list_counter.append(characters)
	return list_counter


input_file = open('alma.txt')
print(input_file.read())

file_content = input_file.read()

line_count = len(file_content.split('\n'))

len(file_content)

def asd():
	return [line_count, len(file_content)]






