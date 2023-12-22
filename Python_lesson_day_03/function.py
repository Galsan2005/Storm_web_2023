print("Lesson Day 03")
print("Function")
print("===========")

max('Hello World')

min('Hello World')

len('Hello World')

max(4, 5, 8)

int('32')

# not
# int('Hello')

float('32')

# math functions
import math
decibels = 10 * math.log10(0.5)
print(decibels)
math.sqrt(2)

import random
x = random.random()
random.randint(5, 10)

random.choice([1,2,3,4])

#function definition
def print_lyrics():
    print('I am a lumberjack, and I am okey.')
    print('I sleep all night and I and work all day.')
    
# function call
print_lyrics()

def repeat_lyrics():
    print_lyrics()
    print_lyrics()

repeat_lyrics()

#  function with parameter
def print_twice(bruce):
    print(bruce)
    print(bruce)
    
print_twice('Spam')
print_twice(47)
print_twice(True)

# function with return value
def add_two(a, b):
    added = a + b
    return added

x = add_two(3, 5)
print(x)

print("exercise")
print("===========")

def f(x, y):
    result = (x * x) + (y * y)
    return(result)

def g(x, y):
    result = ((x * x) - (2 * x * y) + (y * y))
    return(result)
    
def t(x,y,z):
    result = ((x * x) + (3 * x * y * z) + (y * y))/(z * z)
    return(result)
    
a = f(5,6)  
b = g(1,1)  
c = t(2,3,1)  
print(a)
print(b)
print(c)

glad = str(input("> "))
temperature = int(input("Enter an temparature: "))
def convert_temperature(temperature):
    
    if glad == "C":
        result = (temperature * (9/5)) + 32
        return(result)
    else:
        result = (temperature - 32) * 5/9
        return(result)

a = convert_temperature(temperature)
print(a)