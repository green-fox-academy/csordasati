from anagramm import is_anagramm

def test_assert(actual, expected):
	if actual == expected:
		print('check')
	else:
		print("FAILED")

# test case

test_assert(is_anagramm('', ''), True)
test_assert(is_anagramm('a', ''), False)
test_assert(is_anagramm('ab', 'ba'), True)
test_assert(is_anagramm('abc', 'bac'), True)
test_assert(is_anagramm('asdfg', 'gafsd'), True)
