import sqlite3 as sql

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
        return True
    else:
        return False
