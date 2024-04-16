from helpers import get_rand_month, get_rand_year
def make_person(name, favCOlor):
  return {
    'name': name,
    'favColor': favColor,
    'bitrh_year': get_rand_year(),
    'birth_month': get_rand_month()
  }