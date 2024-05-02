# age = 19
# guests =0

# if age >=18:
#   print("You can come in!")
#   guests += 1



# age = 19
# isBirthday = True

# if age >= 21:
#     print("YOU CAN DRINK!")
#     if isBirthday:
#       print("Happy Birthday, HERE IS A FREE MARTINI!")
# elif age>=18:
#     print("YOU CAN COME IN BUT NO DRINKING!")
#     if isBirthday:
#       print("Happy Birthday, HERE IS A FREE APPLE JUICE!")
# else:

#   print("SORRY GO HOME KID!")


#   #  do_if_true if CONDITION else do_if_else


# num = 0
# while num <=100:
#     if num == 50:
#         break
#     print(num)
#     num += 10 #can't do ++ --

# print ("ALL DONE!")

# guess = input("enter your guess")

# target = 37
# guess = None

# while guess != target:
#     guess = input("Please enter a guess...")
#     if guess == 'q' or guess == 'quit':
#         break
#     guess = int(guess)

# print("ALL DONE!")

# for (let i=10: i<50; i++){

# }does not work this way

# colors = ['red', 'orange','yellow','blue']
# for color in colors:
#     print(color)

# for char in "ABCDEFGHYKLMNOP":
#         print(char)

# FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++

# def greet(person):
#     return f"Hello there, {person}"

# def divide (a, b):
#     if type(a) is int and type(b) is int:
#         return a/b
#     return 'a and b must be integers!'


# def three_things(a,b,c):
#     print('HI!')

# def send_email(to_email, from_email, subject, body):
#     email = f"""
#         to:{to_email}
#         from:{from_email}
#         subject:{subject}
#         -----------------------
#         body:{body}
#     """
#     print(email)


# send_email(subject ="MEOW", to_email="bleu@gmail.com", from_email="dahs@humnas.com", body="Dahsa shgaifhiwiqjf!")

# function power(x, y=2)//default value

# def power (num, power=2):
#     return num ** power

# vegan_no_nos = ['eggs', 'meat', 'milk', 'fish', 'figs']
# pie_ingredients = ['flour','eggs', 'apples','sugar','salt']

# for food in pie_ingredients:
#     if food in vegan_no_nos:
#         print(f"OHH NO,CANNOT EAT {food}!ITS NOT VEGAN!")
#     else:
#         print(f"YUM, I LOVE {food}!")
    



# ==================== CORE API // METHODS

#  chickens.append('henry')// add (push in JS)

# chickens = ['butters', 'lady gray', 'stevie chicks', 'henry']

# =======COPY========
# In [53]: copy_flock = chickens

# In [54]: copy_flock.append('lucy')

# In [55]: copy_flock
# Out[55]: ['butters', 'lady gray', 'stevie chicks', 'henry', 'lucy']

# In [56]: chickens
# Out[56]: ['butters', 'lady gray', 'stevie chicks', 'henry', 'lucy']

# In [57]: copy_flock = chickens.copy

# In [58]: copy_flock is chickens
# Out[58]: False

# ======= COUNT======
# In [63]: chickens.count('butters')
# Out[63]: 1

# In [64]: chickens.append('butters')

# In [65]: chickens.count('butters')
# Out[65]: 2
# ======ADD ONE LIST TO ANOTHER=====
# In [66]: chicks =['herbert', 'annabelle']

# In [67]: chickens
# Out[67]: ['butters', 'lady gray', 'stevie chicks', 'henry', 'lucy', 'rpomeo', 'butters']

# In [68]: chicks
# Out[68]: ['herbert', 'annabelle']

# In [69]: chickens.extend(chicks)

# In [70]: chickens
# Out[70]:
# ['butters',
#  'lady gray',
#  'stevie chicks',
#  'henry',
#  'lucy',
#  'rpomeo',
#  'butters',
#  'herbert',
#  'annabelle']
# ====== FIND INDEX =====
# In [71]: 'henry' in chickens
# Out[71]: True

# In [72]: chickens.index('henry')
# Out[72]: 3

# In [73]: chickens
# Out[73]:
# ['butters',
#  'lady gray',
#  'stevie chicks',
#  'henry',
#  'lucy',
#  'rpomeo',
#  'butters',
#  'herbert',
#  'annabelle']
# ==============ADDS TO THE START NOT REPLACE=======
# In [75]: chickens.insert(0, 'tina')

