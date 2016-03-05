""" Jaden Smith, the son of Will Smith, is the star of films such as The Karate
Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy
that he delivers via Twitter. When writing on Twitter, he is known for almost
always capitalizing every word.

Your task is to convert strings to how they would be written by Jaden Smith.
The strings are actual quotes from Jaden Smith, but they are not capitalized in
the same way he originally typed them."""


def toJadenCase(string):
    words = string.split(" ")
    jaden_cased = []

    for word in words:
        title_cased = word[0].upper() + word[1:]
        jaden_cased.append(title_cased)

    return " ".join(jaden_cased)

# alternatively:

def toJadenCase(string):
  capitalized_words = [word.capitalize() for word in string.split(" ")]
  return " ".join(capitalized_words)
