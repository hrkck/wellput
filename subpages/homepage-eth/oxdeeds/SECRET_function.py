import csv

HOI = "alice" # HASHTAG OF INTEREST
COI_1 = 34.0 # COORDINATES OF INTEREST
COI_2 = 57.0 # COORDINATES OF INTEREST
R = 20 # SEARCH RANGE in trivial units

is_inRange = lambda x, y, tag: True if(((x - COI_1)**2 + (y - COI_2)**2 < R**2)  and (tag == HOI)) else False


with open("SECRET_data.blob", "r") as inputFile:
    data = csv.reader(inputFile)
    next(data, None) # skip the first line
    for row in data:
        x, y, tag = row
        print(is_inRange(float(x), float(y), str(tag)))
