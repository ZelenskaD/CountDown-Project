# grades={
#   'A': 12,
#   'B':19,
#   'C':30
# }

# # for pair in grades.items():
# #   print(pair)
# for (k,v) in grades.items():
#   print(k,v)


#   =========Errors======



def get_days_alive(person):
  try:
    days = person['age']* 365
    print(f'{person["name"]} have been alive for {days} days')
  except KeyError as exc:
    # print('EXC=', exc)
    print(f"Missing key: {exc}")
  except TypeError:
    print("Expected person to be a dict")



# {'name':'princess kitty', 'age': 10}

# LBYL 
# In [4]: %run un_packing.py

# In [5]: get_days_alive({'age':50})
# You have been alive for 18250 days

def bounded_avg(nums):
    "Return avg of nums (makes sure nums are 1-100)"

    for n in nums:
        if n < 1 or n > 100:
            raise ValueError("Outside bounds of 1-100")

    return sum(nums) / len(nums)

def handle_data():
    "Process data from database"

    # ages = get_ages(from_my_db)
    ages = [10,40,50,99,103,2,0]

    try:
        avg = bounded_avg(ages)
        print("Average was", avg)

    except ValueError as exc:
        # exc is exception object -- you can examine it!
        print("Invalid age in list of ages")