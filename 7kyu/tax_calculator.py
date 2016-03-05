""" Write a function to calculate compound tax using the following table:

For $10 and under, the tax rate should be 10%.
For $20 and under, the tax rate on the first $10 is %10, and the tax on the rest is 7%.
For $30 and under, the tax rate on the first $10 is still %10, the rate for the
    next $10 is still 7%, and everything else is 5%.
Tack on an additional 3% for the portion of the total above $30.
Return 0 for invalid input(anything that's not a positive real number). """


def tax_calculator(total):
    if total <= 0 or (type(total) != int and type(total) != float):
        return 0
    elif total <= 10:
        return round(total * .10, 2)
    elif total <= 20:
        tax = 1 + (total - 10) * .07
        return round(tax, 2)
    elif total <= 30:
        tax = 1.7 + (total - 20) * .05
        return round(tax, 2)
    elif total > 30:
        tax = 2.2 + (total - 30) * .03
        return round(tax, 2)
    else:
        return 0