# In [76]: chickens
# Out[76]:
# ['tina',
#  'butters',
#  'lady gray',
#  'stevie chicks',
#  'henry',
#  'lucy',
#  'rpomeo',
#  'butters',
#  'herbert',
#  'annabelle']

# In [77]: chickens.insert(9, ['harry', 'hermione'])

# In [78]: chickens
# Out[78]:
# ['tina',
#  'butters',
#  'lady gray',
#  'stevie chicks',
#  'henry',
#  'lucy',
#  'rpomeo',
#  'butters',
#  'herbert',
#  ['harry', 'hermione'],
#  'annabelle']
# === LAST ELEMENT+======
# In [79]: chickens.pop()
# Out[79]: 'annabelle'

# In [80]: chickens.pop(0)//remove el
# Out[80]: 'tina'

# In [81]: chickens
# Out[81]:
# ['butters',
#  'lady gray',
#  'stevie chicks',
#  'henry',
#  'lucy',
#  'rpomeo',
#  'butters',
#  'herbert',
#  ['harry', 'hermione']]
# =====REVERSE=======
# In [82]: chickens.reverse()

# In [83]: chickens
# Out[83]:
# [['harry', 'hermione'],
#  'herbert',
#  'butters',
#  'rpomeo',
#  'lucy',
#  'henry',
#  'stevie chicks',
#  'lady gray',
#  'butters']

# ============SORT=============
# In [89]: chickens.sort(key=lambda x: x[0])

# In [90]: chickens
# Out[90]:
# ['butters',
#  'butters',
#  'herbert',
#  'henry',
#  ['harry', 'hermione'],
#  'lucy',
#  'lady gray',
#  'rpomeo',
#  'stevie chicks']


# In [93]: nums = [45,62,33,12,1,-9,-99,0,1234]

# In [94]: nums.sort()

# In [95]: nums
# Out[95]: [-99, -9, 0, 1, 12, 33, 45, 62, 1234]


# In [96]: nums.sort(reverse=True)

# In [97]: nums
# Out[97]: [1234, 62, 45, 33, 12, 1, 0, -9, -99]

==========STRINGS METHODS=======
# In [100]: price = 3.50

# In [101]: qty = 7

# In [102]: print(f"Your total is {price *qty}")
# Your total is 24.5

# In [103]: print(f"Your total is$ {price *qty}")
# Your total is$ 24.5

# In [104]: str(5.6)
# Out[104]: '5.6'

# In [105]: nums = [3,4,5]

# In [106]: str(nums)
# Out[106]: '[3, 4, 5]'

# In [107]: 3 in nums
# Out[107]: True
# In [112]: price[0] = '#'
# ---------------------------------------------------------------------------
# TypeError                                 Traceback (most recent call last)
# <ipython-input-112-c7df9f0e1f42> in <module>
# ----> 1 price[0] = '#'

# TypeError: 'str' object does not support item assignment


# In [113]: '#' + 'asd'
# Out[113]: '#asd'

# In [114]: '!' *10
# Out[114]: '!!!!!!!!!!'
# In [115]: msg = 'hcehlilcok!e!n'

# In [116]: msg
# Out[116]: 'hcehlilcok!e!n'

# In [117]: msg[0]
# Out[117]: 'h'

# In [118]: len(msg)
# Out[118]: 14

# In [119]: msg[14]
# ---------------------------------------------------------------------------
# IndexError                                Traceback (most recent call last)
# <ipython-input-119-b9939738769d> in <module>
# ----> 1 msg[14]

# IndexError: string index out of range

# In [120]: msg[13]
# Out[120]: 'n'

# In [121]: msg[5]
# Out[121]: 'i'

# In [122]: msg[5:]
# Out[122]: 'ilcok!e!n'

# In [123]: msg[0:5]
# Out[123]: 'hcehl'

# In [124]: msg[::2]
# Out[124]: 'hello!!'
# In [125]: msg[1::2]
# Out[125]: 'chicken'




# ===ITERATING THROUGHT======
# In [132]: for char in msg:
#      ...:     print("This is letter: "+char)
#      ...:
# This is letter: h
# This is letter: c
# This is letter: e
# This is letter: h
# This is letter: l
# This is letter: i
# This is letter: l
# This is letter: c
# This is letter: o
# This is letter: k
# This is letter: !
# This is letter: e
# This is letter: !
# This is letter: n


