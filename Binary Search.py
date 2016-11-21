import math

items = [1, 5, 10, 30, 50, 51, 80, 81, 82, 83, 85, 90] # Sorted
print(items)

search = 90 #
print "Searching for %s" % search

found = False;
index = int(math.ceil(len(items) / 2)) # Middle value
scope = index

count = 0
while not found and (count < 5):
    count += 1
    print(index)
    print(scope)
    if (items[index] == search): # Found
        found = True
        print "Found item %s at index %s" % (search, index)

    scope = int(math.ceil(scope / 2)) # Decrease scope
    if (search < items[index]):
        print "Less than %s" % items[index]
        # If search is lower
        index = index - scope
    else:
        print "Greater than %s" % items[index]
        # If search is higher
        index = index + scope
