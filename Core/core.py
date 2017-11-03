import random

def roll(diceString):
    diceString.replace(" ", "")
    n = 1
    s = 6
    diceSum = 0
    # parse string
    for i in range(len(diceString)):
        if diceString[i].lower() == "d":
            n = diceString[:i]
            s = diceString[i + 1:len(diceString)]

    # roll dice
    for i in range(int(n)):
        diceSum += random.randint(1, int(s))
    return diceSum

print(roll("2d6"))
print(roll("2d10"))
print(roll("1 d10"))
print(roll("2n20"))
