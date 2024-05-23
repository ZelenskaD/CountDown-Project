"""Flask app for Cupcakes"""
from flask import Flask, render_template, request, redirect, jsonify, url_for
# from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Cupcake, IMG_DEFAULT

app = Flask(__name__)
app.config.from_object('config.DevelopmentConfig')

# Initialize Debug Toolbar
# debug = DebugToolbarExtension(app)

# Connect to the database
connect_db(app)


def create_sample_data():
    with app.app_context():
        # Only create tables if they don't already exist
        # db.drop_all()
        db.drop_all()
        db.create_all()

        c1 = Cupcake(
            flavor="cherry",
            size="large",
            rating=5
        )

        c2 = Cupcake(
            flavor="chocolate",
            size="small",
            rating=9,
            image="https://www.bakedbyrachel.com/wp-content/uploads/2018/01/chocolatecupcakesccfrosting1_bakedbyrachel.jpg"
        )

        db.session.add_all([c1, c2])
        db.session.commit()


def serialize_cupcake(cupcake):
    """Serialize a cupcake SQLAlchemy obj to dictionary."""

    return {
        "id": cupcake.id,
        "flavor": cupcake.flavor,
        "size": cupcake.size,
        "rating": cupcake.rating,
        "image": cupcake.image
    }


@app.route('/')
def show_render():
    return render_template('list_cupcakes.html')


@app.route('/api/cupcakes/new')
def show_cupcake_form():
    return render_template('form_cupcake.html')


@app.route('/api/cupcakes/new', methods=["GET", "POST"])
def make_new_cupcake():
    if request.method == "POST":
        try:
            data = request.get_json()
            flavor = data.get('flavor')
            size = data.get('size')
            rating = data.get('rating')
            image = data.get('image') or IMG_DEFAULT

            new_cupcake = Cupcake(flavor=flavor, size=size, rating=rating, image=image)
            db.session.add(new_cupcake)
            db.session.commit()
            return jsonify(cupcake=new_cupcake.serialize()), 201
        except Exception as e:
            print(f"Error: {e}")
            return jsonify(error=str(e)), 500

    return render_template('form_cupcake.html')


@app.route("/api/cupcakes", methods=["GET"])
def list_all_cupcakes():
    """Return JSON {cupcakes: [{id, flavor, size, rating, image}, ...]}"""

    cupcakes = Cupcake.query.all()
    serialized = [serialize_cupcake(c) for c in cupcakes]

    return jsonify(cupcakes=serialized)


@app.route("/api/cupcakes/<int:cupcake_id>")
def get_one_cupcake(cupcake_id):
    """Respond with JSON like: {cupcake: {id, flavor, size, rating, image}}"""
    cupcake = Cupcake.query.get_or_404(cupcake_id)
    return jsonify(cupcake=serialize_cupcake(cupcake))


@app.route("/api/cupcakes", methods=["POST"])
def create_cupcake():
    """Respond with JSON like: {cupcake: {id, flavor, size, rating, image}}."""
    flavor = request.json.get('flavor')
    size = request.json.get('size')
    rating = request.json.get('rating')
    image = request.json.get('image') or IMG_DEFAULT

    new_cupcake = Cupcake(flavor=flavor, size=size, rating=rating, image=image)

    db.session.add(new_cupcake)
    db.session.commit()
    response_json = jsonify(cupcake=new_cupcake.serialize())

    return response_json, 201


@app.route("/api/cupcakes/<int:cupcake_id>", methods=["PATCH"])
def update_cupcake(cupcake_id):
    """Respond with JSON of the newly-updated cupcake, like this: {cupcake: {id, flavor, size, rating,image}}."""
    cupcake = Cupcake.query.get_or_404(cupcake_id)
    cupcake.flavor = request.json.get('flavor', cupcake.flavor)
    cupcake.size = request.json.get('size', cupcake.size)
    cupcake.rating = request.json.get('rating', cupcake.rating)
    cupcake.image = request.json.get('image', cupcake.image)

    db.session.commit()
    return jsonify(cupcake=cupcake.serialize())


@app.route('/api/cupcakes/<int:cupcake_id>', methods=["DELETE"])
def delete_cupcake(cupcake_id):
    cupcake = Cupcake.query.get_or_404(cupcake_id)
    db.session.delete(cupcake)
    db.session.commit()
    return jsonify(message="Cupcake was deleted.")


if __name__ == '__main__':
    if not app.config['TESTING']:
        create_sample_data()
    app.run(debug=True)
