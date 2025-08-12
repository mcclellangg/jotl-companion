from flask import Flask, render_template

# CONFIG
app = Flask(__name__)


@app.route("/")
def scenario_log():
    return render_template("red-guard.html")


if __name__ == "__main__":
    app.run()
