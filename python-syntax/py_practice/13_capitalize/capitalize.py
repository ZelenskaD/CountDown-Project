def capitalize(phrase):
    """Capitalize first letter of first word of phrase.

        >>> capitalize('python')
        'Python'

        >>> capitalize('only first word')
        'Only first word'
    """
    return phrase[0].upper() + phrase[1:] #concatenates it with the rest of the string starting from the second character