import flask
import StoragePy as sp
from flask import request, url_for, redirect, session, jsonify
import secrets
import os
import hashlib

app = flask.Flask("__main__")

app.secret_key = secrets.token_urlsafe(24)

#sp.addUser("Alex","Bainbridge","alexanderdb8@gmail.com","a")
#sp.addUser("Daniella","Alexander","danniaviva@hotmail.co.uk","dogs")
#sp.addUser("Lance","Gonzales","lanceG777@yahoo.co.uk","Lumastya0991")
#sp.addUser("Robert","Martin","dev@robertxmartin.com","robert123")

def verifypassword(password,storedpassword):
    storedpassword = storedpassword[0][0]

    salt = storedpassword[:32]
    passwordhash = hashlib.pbkdf2_hmac('sha256', password.encode(encoding='utf-8'), salt, 400000)
    passwordhash = salt + passwordhash

    if str(passwordhash) == str(storedpassword):
        return True
    else:
        return False


@app.route("/",methods=["POST","GET"])
def index():

    loginmessage = ""
    signupmessage = ""
    return flask.render_template("index.html")

@app.route("/login", methods=["POST","GET"])
def login():
    try:
        sp.connect()

        email = request.form["email"]
        password = request.form["password"]

        # Check if login is valid
        if sp.recordExists(email) and verifypassword(password,sp.getStoredPassword(email)):
            loginmessage = "login successful"

        # Can't obtain login details
        else:
            loginmessage="email or password incorrect"

        return jsonify({ "result" : "success", "loginmessage" : loginmessage})
    except:
        return flask.redirect("/")



app.run(debug=True)
