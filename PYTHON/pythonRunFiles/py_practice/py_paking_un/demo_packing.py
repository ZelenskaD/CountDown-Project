# # In [4]: names =['charlie', 'lucy']

# # In [5]: name1,name2 = names

# # In [6]: name1
# # Out[6]: 'charlie'

# # In [7]: name2
# # Out[7]: 'lucy'

# # In [8]: point = (100,58)

# # In [9]: x,y = point

# # In [10]: x
# # Out[10]: 100

# # In [11]: y
# # Out[11]: 58

# # In [12]: sorted_scores = [2400, 2350,2100,1960]

# # In [13]: top_score, * scores =sorted_scores

# # In [14]: scores
# # Out[14]: [2350, 2100, 1960]

# # In [15]: sorted_scores
# # Out[15]: [2400, 2350, 2100, 1960]

# # In [16]: first_name = 'Xander'

# # In [17]: initial, *rest = fisrt_name
# # ---------------------------------------------------------------------------
# # NameError                                 Traceback (most recent call last)
# # <ipython-input-17-3cfaa5cdd2a0> in <module>
# # ----> 1 initial, *rest = fisrt_name

# # NameError: name 'fisrt_name' is not defined

# # In [18]: initial, rest* = first_name
# #   File "<ipython-input-18-242b3f579945>", line 1
# #     initial, rest* = first_name
# #                    ^
# # SyntaxError: invalid syntax


# # In [19]: initial, *rest = first_name

# # In [20]: initial
# # Out[20]: 'X'

# # In [21]: rest
# # Out[21]: ['a', 'n', 'd', 'e', 'r']

# # In [22]: point = (40,50,20)

# # In [23]: x,y,z = point

# # In [24]: x
# # Out[24]: 40

# # In [25]: y
# # Out[25]: 50

# # In [26]: z
# # Out[26]: 20

# # In [27]: (x,y,z) = (40,50,20)

# # In [28]: color_pairs =[['red','green'], ['purple','orange']]

# # In [29]: pair1, pair2 = color_pairs

# # In [30]: pair1
# # Out[30]: ['red', 'green']

# # In [31]: pair2
# # Out[31]: ['purple', 'orange']

# # In [32]: ((primary1, secondary1), (primary2, secondary2))=color_pairs

# # In [33]: primary1
# # Out[33]: 'red'

# # In [34]: secondary1
# # Out[34]: 'green'

# # In [35]: primary2
# # Out[35]: 'purple'

# # In [36]: secondary2
# # Out[36]: 'orange'


# In [38]: nums=[2,4,6,8]

# In [39]: [...nums]
#   File "<ipython-input-39-3eef6f574762>", line 1
#     [...nums]
#            ^
# SyntaxError: invalid syntax


# In [40]: [*nums]
# Out[40]: [2, 4, 6, 8]

# In [41]: [-2,0,*nums]
# Out[41]: [-2, 0, 2, 4, 6, 8]

# In [42]: odds =[1,3,5,7,9]

# In [43]: [*odds, *nums]
# Out[43]: [1, 3, 5, 7, 9, 2, 4, 6, 8]

# In [44]: ['hello']
# Out[44]: ['hello']

# In [45]: [*'hello']
# Out[45]: ['h', 'e', 'l', 'l', 'o']

# In [46]: {*'hello'}
# Out[46]: {'e', 'h', 'l', 'o'}

# In [47]: {*'hello', 45}
# Out[47]: {45, 'e', 'h', 'l', 'o'}

# In [48]: rainfall = {'Jan':2.5, 'Feb': 4.9}

# In [49]: {*rainfall}
# Out[49]: {'Feb', 'Jan'}

# In [50]: {'Dec':0.5, *rainfall}

#   File "<ipython-input-50-53b1774cf449>", line 1
#     {'Dec':0.5, *rainfall}
#                 ^
# SyntaxError: invalid syntax


# In [51]:

# In [51]: {'Dec': 0.5,**rainfall}
# Out[51]: {'Dec': 0.5, 'Jan': 2.5, 'Feb': 4.9}

# In [52]: {'Dec':0.5, **rainfall, 'Jan':4.0}
# Out[52]: {'Dec': 0.5, 'Jan': 4.0, 'Feb': 4.9}

# In [53]:

# In [53]: print(2,3,4,5,6)
# 2 3 4 5 6

# In [54]: nums = \[1,2,3,4,5,6,7,8,9]
#   File "<ipython-input-54-dc8ab0ca7980>", line 1
#     nums = \[1,2,3,4,5,6,7,8,9]
#                                ^
# SyntaxError: unexpected character after line continuation character


# In [55]: \print(nums)
#   File "<ipython-input-55-ac8ae7ea3792>", line 1
#     \print(nums)
#                 ^
# SyntaxError: unexpected character after line continuation character


# In [56]: print(nums)
# [2, 4, 6, 8]

# In [57]: print(*nums)
# 2 4 6 8

# In [58]: print(*'hello')
# h e l l o