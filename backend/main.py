import flask
import StoragePy as sp
from flask import request, url_for, redirect, session
import secrets
import wtforms

app = flask.Flask("__main__")

app.secret_key = secrets.token_urlsafe(24)

@app.route("/",methods=["GET","POST"])
def index():

    loginmessage = ""
    signupmessage = ""

    if flask.request.method == "POST":

        if request.form["identifier"] == "login":

            try:
                email = request.form["email"]
                password = request.form["password"]

                if email == "alex@email.com" and password == "a":
                    loginmessage = "login successful"
                    return flask.render_template("index.html",loginmessage=loginmessage)
                else:
                    loginmessage = "email or password incorrect"
                    return flask.render_template("index.html",loginmessage=loginmessage)
            except:
                loginmessage = "login failed, please try again"
                return flask.render_template("index.html",loginmessage=loginmessage)
        else:

            signupmessage = "Tried to sign up"
            return flask.render_template("index.html",loginmessage=loginmessage,signupmessage=signupmessage)

    return flask.render_template("index.html",loginmessage=loginmessage)

app.run(debug=True)
