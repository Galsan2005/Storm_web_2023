from django.views.generic import ListView
from .models import Post, Actor, Country, Language, Category

# Create your views here.
class HomePageView(ListView):
    model = Post
    template_name = "home.html"
class ActorPageView(ListView):
    model = Actor
    template_name = "actors.html"
class CountryPageView(ListView):
    model = Country
    template_name = "country.html"
class LanguagePageView(ListView):
    model = Language
    template_name = "language.html"
class CategoryPageView(ListView):
    model = Category
    template_name = "category.html"
    
    
