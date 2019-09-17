import sqlite3 as sql

def createDatabase():

    conn = sql.connect('main.db')
    c = conn.cursor()
