import sys
import csv
def main():
    newlist=[]
    csvFile = sys.argv[1]
    with open(csvFile) as csvfile:
        readCSV = csv.reader(csvfile, delimiter=',')
        for row in readCSV:
            for word in row:
                newlist.append(word)
        print(set(newlist))

if __name__ == '__main__':
    main()
