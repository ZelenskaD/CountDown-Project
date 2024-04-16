def valid_parentheses(parens):
    """Are the parentheses validly balanced?

        >>> valid_parentheses("()")
        True

        >>> valid_parentheses("()()")
        True

        >>> valid_parentheses("(()())")
        True

        >>> valid_parentheses(")()")
        False

        >>> valid_parentheses("())")
        False

        >>> valid_parentheses("((())")
        False

        >>> valid_parentheses(")()(")
        False
    """

    balance =0

    # Loop through each character in the string
    for char in parens:
        if char == '(':
            balance += 1  # Increment for an open parenthesis
        elif char == ')':
            balance -= 1  # Decrement for a close parenthesis
            if balance < 0:
                # If balance goes negative, there's a close without an open
                return False
    
    # If the balance is zero, all parentheses are matched
    return balance == 0