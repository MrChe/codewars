"""Create a function that accepts dimensions, of Rows x Columns, as parameters
in order to create a multiplication table sized according to the given
dimensions. **The return value of the function must be an array, and the numbers
must be Fixnums, NOT strings.

Example:
multiplication_table(3,3)

1 2 3
2 4 6
3 6 9
-->[[1,2,3],[2,4,6],[3,6,9]]"""


def multiplication_table(row, col):
    table = []
    for num in range(1, row + 1):
        row = []
        for colum in range(1, col + 1):
            row.append(num * colum)
        table.append(row)
    return table


def multiplication_tableV2(row, col):
    table = []
    for num in range(1, row + 1):
        table.append([num * column for column in range(1, col + 1)])
    return table


def multiplication_tableV3(row, col):
    return [[num * column for column in range(1, col+1)] for num in range(1, row+1)]
