"""Models for Cupcake app."""
# models.py
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
IMG_DEFAULT = 'https://thestayathomechef.com/wp-content/uploads/2017/12/Most-Amazing-Chocolate-Cupcakes-1-small.jpg'
db = SQLAlchemy()


def connect_db(app):
    db.app = app
    db.init_app(app)


class Cupcake(db.Model):
    __tablename__ = "cupcakes"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    flavor = db.Column(db.String(30), nullable=False)
    size = db.Column(db.String(15), nullable=False)
    rating = db.Column(db.Float, nullable=True)
    image = db.Column(db.String(1000), nullable=False, default=IMG_DEFAULT)

    def serialize(self):
        """Serialize a cupcake SQLAlchemy obj to dictionary."""
        return {
            "id": self.id,
            "flavor": self.flavor,
            "size": self.size,
            "rating": self.rating,
            "image": self.image
        }
