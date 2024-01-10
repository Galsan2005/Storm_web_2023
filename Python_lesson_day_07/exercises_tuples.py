# print('===========')
# print('exercise 01')
# print('===========')

# fname = input('Enter the file name: ')
# try:
#     fhand = open(fname)
# except:
#     print('File cannot be opened: ', fname)
#     exit()
    
# address = dict()
# x = 0

# for line in fhand:
#     if line.startswith('From'):
#         words = line.split()
#         if len(words) > 2:
#             email = words[1]
#             if email not in address:
#                 address[email] = 1
#             else:
#                 address[email] += 1
#                 if address[email] > x:
#                     x = address[email]
                   
# t = list(address.items())

# new_dict = dict()
# for key, value in t:
#     new_dict[value] = key

# new_list = list(new_dict.items())
# new_list.sort(reverse=True)
# print(new_list)
# print(email, x)

# print('===========')
# print('exercise 02')
# print('===========')

# fname = input('Enter the file name: ')
# try:
#     fhand = open(fname)
# except:
#     print("File cannot be opened ", fname)
#     exit()
    
# time = dict()
# for line in fhand:
#     if line.startswith("From"):
#         words = line.split()
#         if len(words) > 2:
#             element = words[5]
#             elements = element.split(":")
#             if elements[0] not in time:
#                 time[elements[0]] = 1
#             else:
#                 time[elements[0]] += 1
             
# t = list(time.items())   
# t.sort()

# for v in t :
#     print(v)
import string 
print('===========')
print('exercise 03')
print('===========')

fname = input('Enter the file name: ')
try:
    fhand = open(fname)
except:
    print("File cannot be opened ", fname)
    exit()

text = dict()
word_counter = 0
for line in fhand:
    line = line.translate(line.maketrans('','',string.punctuation))
    line = line.translate(line.maketrans('','',string.digits))
    line = line.lower()
    words = line.split()
    word_counter += len(words)
    for word in words:
        txt = word.split()
        for x in word:
            if x not in text:
                text[x] = 1
            else:
                text[x] += 1
# print(word_counter)
# print(text)
statistics = dict()
for key, value in text.items():
    print(key, value)
    statistics[key] = value/word_counter * 100
    
print(statistics)
print(word_counter)