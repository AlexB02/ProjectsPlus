import flask
import StoragePy as sp
from flask import request, url_for, redirect, session, jsonify
import secrets
import os
import hashlib
import flask_login as fl
import flask_session as fs
from datetime import timedelta
import re
import random

app = flask.Flask("__main__")

# Create login manager
loginmanager = fl.LoginManager()
# Initialise app for flask login manager
loginmanager.init_app(app)
# Set the login page to the homepage
loginmanager.login_view = ""

# Identify the user loader, set the user to the User class from StoragePy
@loginmanager.user_loader
def load_user(id):
    return sp.userObj(id)

# Set the secret key of the site to a randomly generated string of letters, numbers and characters
app.secret_key = secrets.token_urlsafe(32)
# Set the time for a valid login (test value)
app.config['PERMANENT_SESSION_LIFETIME'] =  timedelta(seconds=1800)

# Function to test the given password against the password stored for the entered email
def verifypassword(password,storedpassword):
    # Get the stored password
    storedpassword = storedpassword[0][0]

    # Obtain the salt from the stored password (first 32 bits)
    salt = storedpassword[:32]
    # Hash the given password with the same salt and hashing format as the stored password
    passwordhash = hashlib.pbkdf2_hmac('sha256', password.encode(encoding='utf-8'), salt, 400000)
    # Put the hash of the given password in the same format as the stored password to give a comparable value
    passwordhash = salt + passwordhash

    # Check if the given password is the same as the stored password
    if str(passwordhash) == str(storedpassword):
        return True
    else:
        return False

# Homepage route, takes post and get mathods for login and signup value transfer
@app.route("/",methods=["POST","GET"])
def index():
    # Set the authenticated cookie to false as they are not logged in
    session["authenticated"] = "False"
    # Set both the login and signup messages to blank to clear the form messages & make the site look clean
    loginmessage = ""
    signupmessage = ""
    # Show the user the index (home) page
    return flask.render_template("index.html")

# Login route, takes post and get methods for login value transfer
@app.route("/login", methods=["POST","GET"])
def login():
    try:
        # Set up connection to the database (Subroutine from StoragePy)
        sp.connect()
        # Set the authenticated cookie to False
        session["authenticated"] = "False"

        # Get the email value from the form
        email = request.form["email"]
        # Get the password value from the form
        password = request.form["password"]

        # Check if login is valid
        if sp.recordExists(email) and verifypassword(password,sp.getStoredPassword(email)):

            # Set the login message to Valid Login
            loginmessage = "Valid login"

            # Attempt to log in the user with flask-login to ensure that they will be successfully created as a user upon reaching the dashboard
            try:
                if fl.login_user(sp.userObj(sp.getIDbyEmail(email)),remember=True,force=True):

                    fl.login_user(sp.userObj(sp.getIDbyEmail(email)),remember=True,force=True)

                    # Change the login message to login successful to show that they will be created as a user successfully upon reaching the dashboard so they may continue
                    loginmessage = "login successful"

                    # Ensure the user is authenticated correctly
                    if fl.current_user.is_authenticated:

                        # Set the authentication cookie to True
                        session["authenticated"] = "True"
                        # Set the email cookie to the email address of login
                        session["email"] = email
                        # Set the session to permanent
                        session.permanent = True
                        return jsonify({ "result" : "success", "is_authenticated":session["authenticated"], "id":ord(fl.current_user.get_id()),"loginmessage":loginmessage})

                else:
                    # Unable to log in the user with flask-login so change the login message to Failed to authenticate
                    loginmessage = "Failed to authenticate"

            # An error occured when trying to log in the user
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


        if re.search(r"^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$",email):
            try:
                firstname = firstname.capitalize()
                lastname = lastname.capitalize()
                sp.addUser(firstname,lastname,email,password)

                try:
                    if fl.login_user(sp.userObj(sp.getIDbyEmail(email)),remember=True,force=True):

                        fl.login_user(sp.userObj(sp.getIDbyEmail(email)),remember=True,force=True)

                        # Change the signup message to account created successfully to show that they will be created as a user successfully upon reaching the dashboard so they may continue
                        signupmessage = "Account created successfully"

                        # Ensure the user is authenticated correctly
                        if fl.current_user.is_authenticated:

                            # Set the authentication cookie to True
                            session["authenticated"] = "True"
                            # Set the email cookie to the email address of login
                            session["email"] = email
                            # Set the session to permanent
                            session.permanent = True
                            return jsonify({ "result" : "success", "is_authenticated":session["authenticated"], "id":ord(fl.current_user.get_id()),"signupmessage":signupmessage})
                except:
                    signupmessage="Account creation error"
                    return jsonify({"result": "success", "signupmessage":signupmessage})
            except:
                signupmessage="Account creation error"
                return jsonify({"result": "success", "signupmessage":signupmessage})
        else:
            signupmessage=""

        return jsonify({"result": "success", "signupmessage":signupmessage})

    except:

        return flask.redirect("/")

@app.route("/dashboard")
def dashboard():
    sp.addSkill("Python")
    sp.addSkill("React")
    sp.addSkill("Flask")
    sp.addSkill("HTML")
    sp.addSkill("CSS")
    try:
        if session["authenticated"] == "True":
            email = session["email"]
            user = sp.userObj(sp.getIDbyEmail(email))
            # (type,efficiency,memberid,skillid,projectid)
            sp.addEfficiency("time",(random.randint(0,20000)/100),int(sp.getIDbyEmail(email)),random.randint(0,20),1)

            fl.login_user(user,remember=True,force=True)

            return flask.render_template("dashboard.html")
        else:
            return flask.redirect("/")
    except Exception as e:
        return flask.redirect("/")

@app.route("/getuser",methods=["POST","GET"])
def getUser():
    try:
        if session["authenticated"] == "True":
            email = session["email"]
            userid = sp.getIDbyEmail(email)
            user = sp.userObj(userid)
            username=user.firstname
            timeEfficienciesMax = sp.getEfficiencies(userid,"time","max")
            timeEfficienciesMin = sp.getEfficiencies(userid,"time","min")
            scheduleEfficienciesMax = sp.getEfficiencies(userid,"time","max")
            return jsonify({"username":username,"timeEfficienciesMax":timeEfficienciesMax,"timeEfficienciesMin":timeEfficienciesMin,"scheduleEfficienciesMax":scheduleEfficienciesMax})
    except:
        return flask.redirect("/")

@app.errorhandler(404)
def page_not_found(e):
    session["authenticated"] = "False"
    return flask.redirect("/"), 404

app.run(debug=True)
