import flask
import StoragePy as sp
from flask import request, url_for, redirect
import sys
import logging

app = flask.Flask("__main__")

@app.route("/",methods=["GET","POST"])
def index():

    #sp.createDatabase()

    loginmessage = ""

    if flask.request.method == "POST":
        try:
            email = request.form["email"]
            password = request.form["password"]

            if email == "alex@email.com" and password == "a":
                loginmessage = "login successful"
                return flask.render_template("index.html",loginmessage=loginmessage)
            else:
                loginmessage = "email or password incorrect"
        except:
            loginmessage = "login failed, please try again"

    return flask.render_template("index.html",loginmessage=loginmessage)

@app.route("/about")
def about():

    return flask.render_template("about.html")

app.run(debug=True)
