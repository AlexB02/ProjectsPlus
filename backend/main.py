from flask import Flask

app = Flask("__main__")

@app.route("/")
def index():
    return flask.rendertemplate("index.html",token="React+Flask")

app.run(debug=True)
