from app import app
from unittest import TestCase


class homePageTestCase(TestCase):
    def test_start_page(self):
        with app.test_client() as client:
            res = client.get('/')
            html = res.get_data(as_text=True)

            self.assertEqual(res.status_code, 200)
            self.assertIn('<h1>{{ survey.title }}</h1>', html)