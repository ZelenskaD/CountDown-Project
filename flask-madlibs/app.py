from flask import Flask, request, render_template
from random import randint, choice, sample
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config['SECRET_KEY'] = "natrix111"
debug = DebugToolbarExtension(app)

@app.route('/')
def home_page():
  return render_template("base.html")

@app.route('/story')
def set_story_page():
  place = request.args["place"]
  noun = request.args["noun"]
  verb = request.args["verb"]
  adjective = request.args["adjective"]
  plural_noun = request.args["plural_noun"]
  story_text = f"Once upon a time in a long-ago {place}, there lived a large {adjective} {noun}. It loved to {verb} {plural_noun}."
  return render_template("story.html", story=story_text)

