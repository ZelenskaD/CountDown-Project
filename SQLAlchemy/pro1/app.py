from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from sqlalchemy import text  # Import the text function from SQLAlchemy
from models.database import db, connect_db  # Import db from database.py

from models.actor import Actor

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost:5432/movies_example'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "1234"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)


@app.route('/')
def home_page():
    movies = db.session.execute(text("SELECT * FROM movies"))
    all_movies = list(movies)
    for movie in all_movies:
        print(movie)

    actors = Actor.query.all()
    """Show home page"""
    return render_template('home.html', actors=actors)


if __name__ == '__main__':
    app.run(debug=True)
