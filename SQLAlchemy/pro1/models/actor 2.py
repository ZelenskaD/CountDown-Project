from models.database import db


class Actor(db.Model):
    __tablename__ = 'actors'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text, nullable=False)
    last_name = db.Column(db.Text)
    birth_date = db.Column(db.Date, nullable=False)

    def __repr__(self):
        return f"<Actor(id={self.id}, first_name='{self.first_name}', last_name='{self.last_name}', birth_date='{self.birth_date}')>"