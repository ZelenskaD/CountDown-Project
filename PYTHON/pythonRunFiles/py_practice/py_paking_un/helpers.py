from random import randint, choice


def get_rand_year():
  return randint(1900,2000)

def get_rand_month():
    month = ['Jan', 'Feb', 'Mrc','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    return choice(month)