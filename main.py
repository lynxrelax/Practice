
import csv
class Item:
    pay_rate = 0.8 # the pay rate after 20% sale

    all = []

    def  __init__(self,name:str,price:float,quantity=0):
        #run validations to the received arguments
        assert price >=0, f"Price {price} is not greater than or equal to zero!"
        assert quantity >=0, f"Quantity {quantity} is not greater than or equal to zero!"
        # assign to self object
        self.name = name
        self.price = price
        self.quantity = quantity
        # actions to execute
        Item.all.append(self)

    def calculate_total_price(self):
        return self.price *self.quantity
    
    def apply_discount(self):
        self.price = self.price * self.pay_rate

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
        return f"Item('{self.name}',{self.price},{self.quantity})"
    

class Phone(Item):
    all = []
    def  __init__(self,name:str,price:float,quantity=0,broken_phones=0):
        # call to super function to have access to all attributes/methods
        super().__init__(
            name,price,quantity
        )
        #run validations to the received arguments
        assert broken_phones >=0, f"Broken phones {broken_phones} is not greater than or equal to zero!"
        # assign to self object
        self.broken_phones = broken_phones
        # actions to execute
        Phone.all.append(self)
     



phone1 = Phone("jscPhonev10", 500, 5, 1)
print(phone1.calculate_total_price())

#  

# Item.instantiate_from_csv()
# print(Item.all)

# for instance in Item.all:
#     print(instance.name)