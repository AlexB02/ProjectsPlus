import os
import hashlib

salt = os.urandom(32)
key = hashlib.pbkdf2_hmac('sha256', "a".encode('utf-8'), salt, 400000)
print(salt+key)
