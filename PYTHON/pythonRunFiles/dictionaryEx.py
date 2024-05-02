chicken ={'name': 'lady gray', 'breed':'Silkie', 'total_egg_count':12,
'egg_chart':{
  'M':True,
  'T': True,
  'W':True,
  'TH': True,
  'F': True,
  'S':False,
  'SU':True
},
'coop_mates': ['Butters', 'Stevie','Henry']
}

# for key in chicken.keys():
#   print(key)

# for value in chicken.values():
#   print(value)

# for pair in chicken.items():
#   print(pair)

# for (k,v)in chicken.items():
#   print(k,'--->', v)

========================================+DICTIONARIES METHODS+=================================

========================================COPY=================================

========================================GET=================================
========================================RETURN  ITERABLE OF  ITEMS=================================
========================================RETURN  ITERABLE OF KEYS=================================
========================================RETURN ITERABLE OF VALUES=================================
In [212]: chicken
Out[212]:
{'name': 'lady gray',
 'breed': 'Silkie',
 'total_egg_count': 12,
 'egg_chart': {'M': True,
  'T': True,
  'W': True,
  'TH': True,
  'F': True,
  'S': False,
  'SU': True},
 'coop_mates': ['Butters', 'Stevie', 'Henry']}

In [213]: chicken['sex']
---------------------------------------------------------------------------
KeyError                                  Traceback (most recent call last)
<ipython-input-213-a0179e034ec5> in <module>
----> 1 chicken['sex']

KeyError: 'sex'

In [214]: chicken..get('sex')
  File "<ipython-input-214-d7eb871ae436>", line 1
    chicken..get('sex')
            ^
SyntaxError: invalid syntax


In [215]: chicken.get('sex','unsexed')
Out[215]: 'unsexed'

In [216]: chicken['sex']
---------------------------------------------------------------------------
KeyError                                  Traceback (most recent call last)
<ipython-input-216-a0179e034ec5> in <module>
----> 1 chicken['sex']

KeyError: 'sex'

In [217]: chicken['sex']='Hen'

In [218]: chicken.get('sex','unsexed')
Out[218]: 'Hen'

In [219]: chicken.values()
Out[219]: dict_values(['lady gray', 'Silkie', 12, {'M': True, 'T': True, 'W': True, 'TH': True, 'F': True, 'S': False, 'SU': True}, ['Butters', 'Stevie', 'Henry'], 'Hen'])

In [220]: chicken.keys()
Out[220]: dict_keys(['name', 'breed', 'total_egg_count', 'egg_chart', 'coop_mates', 'sex'])

In [221]: keys = list(chicken.keys())

In [222]: keys.sort()

In [223]: keys
Out[223]: ['breed', 'coop_mates', 'egg_chart', 'name', 'sex', 'total_egg_count']

In [224]: list(chicken.items())
Out[224]:
[('name', 'lady gray'),
 ('breed', 'Silkie'),
 ('total_egg_count', 12),
 ('egg_chart',
  {'M': True,
   'T': True,
   'W': True,
   'TH': True,
   'F': True,
   'S': False,
   'SU': True}),
 ('coop_mates', ['Butters', 'Stevie', 'Henry']),
 ('sex', 'Hen')]

In [225]: [1,2,3].copy()
Out[225]: [1, 2, 3]

In [226]: nuggets = chicken

In [227]: nuggets
Out[227]:
{'name': 'lady gray',
 'breed': 'Silkie',
 'total_egg_count': 12,
 'egg_chart': {'M': True,
  'T': True,
  'W': True,
  'TH': True,
  'F': True,
  'S': False,
  'SU': True},
 'coop_mates': ['Butters', 'Stevie', 'Henry'],
 'sex': 'Hen'}

In [228]: nuggets is chicken
Out[228]: True

In [229]: nuggets = chicken.copy()

In [230]: nugget
---------------------------------------------------------------------------
NameError                                 Traceback (most recent call last)
<ipython-input-230-614ea9ec8056> in <module>
----> 1 nugget

NameError: name 'nugget' is not defined

In [231]: nuggets
Out[231]:
{'name': 'lady gray',
 'breed': 'Silkie',
 'total_egg_count': 12,
 'egg_chart': {'M': True,
  'T': True,
  'W': True,
  'TH': True,
  'F': True,
  'S': False,
  'SU': True},
 'coop_mates': ['Butters', 'Stevie', 'Henry'],
 'sex': 'Hen'}

In [232]: nuggets == chicken
Out[232]: True

