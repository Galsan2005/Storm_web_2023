print('===========')
print('exercise 01')
print('===========')

number_list = [1, 2, 3, 3, 2, 45, 36, 74,765,78]

# length = len(number_list)
def chop(number_list):
    del number_list[0]
    del number_list[-1]
    
def middle():
    chop(number_list)
    print(number_list)
    
middle()

print('===========')
print('exercise 02')
print('===========')

unique_words = []
text = []
fhand = open('romeo.txt')

for line in fhand:
    unique_words = line.split()
    text = text + unique_words
    
text.sort() 
print(text)
    
print('===========')
print('exercise 03')
print('===========')

fhand = open("mbox-short.txt")
address = []

for line in fhand:
    if line.startswith("From"):
        address = line.split()
        print(address[1:])

print('===========')
print('exercise 04')
print('===========')

x = -1000000
y = 1000000
while True:
    z = input("Enter a number: ")
    if z == "done":
        print('Maximum: ' , x)
        print('Minimum: ' , y)
        break
    try:
        number = int(z)
        if number > x:
            x = number
        elif number < y:
            y = number
    except: 
        print("Must be number")