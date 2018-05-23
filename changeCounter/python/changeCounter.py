import sys
# u
from decimal import Decimal
import math

class GiveChange():
    """simple program for taking or gving change"""
    def __init__(self,amount):
        self.coin_list = list()
        try:
            amount=float(amount)
            # checks to see if the iput is a number
            if math.isnan(amount) == True:
                raise ValueError
            else:
                # convert to a decial object
                amount= Decimal(amount)
                self.amount=round(amount,2)

        except ValueError:
            print("Please give me a valid decimal")


    def
    def change(amount):
        amount=float(amount)
        print(amount)
        #check for quarters first
        if amount % 0.25 == 0:
            return_amount = int(amount / 0.25)
            print('This transaction returned {} quarters'.format(return_amount))
            return



if __name__ == '__main__':
    GiveChange(sys.argv[1])
