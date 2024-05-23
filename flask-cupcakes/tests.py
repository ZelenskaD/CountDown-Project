from unittest import TestCase
from app import app, db
from models import Cupcake


class CupcakeViewsTestCase(TestCase):
    def setUp(self):
        app.config.from_object('config.TestingConfig')
        self.app = app.test_client()
        with app.app_context():
            db.create_all()
            # Add test data
            cupcake1 = Cupcake(flavor="Vanilla", size="Small", rating=8, image="https://example.com/vanilla.jpg")
            cupcake2 = Cupcake(flavor="Chocolate", size="Large", rating=10, image="https://example.com/chocolate.jpg")
            db.session.add_all([cupcake1, cupcake2])
            db.session.commit()

    def tearDown(self):
        with app.app_context():
            db.session.remove()
            db.drop_all()

    def test_list_all_cupcakes(self):
        response = self.app.get('/api/cupcakes')
        self.assertEqual(response.status_code, 200)
        data = response.get_json()
        self.assertEqual(len(data['cupcakes']), 2)

    def test_get_one_cupcake(self):
        response = self.app.get('/api/cupcakes/1')
        self.assertEqual(response.status_code, 200)
        data = response.get_json()
        self.assertEqual(data['cupcake']['flavor'], "Vanilla")

    def test_update_cupcake(self):
        """Testing the PATCH /api/cupcakes/<cupcake_id> route."""
        url = "/api/cupcakes/1"
        resp = self.app.patch(url, json={'flavor': 'Chocolate'})
        data = resp.get_json()
        self.assertEqual(resp.status_code, 200)
        self.assertEqual(data['cupcake']['flavor'], 'Chocolate')

    def test_delete_cupcake(self):
        """Testing the DELETE /api/cupcakes/<cupcake_id> route."""
        resp = self.app.delete('/api/cupcakes/1')
        data = resp.get_json()

        self.assertEqual(resp.status_code, 200)
        self.assertEqual(data['message'], "Cupcake was deleted.")
        # Verify cupcake is actually deleted
        query_resp = self.app.get('/api/cupcakes/1')
        self.assertEqual(query_resp.status_code, 404)

