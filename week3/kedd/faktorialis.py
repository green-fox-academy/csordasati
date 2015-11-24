def fakt(n):
    if n == 0:
        return 1
    else:
        return (n * fakt(n-1))

print(fakt(4))
