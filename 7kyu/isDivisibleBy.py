# Create a function isDivisible(n,...) that checks if the first argument n is divisible by all other arguments
# (return true if no other arguments)

def is_divisible(*args):
    first = args[0]
    for i in range(1, len(args)):
        if first % args[i] != 0:
            return False
    return True
