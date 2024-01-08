# word = 'brontosaurus'
# d = dict()
# for c in word:
#     d[c] = d.get(c, 0) + 1
# print(d)

# abc = ['a', 'b']
# abc[0] = 1
# print(abc[0])
# print(abc)

# cba = ('a', 'n' )
# cba[0] = 1
# print(cba[0])

# t= tuple(100)

# print(t)

# F үсгээр эхэлж M-ээр төгссөн мөрүүдийг хайх хайлт
# import re
# hand = open('mbox-short.txt')
# for line in hand:
#     line = line.rstrip()
#     if re.search('^F..m:', line):
#         print(line)
        
# import re
# hand = open('mbox-short.txt')
# for line in hand:
#     line = line.rstrip()
#     if re.search('^From:.+@', line):
#         print(line)

# import re
# s = 'A message from csev@umich.edu to cwen@iupui.edu about meeting'
# lst = re.findall('\S+\S+', s)
# print(lst)

# import re
# hand = open('mbox-short.txt')
# for line in hand:
#     # line = line.rstrip()
#     x = re.findall('\S+@\S+', line)
#     if len(x) > 0:
#         print(x)
        
# import re
# hand = open('mbox-short.txt')
# for line in hand:
#     line = line.rstrip()
#     x = re.findall('[a-zA-Z0-9]\S*wen\S*[a-zA-Z]', line)
#     if len(x) > 0:
#         print(x)
        
        
# import re
# hand = open('mbox-short.txt')
# for line in hand:
#     line = line.rstrip()
#     if re.search('^X\S*: [0-9.]+', line):
#         print(line)
        
# import re
# hand = open('mbox-short.txt')
# for line in hand:
#     line = line.rstrip()
#     x = re.findall('^X\S*: ([0-9.]+)', line)
#     if len(x) > 0:
#         print(x)
        
# import re
# hand = open('mbox-short.txt')
# for line in hand:
#     line = line.rstrip()
#     x = re.findall('^Details:.*rev=([0-9]+)', line)
#     if len(x) > 0:
#         print(x)
        
# import re
# x = 'We just received $10.00 for cookies.'
# y = re.findall('\$[0-9.]+',x)

# print(y)


