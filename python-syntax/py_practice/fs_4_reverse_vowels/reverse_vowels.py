def reverse_vowels(s):
    """Reverse vowels in a string.

    Characters which re not vowels do not change position in string, but all
    vowels (y is not a vowel), should reverse their order.

    >>> reverse_vowels("Hello!")
    'Holle!'

    >>> reverse_vowels("Tomatoes")
    'Temotaos'

    >>> reverse_vowels("Reverse Vowels In A String")
    'RivArsI Vewols en e Streng'

    reverse_vowels("aeiou")
    'uoiea'

    reverse_vowels("why try, shy fly?")
    'why try, shy fly?''
    """
    vowels = 'aeiouAEIOU'
    found_vowels = [char for char in s if char in vowels]
    found_vowels.reverse()

    result = list(s)
    vowel_index = 0

    for i in range(len(result)):
        if result[i] in vowels:
            
            result[i] = found_vowels[vowel_index]
            vowel_index += 1


    return ''.join(result)