print('Lesson day 11')

class Human:
    def __init__(self, name , age, head, body, legs, hands):
        self.name = name
        self.age = age
        self.head = head
        self.body = body
        self.legs = legs
        self.hands = hands
    def say_hello(self):
        print(f'Hello, my name is {self.name}, I am {self.age} years old')
        
Galsan = Human('Galsan', 18, 1, 1, 2, 2)
Galsan.say_hello()

class Animal:
    def __init__(self, name, race, gender):
        self.name = name
        self.race = race
        self.gender = gender
    def make_sound(self, sound):
        print('I make a sound: ', sound)

Dog = Animal('Paanag', 'Tuvd', 'male')
Dog.make_sound('Hov Hov')
Bear = Animal('Borkov', 'Mazaalai', 'male')
Bear.make_sound( 'Ouarr')
Bird = Animal('Khun', 'Usnii shuvuu', 'female')
Bird.make_sound('Jiv jiv')

class Father:
    def __init__(self, name, age, nationality):
        self.name = name
        self.age = age
        self.nationality = nationality
        
    def say_hello(self):
        print(f'Hello,  My name is {self.name}, I am {self.age} years old, I have nationality {self.nationality}')
        
class Son(Father):
    def greeting(self):
        print('Hello , I am son')
        
class Daughter(Father):
    def greeting(self):
        print('Hello, I am daughter')
        
Gerelsaikhan = Father('Gerelsaikhan', 48, 'Mongolian')
Gerelsaikhan.say_hello()
Galsan = Son('Galsan', 18, 'Mongolian')
Galsan.say_hello()
Arvin = Daughter('Arvin', 14, 'Mongolian')
Arvin.say_hello()
Arvin.greeting()