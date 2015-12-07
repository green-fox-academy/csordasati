import datetime
x = datetime.datetime


# t = time.localtime()
m = datetime.date(2015, 12, 20)
z = datetime.timedelta(41, 1, 0, 0, 12, 12).__str__()
l = datetime.timedelta(minutes = 30)
s = x.now()

# dt = datetime.combine(date.today(), time(23, 55)) + timedelta(minutes=30)
# print dt.time()
print(l)
print(s)
print(m)
print(type(z))

#  add to date
add_date = d == datetime.combine(d.date(), d.timetz())
print(add_date)
