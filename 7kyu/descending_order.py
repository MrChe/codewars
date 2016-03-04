"""Your task is to make a function that can take any non-negative integer as a
 argument and return it with it's digits in descending order. Descending order
means that you take the highest digit and place the next highest digit
immediately after it."""

def Descending_Order(num):
    num_list = []
    for index in range(len(str(num))):
        num_list.append(str(num)[index])

    sorted_list = sorted(num_list, reverse=True)
    sorted_string = ''.join(sorted_list)

    return int(sorted_string)
