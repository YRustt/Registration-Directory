import os
import string
import random
import functools


def rename(path):
    """
    Rename file on save.

    :param path: the path to the file.
    :return: random file name.
    """

    @functools.wraps(rename)
    def wrapper(instance, filename):
        ext = filename.split(".")[-1]
        letters = string.ascii_letters
        filename = "{0}.{1}".format("".join(random.sample(letters, 50)), ext)

        return os.path.join(path, filename)

    return wrapper
