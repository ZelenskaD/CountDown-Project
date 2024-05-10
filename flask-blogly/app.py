from flask import Flask, render_template, request, redirect, url_for
from flask_debugtoolbar import DebugToolbarExtension
from models import User, connect_db, db, PredefinedUsersStatus


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://dariazelenska:Asd349790@localhost:5432/blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "1234"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

# Initialize Debug Toolbar
debug = DebugToolbarExtension(app)

# Connect to the database
connect_db(app)
with app.app_context():
    # Only create tables if they don't already exist
    db.create_all()


@app.route('/')
def add_predefined_users():
    """Add a set of predefined users to the database without duplicating."""
    # Check if predefined users have already been added
    status_record = PredefinedUsersStatus.query.first()

    if status_record and status_record.status:
        # Skip adding predefined users if they've been added already
        return redirect(url_for('user_list'))

    # List of predefined users
    predefined_users = [
        {
            'first_name': "Alan",
            'last_name': "Alda",
            'image_url': "https://static01.nyt.com/images/2023/12/03/magazine/03mag-Chicken-01/03mag-Chicken-01-superJumbo.jpg?quality=75&auto=webp"
        },
        {
            'first_name': "Joel",
            'last_name': "Burton",
            'image_url': "https://images.nightcafe.studio/jobs/EzP5ERmTFEsbvhU9Xi9Q/EzP5ERmTFEsbvhU9Xi9Q--1--9c4qr.jpg?tr=w-1600,c-at_max"
        },
        {
            'first_name': "Jane",
            'last_name': "Smith",
            'image_url': "https://cdn.openart.ai/published/a7CwzuuKycDzhXJOAtc7/ivVp2Gcl_TO4S_raw.jpg"
        }
    ]

    # Check and add only new users
    for user_data in predefined_users:
        existing_user = User.query.filter_by(
            first_name=user_data['first_name'],
            last_name=user_data['last_name']
        ).first()

        if not existing_user:
            new_user = User(
                first_name=user_data['first_name'],
                last_name=user_data['last_name'],
                image_url=user_data['image_url']
            )
            db.session.add(new_user)

    # Commit the new users to the database
    db.session.commit()

    # Mark predefined users as added
    if not status_record:
        status_record = PredefinedUsersStatus(status=True)
        db.session.add(status_record)
    else:
        status_record.status = True

    db.session.commit()

    return redirect(url_for('user_list'))


@app.route('/users')
def user_list():
    """Display a list of all users."""
    users = User.query.all()
    return render_template('list.html', users=users)


@app.route("/users/<int:user_id>")
def user_details(user_id):
    """Show details about a single user."""
    user = User.query.get_or_404(user_id)
    return render_template("details.html", user=user)


@app.route('/users/new', methods=['GET', 'POST'])
def create_user():
    """Display a form to create a new user or handle form submission."""
    if request.method == 'GET':
        return render_template('form.html')

    first_name = request.form.get('first_name')
    last_name = request.form.get('last_name')
    image_url = request.form.get('image_url')

    if not image_url:
        image_url = 'https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1'

    new_user = User(first_name=first_name, last_name=last_name, image_url=image_url)
    db.session.add(new_user)
    db.session.commit()

    return redirect(url_for('user_list'))


@app.route('/users/<int:user_id>/edit', methods=['GET'])
def edit_user(user_id):
    user = User.query.get_or_404(user_id)
    return render_template('edit.html', user=user)


@app.route('/users/edit/<int:user_id>', methods=['POST'])
def update_user(user_id):
    """Update an existing user's information."""
    user = User.query.get_or_404(user_id)

    user.first_name = request.form.get('first_name')
    user.last_name = request.form.get('last_name')
    user.image_url = request.form.get('image_url')

    db.session.commit()

    return redirect(url_for('user_details', user_id=user_id))


@app.route('/users/<int:user_id>/delete', methods=['POST'])
def delete_user(user_id):
    """Delete a user from the database."""
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    return redirect(url_for('user_list'))


if __name__ == '__main__':
    app.run(debug=True)
