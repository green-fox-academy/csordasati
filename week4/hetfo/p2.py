af = 'baba'

def join_character(text):
	return text + 'a'

af = join_character(af)

print(af)

ag = ['macsk', 'rep', 'gyul', 'kacs', 'cic']

for i in range(len(ag)):
	ag[i] = join_character(ag[i])

print(ag)
