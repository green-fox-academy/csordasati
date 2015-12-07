# def is_anagramm(s1, s2):
# 	if s1 == s2:
# 		return True
# 	else:
# 		return False

# def is_anagramm(s1, s2):
# 	if s1[::-1] == s2:
# 		return True
# 	return s1 == s2

# def is_anagramm(s1, s2):
# 	return s1[::-1] == s2 or s1 == s2

# def is_anagramm(s1, s2):
# 	if s1 == 'abc' and s2 == 'bac':
# 		return True
# 	return s1[::-1] == s2 or s1 == s2

def is_anagramm(s1, s2):
	return sorted(s2) == sorted(s1)
