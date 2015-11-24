# user_input = input("Enter something:")
#
# if type(user_input) == int:
#     print("Is a number")
# else:
#     print("Not a number")
#
# if user_input == 0:
#     print("the number is zero")
# elif user_input > 0:
#     print('this number is positive')
# else:
#     print('this number is NOT positive')


# b = 5
#
# if b == 0:
#     print('zero')
# elif b == 1:
#     print('one')
# elif b == 2:
#     print('two')
# else:
#     print('a lot')

# user_input = int(input("Enter a number:"))
#
# # user_input = int(user_input)
#
# if type(user_input) == int:
#     print("Is a number")
# else:
#     print("Not a number")
#
# if user_input % 2 == 0:
#     print('the number is even')
# else:
#     print('this number is odd')
#
#
# userInput = int(input('Gimmi a number: '))

# a = 0
#
# while a < 100:
#     print(a)
#     a += 3

# numbers = [1, 2, 3, 4, 5]
#
# i = 0
#
# while i < len(numbers):
#     numbers[i] = numbers[i] * 2
#     i += 1
#
# print(numbers)

# numbers = [1, 2, 3, 4, 5]
#
# i = 0
# a = 0
#
# while i < len(numbers):
#         a += numbers[i]
#         i += 1
#         print(i, " =", a)
# print(a)


# numbers = [5, 7, 9, 11, 12, 13]
#
# i = 0
#
# while i < len(numbers):
#     if numbers[i] % 3 == 0:
#         print(i, "szama a tombnek, azaz a", numbers[i], " oszthato 3mal")
#     i += 1

# numbers = [12, 5, 9, 11, 12, 13]
# # az 'n' az erteket jelenti
# s = 0
# for n in numbers:
#     s += n
# print(s)

# i = 1
# while i < 100:
#     if i % 3 == 0 and i % 5 ==0:
#         print(i, "fizzbuzz")
#     elif i % 3 == 0:
#         print(i, 'fizz')
#     elif i % 3 == 0:
#         print(i, 'buzz')
#     i += 1


numbers = [12, 5, 9, 11, 12, 13]

maximum = 0
i = 0
for n in numbers:
    if maximum < n:
        maximum = n

print(maximum)
