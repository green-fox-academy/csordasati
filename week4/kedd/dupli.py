t = open('duplicated_chars.txt')
y = open('s_zen_of_python.txt', 'w')
x = '\n'
t.close()


lines = t.readlines()
normal_text = ''


for line in lines:
	if line == x:
		normal_text += line	
	else:
		normal_text += line[::2]

y.write(normal_text)
x.close()

print(normal_text)