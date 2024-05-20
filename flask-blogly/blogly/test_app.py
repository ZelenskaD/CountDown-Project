# test_app.py
import unittest
from app import app, db, User, PredefinedUsersStatus


class FlaskAppTests(unittest.TestCase):
    """Unit tests for the Flask application."""

    @classmethod
    def setUpClass(cls):
        """Set up testing environment."""
        app.config['TESTING'] = True
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'  # In-memory SQLite for tests
        app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

        # Create a test client
        cls.client = app.test_client()

        # Set up the database
        with app.app_context():
            db.create_all()

    @classmethod
    def tearDownClass(cls):
        """Clean up after all tests."""
        with app.app_context():
            db.session.remove()
            db.drop_all()

    def setUp(self):
        """Clean up and prepare before each test."""
        with app.app_context():
            db.session.query(User).delete()
            db.session.query(PredefinedUsersStatus).delete()
            db.session.commit()

    def test_add_predefined_users(self):
        """Test that predefined users are added correctly."""
        response = self.client.get('/')
        self.assertEqual(response.status_code, 302)
        with app.app_context():
            users = User.query.all()
            self.assertEqual(len(users), 3)  # Three predefined users

    def test_create_user_form(self):
        """Test that the create user form page loads."""
        response = self.client.get('/users/new')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b"Create a New User", response.data)

    def test_create_user_submission(self):
        """Test that submitting the create user form adds a new user."""
        data = {
            'first_name': 'Test',
            'last_name': 'User',
            'image_url': ''
        }
        response = self.client.post('/users/new', data=data, follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        with app.app_context():
            user = User.query.filter_by(first_name='Test', last_name='User').first()
            self.assertIsNotNone(user)

    def test_delete_user(self):
        """Test that deleting a user works correctly."""
        # Create a user first
        with app.app_context():
            new_user = User(first_name='John', last_name='Doe', image_url='')
            db.session.add(new_user)
            db.session.commit()
            user_id = new_user.id

        # Delete the user via POST request
        response = self.client.post(f'/users/{user_id}/delete', follow_redirects=True)
        self.assertEqual(response.status_code, 200)

        # Check that the user was deleted
        with app.app_context():
            user = User.query.get(user_id)
            self.assertIsNone(user)


if __name__ == '__main__':
    unittest.main()
