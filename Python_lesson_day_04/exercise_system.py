# print('===========')
# print('Exercise 01')
# print('===========')

# a = input("Enter a number: ")
# b = 0

# def convert_to_binary(number):
#     z = ""
#     result = ""
#     while number > 1:
#         b = number % 2
#         number = number // 2 
#         if b == 0:
#             z = z + "0"
#         else:
#             z = z + "1" 
#     length = len(z)
#     x = length - 1
#     while x >= 0:
#         result = result + z[x]
#         x = x - 1
#     result = "1" + result      
#     print(result)  


# try:
#    num = int(a)
#    convert_to_binary(num)
# except: 
#     print('Must be number')
    
# print('===========')
# print('Exercise 02')
# print('===========')

# x = input("Enter a number: ")
# length = 0
# same = 0
# y = 0
# result = 0
# z = 0
# b = 0
# sum = 1

# try: 
#     number = int(x)
#     same = number
#     while same > 0:
#         same = same // 10
#         length = length + 1
        
#     while number > 0:
#         y = number % 10
#         number = number // 10
#         if length > z:
#             if z == b and y == 1:
#                 result = result + 1
#             elif y > 0:
#                 while z > b:
#                     sum = sum * 2
#                     b = b + 1
#                 result = result + sum
#             else:
#                 result = result
#         sum = 1
#         z = z + 1
#         b = 0 
        
#     print(result)
# except:
#     print('Must be number')


x = input("Enter a number: ")

def binary(number):
    rest = 0
    power = 0
    while number > 0:
        if number % 10 ** (power + 1) != 0:
            rest = rest + 2 ** power
            number = number - 10 ** power          
        power = power + 1
    print(rest)
    
try:
    number = int(x) 
    binary(number)
except:
    print('Must be number!')

