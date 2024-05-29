import random
from flask import Flask, render_template, flash, redirect, url_for, session
from flask_debugtoolbar import DebugToolbarExtension
from forms import LoginForm
from models import connect_db, db

app = Flask(__name__)
app.config["SECRET_KEY"] = "secret"
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///---"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

debug = DebugToolbarExtension(app)

connect_db(app)

flash_messages = [
    "Greetings, you've joined the shadows, a true denizen of the underworld.",
    "Salutations, you have embraced the shadows, becoming one with the unseen.",
    "Welcome, you have stepped into the shadows, a silent whisper in the darkness."
    "Hail, you have become a shadow, a master of the hidden paths."
]

goodbye_phrases = [
    "Farewell, until the shadows call again.",
    "Depart in darkness, until we meet in the underworld.",
    "May the shadows guide your path, until next we meet.",
    "Slip into the night, until the next whisper in the dark."
]


@app.route("/")
def homepage():
    """Show homepage links."""

    return render_template("main/main_page.html")


@app.route("/my-profile")
def show_user_own_profile():
    """Show user profile page."""
    if "user_idd" not in session:
        flash("Step out of the shadows and reveal yourself!")
        return redirect('/')
    return render_template("user/user_profile.html")


@app.route("/characters")
def show_characters():
    """Show characters page."""

    return render_template("main/characters.html")


@app.route("/characters/new")
def create_new_char():
    """Create new character form."""

    return render_template("main/new_char_form.html")


@app.route('/login', methods=['GET', 'POST'])
def login_user():
    form = LoginForm()
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data

        user = User.authenticate(username, password)
        if user:
            flash(f"Welcome back to the underworld, {user.username}!")
            session['user_id'] = user.id
            return redirect('/')
        else:
            form.username.errors = ['Invalid username/password.']
        flash('Login successful!', 'success')
        return redirect(url_for('homepage'))
    return render_template('main/forms/login_form.html', form=form)


@app.route("/sing-in",methods=['GET', 'POST'])
def show_sign_in_form():
    """Show sign in form for register a user"""
    form = SingInForm()
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data
        new_user = User.register(username, password)

        db.session.add(new_user)
        db.session.commit()
        session['user_id'] = new_user.id
        flash(random.choice(flash_messages), 'success')
    return render_template("main/forms/sign_in_form.html")


@app.route('/logout')
def logout_user():
    """Logs user out and redirects to homepage"""
    session.pop("user_id")
    flash(random.choice(goodbye_phrases), 'info')
    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)
