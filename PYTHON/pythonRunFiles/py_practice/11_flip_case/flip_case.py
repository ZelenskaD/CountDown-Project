def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
    to_swap_lower = to_swap.lower()
    to_swap_upper = to_swap.upper()
    
    # Iterate over each character in the phrase and flip the case if it matches to_swap
    flipped = ''.join(
        char.swapcase() if char == to_swap_lower or char == to_swap_upper else char
        for char in phrase
    )
    
    return flipped
