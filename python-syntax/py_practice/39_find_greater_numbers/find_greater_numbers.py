def find_greater_numbers(nums):
    """Return # of times a number is followed by a greater number.

    For example, for [1, 2, 3], the answer is 3:
    - the 1 is followed by the 2 *and* the 3
    - the 2 is followed by the 3

    Examples:

        >>> find_greater_numbers([1, 2, 3])
        3

        >>> find_greater_numbers([6, 1, 2, 7])
        4

        >>> find_greater_numbers([5, 4, 3, 2, 1])
        0

        >>> find_greater_numbers([])
        0
    """
    count = 0  # Initialize a counter to keep track of occurrences
    # Iterate over each number using its index
    for i in range(len(nums)):
        # For each number, compare it with every number that comes after it
        for j in range(i + 1, len(nums)):
            if nums[i] < nums[j]:  # Check if the current number is less than the following number
                count += 1  # If so, increment the count
    return count  # Return the total count of such instances