import sqlite3 as sql
import os
import hashlib

def connect():

    conn = sql.connect('sqlite3/main.db')
    c = conn.cursor()
    c.execute("PRAGMA foreign_keys = ON")
    create(c)
    conn.commit()
    conn.close()

def create(c):
    try:

        c.execute("""CREATE TABLE IF NOT EXISTS members (
                    id integer PRIMARY KEY,
                    firstname text,
                    lastname text,
                    email text,
                    passwordhash text
        )""")

    except:
        print("Create member table error")
        pass

    try:
        c.execute("""CREATE TABLE IF NOT EXISTS skillslist (
                    id integer PRIMARY KEY,
                    title text
        )""")

    except:
        print("Create skillslist table error")
        pass

    try:
        c.execute("""CREATE TABLE IF NOT EXISTS efficiencylist (
                    date text,
                    time text,
                    efficiency real,
                    FOREIGN KEY(memberid) REFERENCES members(id),
                    FOREIGN KEY(skillid) REFERENCES skillslist(id),
                    PRIMARY KEY (memberid, skillid, date, time)
        )""")

    except:
        print("Create efficiencylist table error")
        pass

def recordExists(email):
    conn = sql.connect('sqlite3/main.db')
    c = conn.cursor()

    c.execute("""SELECT email FROM members WHERE email=?""",(email,))

    if c.fetchone():
        c.close()
        return True
    else:
        return False

def getStoredPassword(email):
    conn = sql.connect('sqlite3/main.db')
    c = conn.cursor()

    c.execute("""SELECT passwordhash FROM members WHERE email=?""",(email,))

    return c.fetchall()

def hashpassword(password):
    salt = os.urandom(32)
    key = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt, 400000)
    return salt+key

def addUser(firstname,lastname,email,password):

    conn = sql.connect('sqlite3/main.db')
    c = conn.cursor()

    salt = os.urandom(32)
    print("Actual salt: "+str(salt))
    key = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt, 400000)

    store = salt+key

    if (recordExists(email)):
        try:
            c.execute("""update members
                        set passwordhash=?
                        where email=?
            """,(store,email,))
        except:
            print("Failed to update login information")
    else:
        try:
            c.execute("""insert into members (id,firstname,lastname,email,passwordhash) values (NULL,?,?,?,?)""",(firstname,lastname,email,store,))
        except:
            print("Failed to add user")

    conn.commit()
    conn.close()
