from flask import Flask, render_template, request, redirect
from flask_debugtoolbar import DebugToolbarExtension
from database import db, connect_db, Pet
app = Flask(__name__)
log = app.logger

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost:5432/pet_shop_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "1234"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)


@app.route('/')
def list_pets():
    """Show list with pets """
    # log.info("Creating tables...")
    # db.create_all()
    # # Pet.query.all()

    pets = Pet.query.all()
    return render_template('list.html', pets=pets)


@app.route('/', methods=["POST"])
def create_pet():
    name = request.form["name"]
    species = request.form["species"]
    hunger = request.form["hunger"]
    hunger = int(hunger) if hunger else None

    new_pet = Pet(name=name, species=species, hunger=hunger)
    db.session.add(new_pet)
    db.session.commit()

    return redirect(f"/{new_pet.id}")


@app.route("/<int:pet_id>")
def show_pet(pet_id):
    """Show details about a single pet"""
    pet = Pet.query.get_or_404(pet_id)
    return render_template("details.html", pet=pet)


@app.route("/species/<species_id>")
def show_pets_by_species(species_id):
    pets = Pet.get_by_species(species_id)
    return render_template("species.html", pets=pets, species=species_id)
#
# @app.route('/create-pet')
# def create_pet():
#     # name = request.args.get('name')
#     # species = request.args.get('species')
#     # hunger = request.args.get('hunger')
#
#     my_pet = Pet(name="rocket", species="fick you", hunger=0)
#     my_pet = Pet(name="sushi", species="pig", hunger=10)
#     my_pet = Pet(name="Tommy", species='tiger', hunger=5)
#     db.session.add(my_pet)
#
#     db.session.commit()
#     return render_template('home.html')


if __name__ == '__main__':
    log.info("Connecting DB...")
    connect_db(app)
    app.run(debug=True)