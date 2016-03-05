"""Given an array of integers, remove the smallest value. If there are multiple
 elements with the same value, remove the one with a lower index. If you get an
 empty array/list, return an empty array/list.
Don't change the order of the elements that are left. """


def remove_smallest(numbers):
    if not numbers:
        return []

    smallest = min(numbers)
    index = numbers.index(smallest)
    numbers.pop(index)
    return numbers

# alernatively:

def remove_smallest(numbers):
    if not numbers:
        return []
    numbers.remove(min(numbers))
    return numbers
