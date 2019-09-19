import sqlite3 as sql

def connect():

    conn = sql.connect('main.db')
    c = conn.cursor()
    create(c)

def create(c):
    try:
        c.execute("""CREATE TABLE members (id, firstname, lastname, email, passwordhash)""")
    except:
        pass

    try:
        c.execute("""CREATE TABLE skillslist (id, title)""")
    except:
        pass

    try:
        c.execute("""CREATE TABLE efficiencylist (memberid, skillid, date, time, efficiency)""")
    except:
        pass
