# word = 'brontosaurus'
# d = dict()
# for c in word:
#     if c not in d:
#         d[c] = 1
#     else:
#         d[c] = d[c] + 1
# print(d)

# word = 'brontosaurus'
# d = dict()
# for c in word:
#     d[c] = d.get(c, 0) + 1
# print(d)

# counts = {'chuck': 1, 'annie': 42, 'jan': 100}
# print(counts.get('jan', 0))

# fname = input('Enter the file name: ')
# try:
#     fhand = open(fname)
# except:
#     print('File cannot be opened: ', fname)
#     exit()
# counts = dict()
# for line in fhand:
#     words = line.split()
#     for word in words:
#         if word not in counts:
#             counts[word] = 1
#         else:
#             counts[word] += 1
# print(counts)

# counts = {'chuck': 1, 'annie': 42, 'jan': 100}
# lst = list(counts.keys())
# print(lst)
# lst.sort()
# for key in lst:
#     print(key, counts[key])
    
import string
print(string.punctuation)