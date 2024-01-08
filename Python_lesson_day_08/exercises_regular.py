# print('===========')
# print('exercise 01')
# print('===========')

# import re
# count = 0
# word = str(input("Enter a regular expression: "))
# hand = open('mbox.txt')
# for line in hand:
#     line = line.rstrip()
#     if re.search(word, line):
#         count += 1

# print("mbox.txt had ", count ,"lines thath matched ", word)

print('===========')
print('exercise 02')
print('===========')

import re
name = str(input('Enter file: '))
count = 0 
sum = 0
hand = open(name)
for line in hand:
    line = line.rstrip()
    x = re.findall('^New Revision: ([0-9.]+)', line)
    if len(x) > 0:
        count +=1
        sum = sum + int(x[0])

print(int(sum/count))