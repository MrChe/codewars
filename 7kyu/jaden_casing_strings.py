

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
  
