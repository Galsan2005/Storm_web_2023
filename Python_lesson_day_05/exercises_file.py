# print("===========")
# print("exercise 01")
# print("===========")

# fhand = open('mbox.txt')
# for line in fhand:
#     print(line.upper())
    
# print("===========")
# print("exercise 02")
# print("===========")


# file_name = input("Enter the file name: ")
# fhand = open(file_name)

# a = 0
# sum = 0
# for line in fhand:
#     line = line.strip()
#     if line.startswith('X-DSPAM-Confidence:'):
#         pos = line.find(':')
#         host = line[pos+1:]
#         number = float(host)
#         sum = sum + number
#         a = a + 1
# result = sum / a
# print(result)

print("===========")
print("exercise 03")
print("===========")

file_name = input("Enter the file name: ")
count = 0

try:
    if file_name == "na na boo boo":
        print("NA NA BOO BOO TO YOU - You have been punk'd!")
    else:
        fhand = open(file_name)
        for line in fhand:
            count  = count + 1
        print(f'There were {count} subject lines in {file_name}')
except:
    print('File cannot be opened:', file_name)


