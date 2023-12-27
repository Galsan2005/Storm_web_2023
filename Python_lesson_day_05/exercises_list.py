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

fhand = open('romeo.txt')

for line in fhand:
    unique_words = line.split()
    unique_words.sort()
    print(unique_words)