"""Create a function named divisors that takes an integer and returns an array
with all of the integer's divisors(except for 1 and the number itself).
If the number is prime return the string '(integer) is prime'."""

def divisors(integer):
    divisors = [num for num in range(2, int(integer / 2) + 1) if integer % num == 0]

    if not len(divisors):
        return "%d is prime" % integer
    return divisors


def divisorsV2(integer):
    divisors = []
    for num in range(2, int(integer / 2) + 1):
        if integer % num == 0:
            divisors.append(num)

    if not len(divisors):
        return "%d is prime" % integer

    return divisors
