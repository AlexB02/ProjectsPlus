import flask
import StoragePy as sp
from flask import request, url_for, redirect
import sys

app = flask.Flask("__main__")

@app.route("/", methods=["GET","POST"])
def index():

    sp.createDatabase()

    if request.method == "POST":

        username = request.form["username"]
        email = request.form["email"]
        return redirect(url_for("login", username=username, email=email))

    return flask.render_template("index.html",loginurl=url_for("login"))

@app.route("/login")
def login(username="usernamedefault",email="emaildefault"):

    try:
        username = request.args["username"]
        email = request.args["email"]

        if username == "" or email == "":
            username="usernamedefault"
            email="emaildefault"

    except:
        username=username
        email=email

    return flask.render_template("login.html",username=username,email=email)

app.run(debug=True)
