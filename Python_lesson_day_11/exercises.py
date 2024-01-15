# print('========')
# print('EX 01')
# print('========')

# class Restaurant:
#     def __init__(self, restaurant_name, cuisine_type):
#         self.restaurant_name = restaurant_name
#         self.cuisine_type = cuisine_type
#     def describe_restaurant(self):
#         print(f'{self.restaurant_name}, {self.cuisine_type}')
#     def open_restaurant(self, abc):
#         print(f' I am {abc}')
        
# Luna = Restaurant('Luna', 'Italian')
# Luna.describe_restaurant()
# Luna.open_restaurant('open')
# Star = Restaurant('Star', 'Mongolian')
# Star.describe_restaurant()
# Star.open_restaurant('close')
# Denny = Restaurant('Denny', 'Japanese')
# Denny.describe_restaurant()
# Denny.open_restaurant('open')

# print('========')
# print('EX 03')
# print('========')

# class User:
#     def __init__(self, first_name, last_name):
#         self.first_name = first_name
#         self.last_name = last_name
#     def describe_user(self):
#         print(f'First name: {self.first_name}, Last name: {self.last_name}')
#     def greet_user(self):
#         print(f'Hello {self.first_name}')

# Person_01 = User('Bold', 'Batbold')
# Person_01.describe_user()
# Person_01.greet_user()
# Person_02 = User('Anu', 'Temuulen')
# Person_02.describe_user()
# Person_02.greet_user()

print('========')
print('EX 04')
print('========')

class Restaurant:
    def __init__(self, restaurant_name, cuisine_type, number_served):
        self.restaurant_name = restaurant_name
        self.cuisine_type = cuisine_type
        self.number_served = number_served
    def describe_restaurant(self):
        print(f'{self.restaurant_name}, {self.cuisine_type}')
    def open_restaurant(self, abc):
        print(f' I am {abc}')
    def set_number_served(self, number):
        self.number_served = number
        print(f'set number server: {self.number_served}')
    def increment_number_served(self):
        self.number_served = self.number_served + 1
        print(f'count {self.number_served}')
        
        
Luna = Restaurant('Luna', 'Italian', 0)
Luna.set_number_served(5)
Luna.increment_number_served()
Luna.increment_number_served()

print('========')
print('EX 05')
print('========')

class User:
    def __init__(self, first_name, last_name, login_attempts):
        self.first_name = first_name
        self.last_name = last_name
        self.login_attempts = login_attempts
    def describe_user(self):
        print(f'First name: {self.first_name}, Last name: {self.last_name}')
    def greet_user(self):
        print(f'Hello {self.first_name}')
    def increment_login_attempts(self):
        self.login_attempts += 1
        print(f'login attempts: {self.login_attempts}')
    def reset_login_attempts(self):
        self.login_attempts = 0
        print(f'login attempts: {self.login_attempts}')
    
Person_01 = User('Bold', 'Batbold',10)
Person_01.increment_login_attempts()
Person_01.increment_login_attempts()
Person_01.increment_login_attempts()
Person_01.increment_login_attempts()
Person_01.increment_login_attempts()
Person_01.increment_login_attempts()
Person_01.reset_login_attempts()
Person_01.increment_login_attempts()

print('========')
print('EX 06')
print('========')

class IceCreamStand(Restaurant):
    flavors = []
    def __init__(self, restaurant_name, cuisine_type, number_served, flavors):
        super().__init__(restaurant_name, cuisine_type, number_served)
        self.flavors = flavors
    def print_flavors(self):
        for flavor in self.flavors:
            print(flavor)

IceCreamStand = IceCreamStand('Gelatto', 'Italian', 100, ["Vanilla", "Chocolate"])
IceCreamStand.print_flavors()
IceCreamStand.describe_restaurant()

print('========')
print('EX 07')
print('========')
class Privileges:
    privileges = []
    def __init__(self, privileges):
        self.privileges = privileges
    def show_privileges(self):
        for privilege in self.privileges:
            print(privilege)

Privilege = Privileges(['can add post', 'can delete post', 'can ban user'])
Privilege.show_privileges()

print('========')
print('EX 08')
print('========')

class Admin(User):
    privileges = []
    def __init__(self, first_name, last_name, login_attempts, privileges):
        super().__init__(first_name, last_name, login_attempts)
        self.privileges = Privileges(privileges)
    def show_privileges(self):
        self.privileges.show_privileges()

Person_01 = Admin('Bold', 'Batbold', 10, ['can add post', 'can delete post', 'can ban user'])
Person_01.show_privileges()
Person_01.describe_user()


        