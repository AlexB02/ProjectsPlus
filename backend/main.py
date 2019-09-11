import flask
from flask import request, url_for

app = flask.Flask("__main__")

def authenticate(username,password):

    if username == "abain001" and password == "password":

        return True

@app.route("/", methods=["GET","POST"])
def index():
    loginstatus = ""
    if request.method == "POST":
        username = request.form["name"]
        password = request.form["password"]

        if authenticate(username,password):

            loginstatus = "Authorised"

        else:

            loginstatus = "Unauthorised"

    return flask.render_template("index.html",loginstatus=loginstatus)

@app.route("/about")
def about():
    return flask.render_template("about.html")

app.run(debug=True)
