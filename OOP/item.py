import csv

class Item:
    pay_rate = 0.8 # the pay rate after 20% sale

    all = []

    def  __init__(self,name:str,price:float,quantity=0):
        #run validations to the received arguments
        assert price >=0, f"Price {price} is not greater than or equal to zero!"
        assert quantity >=0, f"Quantity {quantity} is not greater than or equal to zero!"
        # assign to self object
        self.__name = name
        self.__price = price
        self.quantity = quantity
        # actions to execute
        Item.all.append(self)
    
    @property
    def price(self):
        return self.__price

    @property
    def name(self):
        return self.__name

    @name.setter
    def name(self,value):
        self.__name=value
    

    def calculate_total_price(self):
        return self.__price *self.quantity
    
    def apply_discount(self):
        self.__price = self.__price * self.pay_rate

    def apply_increment(self,increment_value):
        self.__price = self.__price + self.price * increment_value

    @classmethod
    def instantiate_from_csv(cls):
        with open ('items.csv','r') as f:
            reader = csv.DictReader(f)
            items = list(reader)
        for item in items:
            Item(
                name = item.get('name'),
                price = float(item.get('price')),
                quantity = int(item.get('quantity')),
            )
    
    @staticmethod
    def is_integer(num):
        #we will count out the flosats that are point zero
        #for i.e：5.0， 10.0
        if isinstance(num,float):
            #count out the floast that are point zero
            return num.is_integer()
        elif isinstance(num,int):
            return True
        else:
            return False

    def __repr__(self):
        return f"{self.__class__.__name__}('{self.name}',{self.__price},{self.quantity})"

