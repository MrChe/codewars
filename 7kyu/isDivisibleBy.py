def is_divisible(*args):
    first = args[0]
    for i in range(1, len(args)):
        if first % args[i] != 0:
            return False
    return True
    
