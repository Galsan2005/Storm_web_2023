from django.db import models

# Create your models here.
class Post(models.Model):
    text = models.TextField()
    
    def __str__(self):
        return self.text[:50]

class Actor(models.Model):
    actor_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    last_update = models.DateTimeField()
    
    def __str__(self):
        return f'{self.first_name} {self.last_name}'
    
    class Meta:
        managed = False
        db_table = 'actor'

class Country(models.Model):
    country_id = models.AutoField(primary_key=True)
    country = models.CharField(max_length=45)
    last_update = models.DateTimeField()
    
    def __str__(self):
        return self.country
    
    class Meta:
        managed = False
        db_table = 'country'

class Language(models.Model):
    language_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45)
    last_update = models.DateTimeField()
    
    def __str__(self):
        return self.name
    
    class Meta:
        managed = False
        db_table = 'language'
        
class Category(models.Model):
    category_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45)
    last_update = models.DateTimeField()
    
    def __str__(self):
        return self.name
    
    class Meta:
        managed = False
        db_table = 'category'