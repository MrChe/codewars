# You are given a 2D array, composed of a colour and its 'common' association
# in each array element. The function you will write needs to return the colour
# as 'key' and association as its 'value'.


def colour_association(arr):
    colourPairArr = [];
    for pair in arr:
        dict = {};
        dict[pair[0]] = pair[1]
        colourPairArr.append(dict)
    return colourPairArr


def colour_association(arr):
   return [{pair[0]: pair[1]} for pair in arr]


def colour_association(arr):
    return [{key: value} for key, value in arr]
