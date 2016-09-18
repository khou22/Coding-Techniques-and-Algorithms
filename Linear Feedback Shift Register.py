import random

seedLength = input("Length of seed?")
seed = [] # Seed
pad = [] # Final pad

for i in range(0, int(seedLength)):
    randomBit = int(round(random.uniform(0, 1)))  # Get random bit
    seed.append(randomBit)  # Add to array

print("")
print("Seed:")
print(seed)
pad = seed

selectionPoint = input("What is the 'k' value. Must be less than seed length.")
padLength = input("Size of the pad?")

for i in range(0, int(padLength)):
    pointOne = i
    pointTwo = i + int(selectionPoint)
    if pad[pointOne] == pad[pointTwo]:
        # If they are the same, add a 0
        pad.append(0)
    else:
        # If they are different, add a 1
        pad.append(1)

print("")
print("Pad:")
print(pad)