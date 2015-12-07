t = open("reversed_zen_order.txt", 'r')
x = open('s_zen_of_python.txt', 'w')
reversed_order = t.readlines()
t.close()

normal_order = reversed_order[::-1]

output = ''.join(normal_order)

x.write(output)
x.close()

print(output)