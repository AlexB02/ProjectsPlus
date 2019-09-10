import flask
from flask import request, url_for

app = flask.Flask("__main__")

@app.route("/", methods=["GET","POST"])
def index():
    loginstatus = ""
    if request.method == "POST":
        name = request.form["name"]
        password = request.form["pass"]
        loginstatus = "Welcome " + name
    return flask.render_template("index.html",loginstatus=loginstatus)

app.run(debug=True)
