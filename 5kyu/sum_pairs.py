""" Given a list of integers and a single sum value, return the first two values
(parse from the left please) in order of appearance that add up to form the sum.

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements.
Be sure your code doesn't time out."""


def sum_pairs(ints, s):
    seen_nums = {}

    for num in range(len(ints)):
        match = s - ints[num]
        if match in seen_nums:
            return [match, ints[num]]
        seen_nums[ints[num]] = True

    return None

# alternatively (worse runtime):

def sum_pairsV2(ints, s):
    lastIndex = len(ints)
    pair = None

    for num in range(len(ints)):
        for next_num in range(num + 1, len(ints)):
            if ints[num] + ints[next_num] == s and next_num < lastIndex:
                pair = [ints[num], ints[next_num]]
                lastIndex = next_num
    return pair

# first version refactored:

def sum_pairs(ints, s):
    seen_nums = set()

    for num in ints:
        match = s - num
        if match in seen_nums:
            return [match, num]
        else:
            seen_nums.add(num)