In [233]: nuggets is chicken
Out[233]: False

In [234]: nuggets ['egg_chart']
Out[234]:
{'M': True,
 'T': True,
 'W': True,
 'TH': True,
 'F': True,
 'S': False,
 'SU': True}

In [235]: nuggets['egg_chart'] is chicken['egg_chart']
Out[235]: True

In [236]: help(dict.pop)


In [237]: chicken.pop('name')
Out[237]: 'lady gray'

In [238]: chicken
Out[238]:
{'breed': 'Silkie',
 'total_egg_count': 12,
 'egg_chart': {'M': True,
  'T': True,
  'W': True,
  'TH': True,
  'F': True,
  'S': False,
  'SU': True},
 'coop_mates': ['Butters', 'Stevie', 'Henry'],
 'sex': 'Hen'}

In [239]: chicken.popitem()
Out[239]: ('sex', 'Hen')


In [242]: {}.fromkeys('MTWHF', True)
Out[242]: {'M': True, 'T': True, 'W': True, 'H': True, 'F': True}

In [243]: chicken
Out[243]:
{'breed': 'Silkie',
 'total_egg_count': 12,
 'egg_chart': {'M': True,
  'T': True,
  'W': True,
  'TH': True,
  'F': True,
  'S': False,
  'SU': True},
 'coop_mates': ['Butters', 'Stevie', 'Henry']}

In [244]: chicken.fromkeys('MTWHF', True)
Out[244]: {'M': True, 'T': True, 'W': True, 'H': True, 'F': True}

In [245]: chicken.clear()

In [246]: chicken
Out[246]: {}

In [247]: chicken['color']='gray'

In [248]: chiicken
---------------------------------------------------------------------------
NameError                                 Traceback (most recent call last)
<ipython-input-248-9cf29d400a8b> in <module>
----> 1 chiicken

NameError: name 'chiicken' is not defined

In [249]: chicken
Out[249]: {'color': 'gray'}



======================================================SET==========================
In [251]: languages ={'ruby','python','js'}

In [252]: languages
Out[252]: {'js', 'python', 'ruby'}

In [253]: type(languages)
Out[253]: set

In [254]: voted_languages=['ruby', 'python','js','scala','ruby','python','scala','python']

In [255]: set(voted_languages)
Out[255]: {'js', 'python', 'ruby', 'scala'}

In [256]: set('#$%^@&!*_*')
Out[256]: {'!', '#', '$', '%', '&', '*', '@', '^', '_'}

In [257]: things ={2,'snake', 'mario', True, [1,2,3]}
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-257-074ced2e79a5> in <module>
----> 1 things ={2,'snake', 'mario', True, [1,2,3]}

TypeError: unhashable type: 'list'

In [258]:  things ={2,'snake', 'mario', True}

In [259]:

In [259]: things
Out[259]: {2, True, 'mario', 'snake'}

In [260]: languages
Out[260]: {'js', 'python', 'ruby'}

In [261]: 'scala' in languages
Out[261]: False

In [262]: 'js' in languages
Out[262]: True

In [263]: languages.add('scala')

In [264]: languages
Out[264]: {'js', 'python', 'ruby', 'scala'}

In [265]: languages.pop()
Out[265]: 'scala'

In [266]: things
Out[266]: {2, True, 'mario', 'snake'}

In [267]: languages
Out[267]: {'js', 'python', 'ruby'}

In [268]: languages.pop()
Out[268]: 'python'

In [269]: languages
Out[269]: {'js', 'ruby'}

In [270]: languages.remove('python')
---------------------------------------------------------------------------
KeyError                                  Traceback (most recent call last)
<ipython-input-270-7b6e315f2b6c> in <module>
----> 1 languages.remove('python')

KeyError: 'python'

In [271]: languages.add('java')

In [272]: languages.add('C')

In [273]: languages
Out[273]: {'C', 'java', 'js', 'ruby'}

In [274]: languages.remove('ruby')

In [275]: languages
Out[275]: {'C', 'java', 'js'}

In [276]: copy = languages

In [277]: copy == languages
Out[277]: True

In [278]: copy is languages
Out[278]: True

In [279]: copy = languages.copy ()

In [280]: copy == languages
Out[280]: True

In [281]: copy is languages
Out[281]: False

In [282]: {1,2,3,{1,2,3}}
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-282-60b2fac40e3a> in <module>
----> 1 {1,2,3,{1,2,3}}

TypeError: unhashable type: 'set'

In [283]: 