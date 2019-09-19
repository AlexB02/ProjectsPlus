import sqlite3 as sql

def connect():

    conn = sql.connect('main.db')
    c = conn.cursor()
    create()

def create():
    try:
        c.execute("""CREATE TABLE members (id, firstname, lastname, email, passwordhash)""")
    except:
        pass
