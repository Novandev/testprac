# This program will print out the multiples of 3 or 5 and print them
import sys

def multiples(num):
    """ This will print out mulitples of 3 and 5 of any number and will add them"""
    #Convert to an integer value first
    num=int(num)
    #  tracking value
    total_list=0
    #  loop through all of the values in the range of num
    for  i in range(num + 1):
        #  if its devisible my 3 or 5 then print
        if i % 3 == 0 or i % 5 ==0:
            total_list += i
    print("{} is the total number of items".format(total_list))

if __name__ == '__main__':
    multiples(sys.argv[1])
