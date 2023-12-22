print("Lesson Day 03")
print("Recapture")
print("===========")
print("Calculator")
x = input("Enter a number: ")
y = input("Enter a number: ")
z = input('Enter an operation: ')
Result = 0
try:
    operator = float(x)
    operand = float(y)
    operation = str(z)
    if operation == "+":
        Result = operator + operand
        print(Result)
    elif operation == "-":
        Result = operator - operand
        print(Result)
    elif operation == "*":
        Result = operator * operand  
        print(Result)
    elif operation == "/":
        Result = operator / operand
        print(Result)
    elif operation == "//":
        Result = operator // operand
        print(Result)
    elif operation == "%":
        Result = operator % operand
        print(Result)
    elif operation == "**":
        Result = operator ** operand
        print(Result)
    else:
        print("Operation is not supported")
except:
    if type(operator) == str:
        print('must be number')
    elif type(operand) == str:
        print('must be number')
    elif type(operation) == int:
        print('must be string')
    