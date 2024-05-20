from flask import Flask, render_template, request, redirect, url_for
from flask_debugtoolbar import DebugToolbarExtension
from models import User, connect_db, db, PredefinedUsersStatus, Post, PostTag, Tag


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
    # db.drop_all()
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
    posts = Post.query.filter_by(user_id=user_id).all()
    user = User.query.get_or_404(user_id)
    return render_template("details.html", user=user, posts=posts)


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


# PART TWO
@app.route('/users/<int:user_id>/posts/new', methods=['GET'])
def show_add_form(user_id):
    """Show form to add a post for a user."""
    user = User.query.get_or_404(user_id)
    tags = Tag.query.all()
    return render_template('new_post_form.html', user=user, tags=tags)


@app.route('/users/<int:user_id>/posts/new', methods=['POST'])
def add_post(user_id):
    user = User.query.get_or_404(user_id)
    tags = Tag.query.all()  # Fetch all tags to display in the form

    if request.method == 'GET':
        return render_template('new_post_form.html', user=user, tags=tags)

    title = request.form.get('title')
    content = request.form.get('content')
    tag_ids = request.form.getlist('tags[]')  # Retrieve list of tag ids
    if not title or not content:
        return render_template('new_post_form.html', error="All fields are required.", user=user, tags=tags)

    new_post = Post(title=title, content=content, user_id=user_id)
    for tag_id in tag_ids:
        tag = Tag.query.get(tag_id)
        new_post.tags.append(tag)
    db.session.add(new_post)
    db.session.commit()
    return redirect(url_for('user_details', user_id=user_id))


@app.route('/posts', methods=['GET'])
def all_posts():
    posts = Post.query.all()
    return render_template('posts.html', posts=posts)


@app.route('/posts/<int:post_id>', methods=['GET'])
def post_details(post_id):
    post = Post.query.get_or_404(post_id)
    user = User.query.get_or_404(post.user_id)
    return render_template('post_details.html', post=post, user=user)


@app.route('/posts/<int:post_id>/edit', methods=['GET'])
def show_edit_post_form(post_id):
    all_tags = Tag.query.all()
    post = Post.query.get_or_404(post_id)
    user = User.query.get_or_404(post.user_id)
    return render_template('edit_post.html', post=post, user=user, all_tags=all_tags)


@app.route('/posts/<int:post_id>/edit', methods=['POST'])
def edit_post(post_id):
    """Handle editing of a post."""
    post = Post.query.get_or_404(post_id)
    user = User.query.get_or_404(post.user_id)
    post.title = request.form['title']
    post.content = request.form['content']
    tag_ids = request.form.getlist('tags[]')  # Get list of selected tag ids from checkboxes
    post.tags = [Tag.query.get(int(id)) for id in tag_ids]  # Update the post's tags list
    db.session.commit()
    return redirect(url_for('post_details', post_id=post_id, user=user))


@app.route('/posts/<int:post_id>/delete', methods=['POST'])
def delete_post(post_id):
    """Delete a post."""
    post = Post.query.get_or_404(post_id)
    db.session.delete(post)
    db.session.commit()
    return redirect(url_for('user_list'))

    # Final Part


@app.route('/tags')
def list_of_tags():
    tags = Tag.query.all()
    return render_template('tags_list.html', tags=tags)


@app.route('/tags/new', methods=['GET'])
def show_add_tag_form():
    """Shows a form to add a new tag."""
    tags = Tag.query.all()
    user = User.query.all()
    return render_template('new_tag_form.html', tags=tags, user=user)


@app.route('/tags/new', methods=['POST'])
def create_tag():
    """Process add form, adds tag, and redirect to tag list."""
    tag_ids = request.form.getlist('tags[]')

    name = request.form.get('name')
    new_tag = Tag(name=name)
    db.session.add(new_tag)
    db.session.commit()

    return redirect(url_for('list_of_tags'))  # Make sure this is the correct function name


@app.route('/tags/<int:tag_id>/edit', methods=['GET'])
def show_edit_tag_form(tag_id):
    tag = Tag.query.get_or_404(tag_id)
    return render_template('edit_tag.html', tag=tag)


@app.route('/tags/<int:tag_id>/edit', methods=['POST'])
def edit_tag(tag_id):
    tag = Tag.query.get_or_404(tag_id)
    tag.name = request.form.get('name')
    db.session.commit()
    return redirect(url_for('list_of_tags'))


@app.route('/tags/<int:tag_id>')
def posts_by_tag(tag_id):
    """Filter post by tag"""
    tag = Tag.query.get_or_404(tag_id)
    posts = tag.posts
    return render_template('posts_by_tag.html', posts=posts, tag=tag)


@app.route('/tags/<int:tag_id>/delete', methods=['GET'])
def delete_tag(tag_id):
    """Delete a tag."""
    print(tag_id)
    tag = Tag.query.get(tag_id)
    print(tag)
    db.session.delete(tag)
    db.session.commit()
    return redirect(url_for('list_of_tags'))


if __name__ == '__main__':
    app.run(debug=True)
