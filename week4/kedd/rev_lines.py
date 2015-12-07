t = open('reversed_zen_lines.txt')

output = ''

for line in t:
	line = line.rstrip()
	new_line = line[::-1]
	output += new_line + '\n'

print(output)