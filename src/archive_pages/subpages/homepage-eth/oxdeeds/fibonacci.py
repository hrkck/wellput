i = 1
j = 0
temp = 0
for _ in range(10):
    temp = i
    i += j
    j = temp

print(i)
