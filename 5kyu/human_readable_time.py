""" Write a function, which takes a non-negative integer (seconds) as input and
returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)"""

def make_readable(seconds):
    hours = seconds / 3600
    minutes = (seconds - (hours * 3600)) / 60
    remaining_seconds = seconds - (hours * 3600) - (minutes * 60)

    return format_num(hours) + ":" + format_num(minutes) + ":" + format_num(remaining_seconds)


def format_num(num):
    if num < 10:
        return "0" + str(num)
    return str(num)


# alternatively:

def make_readableV2(seconds):
    hours = seconds / 3600
    minutes = (seconds - (hours * 3600)) / 60
    remaining_seconds = seconds - (hours * 3600) - (minutes * 60)

    return '%02d:%02d:%02d' % (hours, minutes, remaining_seconds)
