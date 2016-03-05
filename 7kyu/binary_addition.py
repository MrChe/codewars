# Implement a function that successfully adds two numbers together and returns
# their solution in binary. The conversion can be done before, or after the
# addition of the two.
# The binary number returned should be a string!

def add_binary(a, b):
    return bin(a + b)[2:]

# alternatively:

def add_binary(a, b):
    sum = a + b
    binary_string = ""
    while sum > 0:
        binary_string += str(sum % 2)
        sum = sum / 2
    return binary_string[::-1]
