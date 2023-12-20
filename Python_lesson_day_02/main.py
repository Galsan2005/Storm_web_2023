# print('Hello World')

# a = 5

# b = 6

# string_type = 'Hello World'
# print('string_type')

# number_type = 5
# print(number_type)

# float_number_type = 5.5
# print(float_number_type)

# print(5 / 4)
# print(5 * 4)
# print(5 + 4)
# print(5 - 4)
# print(5 // 4)
# print(5 % 4)
# print(5 ** 4)
# print((5/4) % 1)

# name = input('Enter your  name: ')
# print('Your name is: ' , name)

# x = 5 
# y = 6
# print(x == y)
# print(x != y)
# print(x < y)
# print(x > y)
# print(x >= y)
# print(x <= y)

# print(x is not y)
# print(x is y)

print("=================")
print("Logical Operators")
print("=================")

x = 15
print((x >= 0) and (x <= 12))
print((x >= 13) and (x <= 19))
print((x >= 20) and (x <= 59))
print((x >= 60) and (x <= 100))

print("======================")
print("Conditional Statements")
print("======================")

age =int(input('Enter your age: ')) 

if age > 0:
    print('Age is positive')

if (age >= 0) and (age <= 12):
    print('You are a child')
    
elif (age >= 13) and (age <= 19):
    print('You are a teenager')
    
elif (age >= 20) and (age <= 59):
    print('You are a adult')
    
elif (age >= 60) and (age <= 100):
    print('You are a senior')

else:
    print('You are a dinosaur')