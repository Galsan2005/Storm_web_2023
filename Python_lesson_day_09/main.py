# import socket
# mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# mysock.connect(('data.pr4e.org', 80))
# cmd = 'GET http://data.pr4e.org/romeo.txt HTTP/1.0\r\n\r\n'.encode()
# mysock.send(cmd)
# while True:
#     data = mysock.recv(512)
#     if len(data) < 1:
#         break
#     print(data.decode(),end='')
# mysock.close()

# import urllib.request
# fhand = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')
# for line in fhand:
#     print(line.decode().strip())
    
# import urllib.request, urllib.parse, urllib.error
# img = urllib.request.urlopen('http://data.pr4e.org/cover3.jpg')
# fhand = open('cover3.jpg', 'wb')
# fhand.write(img)
# fhand.close()


# ===============================================
# stuff = list()
# stuff.append('python')
# stuff.append('chuck')
# stuff.sort()
# print (stuff[0])
# print (stuff.__getitem__(1))
# print (list.__getitem__(stuff,0))
# print(dir(stuff))

# class PartyAnimal:
#     x = 0
#     def party(self) :
#         self.x = self.x + 1
#         print("So far",self.x)
# an = PartyAnimal()
# an.party()
# an.party()
# an.party()
# PartyAnimal.party(an)

# class PartyAnimal:
#     x = 0
#     def party(self) :
#         self.x = self.x + 1
#         print("So far",self.x)
# an = PartyAnimal()
# print ("Type", type(an))
# print ("Dir ", dir(an))
# print ("Type", type(an.x))
# print ("Type", type(an.party))

# class PartyAnimal:
#     x = 0
#     def __init__(self):
#         print('I am constructed')
#     def party(self) :
#         self.x = self.x + 1
#         print('So far',self.x)
#     def __del__(self):
#         print('I am destructed', self.x)
# an = PartyAnimal()
# an.party()
# an.party()
# an = 42
# print('an contains',an)

# class PartyAnimal:
#     x = 0
#     name = ''
#     def __init__(self, nam):
#         self.name = nam
#         print(self.name,'constructed')
#     def party(self):
#         self.x = self.x + 1
#         print(self.name,'party count',self.x)
        
# s = PartyAnimal('Sally')
# j = PartyAnimal('Jim')
# s.party()
# j.party()
# s.party()

# from party import PartyAnimal

# class CricketFan(PartyAnimal):
#     points = 0
#     def six(self):
#         self.points = self.points + 6
#         self.party()
#         print(self.name,"points",self.points)
        
# s = PartyAnimal("Sally")
# s.party()

# j = CricketFan("Jim")
# j.party()
# j.six()
# print(dir(j))