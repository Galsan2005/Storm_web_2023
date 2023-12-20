# print("===========")
# print("Exercise 01")
# print("===========")

# hours = int(input('Enter Hours: '))
# rate = int(input('Enter Rate: '))
# pay = hours * rate

# if hours > 40:
#     hours = hours - 40
#     payment = hours * rate / 2
#     pay = pay + payment
#     print('Pay: ', pay)
# else:
#     print('Pay: ', pay)
    
print("===========")
print("Exercise 02")
print("===========")

# x = input('Enter Hours: ')
# y = input('Enter Rate: ')


# try:
#     hours = int(x)
#     rate = int(y)
#     pay = hours * rate
#     if hours > 40:
#         hours = hours - 40
#         payment = hours * rate * 1.5
#         pay = 40 * rate + payment
#         print('Pay: ', pay)
#     else:
#         print('Pay: ', pay)
# except:
#     print('Error, please enter numeric input')
    



print("===========")
print("Exercise 03")
print("===========")

inp = input('Enter score: ')

if type(inp) == str:
    print('its string')
elif type(inp) == float:
    print('it is floating nubmer')
elif type(inp) == int:
    print('it is integer number')
else:
    print('something ese')

# try:
#     score = float(inp)
#     if score < 0.6:
#         print("F")
#     elif (score >= 0.6) and (score < 0.7): 
#         print("D")
#     elif (score >= 0.7) and (score < 0.8): 
#         print("C")
#     elif (score >= 0.8) and (score < 0.9): 
#         print("B")
#     elif (score >= 0.9) and (score <= 1): 
#         print("A")
#     else:
#         print('Bad score')
# except:
#     print('Bad score')