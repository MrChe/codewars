def sum_factorial(lst):
    return sum(find_factorial(x) for x in lst)


def sum_factorialV2(lst):
    sum = 0
    for fact in lst:
        sum += find_factorial(fact)
    return sum


def find_factorial(num):
    if num == 0:
        return 1
    return num * find_factorial(num - 1)
