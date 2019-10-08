import flask
import StoragePy as sp
from flask import request, url_for, redirect, session, jsonify
import secrets
import os
import hashlib
import flask_login as fl

app = flask.Flask("__main__")

# Create login manager
loginmanager = fl.LoginManager()
# Initialise app for flask login manager
loginmanager.init_app(app)
loginmanager.login_view = ""

@loginmanager.user_loader
def load_user(id):
    return sp.userObj(id)

app.secret_key = secrets.token_urlsafe(24)

def verifypassword(password,storedpassword):
    storedpassword = storedpassword[0][0]

    salt = storedpassword[:32]
    passwordhash = hashlib.pbkdf2_hmac('sha256', password.encode(encoding='utf-8'), salt, 400000)
    passwordhash = salt + passwordhash

    if str(passwordhash) == str(storedpassword):
        return True
    else:
        return False

def redirectToDashboard():

    return flask.redirect("/dashboard")


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

            loginmessage = "Valid login"
            try:
                if fl.login_user(sp.userObj(sp.getIDbyEmail(email)),remember=True,force=True):

                    fl.login_user(sp.userObj(sp.getIDbyEmail(email)),remember=True,force=True)

                    loginmessage = "login successful"
                    loginmessage = str(fl.current_user.is_authenticated)

                    if fl.current_user.is_authenticated:

                        return flask.redirect(flask.url_for('dashboard'))

                else:
                    loginmessage = "Failed to authenticate"
            except Exception as e:
                loginmessage = str(e)

        # Can't obtain login details
        else:
            loginmessage="email or password incorrect"

        return jsonify({ "result" : "success", "loginmessage" : loginmessage})
    except:
        return flask.redirect("/")

@app.route("/signup", methods=["POST","GET"])
def signup():
    try:

        sp.connect()

        firstname = request.form["fname"]
        lastname = request.form["lname"]
        email = request.form["email"]
        password = request.form["password"]

        if sp.recordExists(email):

            signupmessage = "Account already exists, try logging in"
            return jsonify({"result": "success", "signupmessage":signupmessage})

        try:
            sp.addUser(firstname,lastname,email,password)
        except:
            pass
        signupmessage = "Account created successfully"

        return jsonify({"result": "success", "signupmessage":signupmessage})

    except:

        return flask.redirect("/")

@app.route("/dashboard")
@fl.login_required
def dashboard():
    print("Dashboard")
    return "Dashboard"

@loginmanager.unauthorized_handler
def requires_login():
    return "Logged in as: "+str(fl.current_user.get_id())

app.run(debug=True)
