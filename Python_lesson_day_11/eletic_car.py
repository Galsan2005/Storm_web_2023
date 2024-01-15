class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0
    def get_descriptive_name(self):
        long_name = f"{self.year} {self.make} {self.model}"
        return long_name.title()
    def read_odometer(self):
        print(f"This car has {self.odometer_reading} miles on it.")
    def upgrade_odometer(self, mileage):
        if mileage >= self.odometer_reading:
            self.odometer_reading = mileage
        else:
            print("You can't roll back an odometer!")
    def increment_odometer(self, miles):
        self.odometer_reading += miles
    
my_new_car = Car('audi', 'a4', 2024)
my_new_car.odometer_reading = 23
my_new_car.upgrade_odometer(23)
my_new_car.read_odometer
    
print('========')
print('EX 09')
print('========')

class Battery:
    def __init__(self, battery_size):
        self.battery_size = battery_size
    def upgrade_battery(self):
        if self.battery_size != 65:
            self.battery_size = 65
            print(self.battery_size)
    def get_range(self):
        if self.battery_size == 40:
            range = 150
        elif self.battery_size == 65:
            range = 225
            print(f'This car can go about {range} miles on a full charge')
New_car = Battery(40)
New_car.upgrade_battery()
New_car.get_range()


class ElectricCar(Car):
    def __init__(self, make, model, year):
        """
        Initialize attributes of the parent class.
        Then initialize attributes specific to an electric car.
        """
        super().__init__(make, model, year)
        self.battery_size = 40
        self.battery = Battery()
    def describe_battery(self):
        """Print a statement describing the battery size."""
        print(f"This car has a {self.battery_size}-kWh battery.")
    def fill_gas_tank(self):
        """Electric cars don't have gas tanks."""
        print("This car doesn't have a gas tank!")
        
