from flask import Flask, render_template, request, redirect

# CONFIG
app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def form():
    if request.method == "POST":
       print("This will get the form data")
       return redirect("/")
    
    return render_template('frontend.html')

if __name__ == '__main__':
    app.run()