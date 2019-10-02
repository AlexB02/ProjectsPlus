import flask
import StoragePy as sp
from flask import request, url_for, redirect, session, jsonify
import secrets
import os
import hashlib

app = flask.Flask("__main__")

app.secret_key = secrets.token_urlsafe(24)

sp.storePassword("alexanderdb8@gmail.com","a")

def verifypassword(password,storedpassword):
    print("calling to verify")
    storedpassword = storedpassword[0][0]

    salt = storedpassword[:32]
    print("Salt: "+str(salt))
    passwordhash = hashlib.pbkdf2_hmac('sha256', password.encode(encoding='utf-8'), salt, 400000)
    passwordhash = salt + str(passwordhash)

    if passwordhash == storedpassword:
        print("\nHashed password:"+passwordhash)
        print("\nStored password: "+storedpassword)
        return True
    else:
        print("\nHashed password:"+str(passwordhash))
        print("\nStored password: "+str(storedpassword))
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
