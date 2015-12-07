t = open('encoded_zen_lines.txt')
x = open('s.py', 'w')
text_line = t.readlines()
encoded_text = ''
t.close()


for line in text_line:
	for n in line:
		if n == '\n' or n == ' ':
			encoded_text += n
		else:
			encoded_text += chr(ord(n) - 1)

x.write(encoded_text)
x.close()

print(encoded_text)
