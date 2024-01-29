from django.test import SimpleTestCase
from django.urls import reverse

class HomepageTests(SimpleTestCase):
    def test_url_exists_at_correct_location(self):
        response = self.client.get("/")
        self.assertEqual(response.status_code, 200)
    def test_url_avialable_by_name(self):
        response = self.client.get("home")
        self.assertEqual(response.status_code, 200)
        
class AboutpageTests(SimpleTestCase):
    def test_url_exists_at_correct_location(self):
        response = self.client.get("/about/")
        self.assertEqual(response.status_code, 200)
    def test_url_avialable_by_name(self):
        response = self.client.get("about")
        self.assertEqual(response.status_code, 200)
        
class InfopageTests(SimpleTestCase):
    def test_url_exists_at_correct_location(self):
        response = self.client.get("/info/")
        self.assertEqual(response.status_code, 200)
