""" Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and
returns the same string with all even indexed characters in each word upper cased,
and all odd indexed characters in each word lower cased. The indexing just
explained is zero based, so the zero-ith index is even, therefore that character
should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' ').
Spaces will only be present if there are multiple words. Words will be separated
by a single space(' ').

Examples:
to_weird_case('String'); # => returns 'StRiNg'
to_weird_case('Weird string case') # => returns 'WeIrD StRiNg CaSe' """


def to_weird_case(string):
    words = string.split(" ")
    weird_words = [make_weird_word(word) for word in words]
    return " ".join(weird_words)


def make_weird_word(word):
    weird_word = ""
    for index in range(0, len(word)):
        if index % 2 == 0:
            weird_word += word[index].upper()
        else:
            weird_word += word[index].lower()

    return weird_word
