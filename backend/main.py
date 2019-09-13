import flask
import StoragePy
from flask import request, url_for

app = flask.Flask("__main__")

@app.route("/", methods=["GET","POST"])
def index():

    StoragePy.createDatabase()

    return flask.render_template("index.html")

@app.route("/about")
def about():
    return flask.render_template("about.html")

app.run(debug=True)
