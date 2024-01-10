print("=============")
print('exercise 03')
print("=============")
import string
name = input("Enter file name: ")

try:
    fhand = open(name)
except:
    print('File is not opened')
    exit()

text = dict()
word_counter = 0
for line in fhand:
    line = line.rstrip()
    line = line.lower()
    line = line.translate(str.maketrans('','',string.punctuation))
    line = line.translate(str.maketrans('','',string.digits))
    words = line.split()
    for word in words:
        txt = word.split()
        word_counter += len(word)
        for consonant in word:
            text[consonant] = text.get(consonant, 0) + 1

list_text = list(text.items())
list_text.sort()
for key, value in list_text:
    percent = value/word_counter*100
    print(f'WORD: {key}        COUNT: {value}        PERCENT: {percent}')