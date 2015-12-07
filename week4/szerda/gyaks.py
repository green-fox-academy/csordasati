students = [    
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},  
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Olaf', 'age': 12, 'candies': 7},  
        {'name': 'Teodor', 'age': 3, 'candies': 2}  
]

def sort_candy(dictionary):
	rich_children = 0
	for n in dictionary:
		if n['candies'] <= 4:
			rich_children += 1
	return rich_children

defw is_rich(kid):
	return kid['candies'] > 4

def filter_da_rich(peeps):
	return len(list(filter(is_rich, peeps)))

print(filter_da_rich)


def rich_kids_in_one_line_bro(fellas):
	return len(list(filter(lambda x: x['candies'] > 4, fellas)))

print(rich_kids_in_one_line_bro(students))