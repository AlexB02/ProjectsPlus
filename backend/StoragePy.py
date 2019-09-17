import sqlite3 as sql

def createDatabase():

    conn = sql.connect('example.db')
    c = conn.cursor()
    
