# Check to see if a string has the same amount of 'x's and 'o's. The method
# must return a boolean and be case insensitive. The string can contain any char.


def xo(s):
    xCount = 0;
    oCount = 0;

    for char in s.lower():
        if char == "x":
            xCount += 1;
        elif char == "o":
            oCount += 1;

    return xCount == oCount


# alternatively:

def xo(s):
    return s.lower().count("x") == s.lower().count("o")
