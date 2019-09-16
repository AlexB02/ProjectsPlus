import flask
import StoragePy as sp
from flask import request, url_for, redirect
import sys

app = flask.Flask("__main__")

@app.route("/")
def index():

    #sp.createDatabase()
    """
    if request.method == "POST":

        username = request.form["username"]
        email = request.form["email"]
        """
    return flask.render_template("index.html")

@app.route("/about")
def about():

    return flask.render_template("about.html")

app.run(debug=True)
