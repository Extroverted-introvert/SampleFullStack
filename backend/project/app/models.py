from django.db import models

# Create your models here.
class React(models.Model):
    employee = models.CharField(max_length=256)
    department = models.CharField(max_length=256)