# ========STR METHODS======
#                                 ========COUNT========STARTSWITH ENDSWITH =====
#                                 In [135]: msg
# Out[135]: 'hcehlilcok!e!n'

# In [136]: msg.count('h')
# Out[136]: 2

# In [137]: msg.count('H')
# Out[137]: 0

# In [138]: msg.endswith('n')
# Out[138]: True

# In [139]: msg.startswith('m')
# Out[139]: False

# In [140]: msg.startswith('h')
# Out[140]: True

# In [141]: person = "Mr. Jones"

# In [142]: person.startswith('M')
# Out[142]: True


#                                     =====FIND=======
# In [143]: person.find('.')
# Out[143]: 2

# In [144]: msg.find(!)
#   File "<ipython-input-144-f8bf9b3a472e>", line 1
#     msg.find(!)
#              ^
# SyntaxError: invalid syntax


# In [145]: msg.find('!')
# Out[145]: 10

# In [146]: msg.find('!e!')
# Out[146]: 10

# In [147]: person.find('Mr')
# Out[147]: 0

# In [148]: person.find('?')//doesnt have
# Out[148]: -1

#                                     ========ISDIGIT=======
# In [149]: 'hello4'.isdigit()
# Out[149]: False

# In [150]: '42'.isdigit()
# Out[150]: True


#                                     ========JOIN=======
# In [158]: ".".join("LOL")
# Out[158]: 'L.O.L'

#                                     ========LOWER=======
# In [159]: "LOL".lower()
# Out[159]: 'lol'

# In [160]: "lollosAS".upper()
# Out[160]: 'LOLLOSAS'

#                                     ========REPLACE=======
#  In [164]: things = 'apples-tomatoe-pickles'

# In [165]: things.replace('-', ',')
# Out[165]: 'apples,tomatoe,pickles'

# In [166]: things
# Out[166]: 'apples-tomatoe-pickles'

# In [167]: things.replace('-', '=', 1)
# Out[167]: 'apples=tomatoe-pickles'

# In [168]: text = "I hate you so much"

# In [169]:

# In [169]: text.replace('hate', 'love')
# Out[169]: 'I love you so much'

# In [170]: tweet = "YOLO hahah omg #YOLO"

# In [171]: tweet.replace('YOLO', '')
# Out[171]: ' hahah omg #'




#                                     ========SPLIT=======
# In [172]: animals = "goats, chickens, ducks, pigs, alpacas"

# In [173]: animals.split(',')
# Out[173]: ['goats', ' chickens', ' ducks', ' pigs', ' alpacas']

# In [174]: list('YOLO')
# Out[174]: ['Y', 'O', 'L', 'O']


#                                     ========SPLIT LINES=======
# In [176]: """
#      ...: Hello
#      ...: World
#      ...: Let's
#      ...: go!
#      ...: """.splitlines()
# Out[176]: ['', 'Hello', 'World', "Let's", 'go!']

#                                     ========STRIP=======
# In [180]: user_input = '   catlady   '

# In [181]: user_input.strip()
# Out[181]: 'catlady'



                                    ========DICTIONARIES=======

In [183]: chicken = {
     ...: 'name':'Dasha',
     ...: 'age': '25 years',
     ...: 'breed':'pug'
     ...: }

In [184]: stuff = {True: 34, 100: 'AWESOME'}

In [185]: stuff
Out[185]: {True: 34, 100: 'AWESOME'}


In [186]: "age" in chicken
Out[186]: True

In [187]: chicken[age]
---------------------------------------------------------------------------
NameError                                 Traceback (most recent call last)
<ipython-input-187-1cbc9e74f06c> in <module>
----> 1 chicken[age]

NameError: name 'age' is not defined

In [188]: chicken['age']
Out[188]: '25 years'

In [189]: chicken['age']=6

In [190]: chicken
Out[190]: {'name': 'Dasha', 'age': 6, 'breed': 'pug'}

In [191]: chicken.get('weight')

In [192]: chicken.get('weight','2 lbs')// 2 lbs - default value
Out[192]: '2 lbs'

In [197]: dict([[True,0], [False,1]])
Out[197]: {True: 0, False: 1}

