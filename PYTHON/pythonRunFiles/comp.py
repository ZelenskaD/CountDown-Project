# nums=[1,2,3,4,5,6,7,8,9,11,12,13]

# evens =[]
# for num in nums:
#   if num%2==0:
#     evens.append(num)

# print(evens)

# evens = [num for num in nums if num%2==0]

# odds = [num for num in nums if num%2==1]

# [num*2 for num in nums]

# new_list =[]
# for num in nums:
#     new_list.append(num*2)

# ['HIII' for num in nums]

# [what_to_append for thing in list]


# [n*n for n in[2,4,6,8]]

# [char.upper()+'.' for char in 'lmfao']

# [num/2 for num in range (10,20)]

# [x for x in range(3)]
# [[] for x in range(3)]
# [[for x in range(3)] for x in range(3)]



# def gen_board(size, initial_val=None):
#     return[[initial_val for x in range(size)] for x in range of(size)]



# chickens = [
#     {"name": "Clucky", "sex": "Hen"},
#     {"name": "Peck", "sex": "Rooster"},
#     {"name": "Nugget", "sex": "Hen"},
#     {"name": "Colonel", "sex": "Rooster"},
#     {"name": "Fluffy", "sex": "Hen"},
#     {"name": "Speckle", "sex": "Rooster"}
# ]

# hens =[bird["name"] for bird in chickens if bird["sex"]=='Hen']

# scores =[55,89,99,87,60,70,74,50,76,90,82]

# # ['FAIL','PASS']
# # grades=['PASS' for score in scores if score >=70]
# grades=['PASS' if score >=70 else "FAIL" for score in scores]
# # [do_this if something else do this for thing in things]


def get_letter(ltr):    
    morse_lookup = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 
        'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
        'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
        'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
        'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..',
        '1': '.----', '2': '..---', '3': '...--', '4': '....-',
        '5': '.....', '6': '-....', '7': '--...', '8': '---..',
        '9': '----.', '0': '-----'}
    return morse_lookup.get(ltr.upper(), '')

msg = [get_letter(char) for char in 'SOS']


def get_morse_code (phrase):
    return " ".join([get_letter(char) for char in phrase])


In [372]:  {day for day in 'MTWRFSU'}
Out[372]: {'F', 'M', 'R', 'S', 'T', 'U', 'W'}

In [373]:  {day:0  for day in 'MTWRFSU'}
Out[373]: {'M': 0, 'T': 0, 'W': 0, 'R': 0, 'F': 0, 'S': 0, 'U': 0}

In [374]: {2: 4, 3: 9}
Out[374]: {2: 4, 3: 9}

In [375]: {num: num*num for num in range(1,10)}
Out[375]: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}

In [376]: {num: num*num for num in range(1,10) if num%2==0}
Out[376]: {2: 4, 4: 16, 6: 36, 8: 64}

In [377]:
In [377]: {char for char in'abracadabra'}
Out[377]: {'a', 'b', 'c', 'd', 'r'}

In [378]: {char for char in "hello darkness my old friend'}
  File "<ipython-input-378-a454ed7f5ed6>", line 1
    {char for char in "hello darkness my old friend'}
                                                     ^
SyntaxError: EOL while scanning string literal


In [379]: {char for char in "hello darkness my old friend"}
Out[379]: {' ', 'a', 'd', 'e', 'f', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'r', 's', 'y'}

In [380]: {char for char in "hello darkness my old friend" if char in 'aeiou'}
Out[380]: {'a', 'e', 'i', 'o'}

In [381]: {char for char in "hello darkness my old friend" if char not in 'aeiou'}
Out[381]: {' ', 'd', 'f', 'h', 'k', 'l', 'm', 'n', 'r', 's', 'y'}