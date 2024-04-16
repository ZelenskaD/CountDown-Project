def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase.

        >>> multiple_letter_count('yay')
        {'y': 2, 'a': 1}

        >>> multiple_letter_count('Yay')
        {'Y': 1, 'a': 1, 'y': 1}
    """

    my_dict={}
    
    for char in phrase:
        if char in my_dict:
            my_dict[char]+= 1
        else:
            my_dict[char]=1

    return my_dict