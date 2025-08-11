from flask import Flask, render_template, request, redirect

# CONFIG
app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def form():
    if request.method == "POST":
       print("This will get the form data")
       return redirect("/")
    
    return render_template('frontend.html')

@app.route("/scenario_log")
def scenario_log():
    return render_template("scenario_log.html")

@app.route("/slv2")
def slv2():
    return render_template("slv2.html")

if __name__ == '__main__':
    app.run()