print("===========")
print("Exercise 01")
print("===========")

add = 0
count = 0
x = 0

while True:
    a = input("Enter a number: ")
    try:
        number = int(a)
        add = add + number
        count = count + 1
    except:
        if a == "done":
            break
        else:
            print("Invalid input")

x = add / count       
print(add, count, x)

print("===========")
print("Exercise 02")
print("===========")

add = 0
count = 0
y = 0

while True:
    a = input("Enter a number: ")
    try:
        number = int(a)
        if number > y:
            y = number
        add = add + number
        count = count + 1            
    except:
        if a == "done":
            break
        else:
            print("Invalid input")
                 
print(add, count, y)