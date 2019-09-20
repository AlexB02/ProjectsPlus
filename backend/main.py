import flask
import StoragePy as sp
from flask import request, url_for, redirect, session, jsonify
import secrets

app = flask.Flask("__main__")

app.secret_key = secrets.token_urlsafe(24)

@app.route("/",methods=["POST","GET"])
def index():

    loginmessage = ""
    signupmessage = ""
    return flask.render_template("index.html")

@app.route("/login", methods=["POST","GET"])
def login():

    sp.connect()

    email = request.form["email"]
    password = request.form["password"]

    # Check if login is valid
    if sp.recordExists(email):

        loginmessage = "login successful"

    # Can't obtain login details
    elif (email == "alexanderdb8@gmail.com"):

        loginmessage = "login successful"

    else:

        loginmessage="email or password incorrect"

    return jsonify({ "result" : "success", "loginmessage" : loginmessage})



app.run(debug=True)
