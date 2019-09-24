import flask
import StoragePy as sp
from flask import request, url_for, redirect, session, jsonify
import secrets
import os
import hashlib

app = flask.Flask("__main__")

app.secret_key = secrets.token_urlsafe(24)

def verifypassword(password,storedpassword):
    for saltpoint in range(1,186):
        #saltpoint = 32
        storedkey = str(storedpassword)[saltpoint:187].encode("utf-8")
        storedsalt = str(storedpassword)[2:saltpoint].encode("utf-8")

        verifykey = str(hashlib.pbkdf2_hmac('sha256', password.encode(encoding='utf-8'), storedsalt, 400000))[saltpoint:187].encode("utf-8")

        print("trying new saltpoint: "+str(saltpoint))

        print("Stored key: "+str(storedkey))
        print("Calculated key: "+str(verifykey))

        if storedkey == verifykey:
            return True
        #else:
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
