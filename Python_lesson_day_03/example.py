# while True:
#     line = input('> ')
#     if line == 'done':
#         break
#     print(line)
# print('The End!')

# while True:
#     line = input('> ')
#     if line[0] == '#':
#         continue
#     if line == 'done':
#         break
#     print(line)
# print('The End!')

# friends = ['Joseph', 'Glenn', 'Sally']
# for friend in friends:
#     print('Happy New Year:', friend)
# print('Done!')

# total = 0
# for element in [3, 41, 12, 9, 74, 15]:
#     total = total + element
# print('Total: ', total)

largest = None
print('Before:', largest)
for element in [3, 41, 12, 9, 74, 15]:
    if largest is None or element > largest :
        largest = element
    print('Loop:', element, largest)
print('Largest:', largest)