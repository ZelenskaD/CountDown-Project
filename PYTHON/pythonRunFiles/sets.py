# lemon ={'sour','yellow','fruit', 'bumpy'}
# banana={'fruit', 'smooth','sweet', 'yellow'}
# orange=['fruit','bumpy','orange','sweet']

# for adj in banana|lemon|set(orange):
#   print(adj)

 

# In [285]: lemon|banana
# Out[285]: {'bumpy', 'fruit', 'smooth', 'sour', 'sweet', 'yellow'}

# In [286]: all_features = lemon|banana

# In [287]: banana.union(lemon)
# Out[287]: {'bumpy', 'fruit', 'smooth', 'sour', 'sweet', 'yellow'}

# In [288]: banana|lemon {'fruit', 'green', 'tart'}
#   File "<ipython-input-288-4e4b529c51da>", line 1
#     banana|lemon {'fruit', 'green', 'tart'}
#                  ^
# SyntaxError: invalid syntax


# In [289]: banana|lemo {'fruit', 'green', 'tart'}
#   File "<ipython-input-289-67a534a9ae51>", line 1
#     banana|lemo {'fruit', 'green', 'tart'}
#                 ^
# SyntaxError: invalid syntax


# In [290]: banana|lemon{'fruit', 'green', 'tart'}
#   File "<ipython-input-290-2e96c498c35a>", line 1
#     banana|lemon{'fruit', 'green', 'tart'}
#                 ^
# SyntaxError: invalid syntax


# In [291]: banana|lemon| {'fruit', 'green', 'tart'}
# Out[291]: {'bumpy', 'fruit', 'green', 'smooth', 'sour', 'sweet', 'tart', 'yellow'}

# In [292]: banana&banana
# Out[292]: {'fruit', 'smooth', 'sweet', 'yellow'}

# In [293]: banana&lemon
# Out[293]: {'fruit', 'yellow'}

# In [294]: banana.intersection(lemon)
# Out[294]: {'fruit', 'yellow'}

# In [295]: banana-lemon
# Out[295]: {'smooth', 'sweet'}

# In [296]: lemon-banana
# Out[296]: {'bumpy', 'sour'}

# In [297]: lemon.difference(banana)
# Out[297]: {'bumpy', 'sour'}

# In [298]: banana.difference(lemon)
# Out[298]: {'smooth', 'sweet'}

# In [299]: banana^lemon
# Out[299]: {'bumpy', 'smooth', 'sour', 'sweet'}

# In [300]: lemon.symmetric_difference(banana)
# Out[300]: {'bumpy', 'smooth', 'sour', 'sweet'}


# In [305]: %run sets.py

# In [306]: orange
# Out[306]: ['fruit', 'bumpy', 'orange', 'sweet']

# In [307]: lemon
# Out[307]: {'bumpy', 'fruit', 'sour', 'yellow'}

# In [308]: lemon&orange
# ---------------------------------------------------------------------------
# TypeError                                 Traceback (most recent call last)
# <ipython-input-308-45478fe10fce> in <module>
# ----> 1 lemon&orange

# TypeError: unsupported operand type(s) for &: 'set' and 'list'

# In [309]: lemon.intersection(orange)
# Out[309]: {'bumpy', 'fruit'}

# In [310]: orange.intersection(lemon)
# ---------------------------------------------------------------------------
# AttributeError                            Traceback (most recent call last)
# <ipython-input-310-78e5da43cd25> in <module>
# ----> 1 orange.intersection(lemon)

# AttributeError: 'list' object has no attribute 'intersection'


board={
  (0,0): 'X',
  (0,1): None,
  (0,2):'0',
  (1,0):'X',
  (1,1):'0'
}