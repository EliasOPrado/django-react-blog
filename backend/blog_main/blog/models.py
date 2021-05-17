from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Article(models.Model):
    """ Article model """
    title = models.CharField(max_length=150)
    article = models.TextField()

    def __str__(self):
        return self.title
