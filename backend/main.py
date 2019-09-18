import flask
import StoragePy as sp
from flask import request, url_for, redirect, session
import secrets

app = flask.Flask("__main__")

app.secret_key = secrets.token_urlsafe(24)

@app.route("/",methods=["GET","POST"])
def index():

    loginmessage = ""
    signupmessage = ""

    # If a form is submitted
    if flask.request.method == "POST":

        # If the login form was submitted
        if request.form["identifier"] == "login":

            # Attempt to get email and password
            try:

                email = request.form["email"]
                password = request.form["password"]

                # Check if login is valid
                if email == "alex@email.com" and password == "a":
                    loginmessage = "login successful"

                    return flask.render_template("index.html",loginmessage=loginmessage)

                # Can't obtain login details
                else:
                    loginmessage = "email or password incorrect"
                    return flask.render_template("index.html",loginmessage=loginmessage)

            # Error in obtaining login details
            except:
                loginmessage = "login failed, please try again"
                return flask.render_template("index.html",loginmessage=loginmessage)

        # If the sign up form was submitted
        else:

            signupmessage = "Tried to sign up"
            return flask.render_template("index.html",loginmessage=loginmessage,signupmessage=signupmessage)

    return flask.render_template("index.html",loginmessage=loginmessage)

app.run(debug=True)
