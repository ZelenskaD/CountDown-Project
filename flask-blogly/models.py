# models.py
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


def connect_db(app):
    db.app = app
    db.init_app(app)


class User(db.Model):
    """User model."""
    
    __tablename__ = "users"

    def __repr__(self):
        """Show user info."""
        u = self
        return f"<User id={u.id} first_name={u.first_name} last_name={u.last_name} image_url={u.image_url}>"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    first_name = db.Column(db.String(30), nullable=False)
    last_name = db.Column(db.String(30), nullable=False)
    image_url = db.Column(db.Text, nullable=True)


class PredefinedUsersStatus(db.Model):
    """Model to track if predefined users were already added."""
    __tablename__ = 'predefined_users_status'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    status = db.Column(db.Boolean, default=False)