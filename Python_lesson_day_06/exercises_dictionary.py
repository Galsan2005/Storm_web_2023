# print('===========')
# print('exercise 01')
# print('===========')

# fhand = open('words.txt')
# counts = dict()
# for line in fhand:
#     words = line.split()
#     for word in words:
#         if word not in counts:
#             counts[word] = 1
#         else:
#             counts[word] += 1
# print(counts)

# print('===========')
# print('exercise 02')
# print('===========')

# fname = input('Enter the file name: ')
# try:
#     fhand = open(fname)
# except:
#     print('File cannot be opened: ', fname)
#     exit()
    
# date = dict()
# for line in fhand:
#     if line.startswith("From"):
#         words = line.split()
#         if len(words) > 2:
#             day = words[2]
#             if day not in date:
#                 date[day] = 1
#             else:
#                 date[day] +=1
# print(date)

# print('===========')
# print('exercise 03')
# print('===========')

# fname = input('Enter the file name: ')
# try:
#     fhand = open(fname)
# except:
#     print('File cannot be opened: ', fname)
#     exit()
    
# address = dict()
# for line in fhand:
#     if line.startswith("From"):
#         words = line.split()
#         if len(words) > 1:
#             email = words[1]
#             if email not in address:
#                 address[email] = 1
#             else:
#                 address[email] +=1
# print(address)

print('===========')
print('exercise 04')
print('===========')

fname = input('Enter the file name: ')
try:
    fhand = open(fname)
except:
    print('File cannot be opened: ', fname)
    exit()
    
address = dict()
x = 0
for line in fhand:
    if line.startswith("From"):
        words = line.split()
        if len(words) > 1:
            email = words[1]
            if email not in address:
                address[email] = 1
            else:
                address[email] +=1
                if address[email] > x:
                    x = address[email]
                    
print(address)
print(x)