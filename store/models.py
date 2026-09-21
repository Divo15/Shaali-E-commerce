from django.db import models
from category.models import Category, SubCategory
from django.urls import reverse

# Create your models here.
class Product(models.Model):
    product_name = models.CharField(max_length=200, unique = True)
    slug = models.SlugField(max_length=200, unique= True)
    description = models.TextField(max_length=500, blank = True)
    color = models.CharField(max_length=50)
    price  = models.IntegerField()
    images = models.ImageField(upload_to='photos/products')
    stock = models.BooleanField(default=False)
    is_available = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    subcategory = models.ForeignKey(
        SubCategory,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        related_name='products',
    )
    create_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def get_url(self):
        return reverse(
            'store:product_detail',
            args=[self.category.department.slug, self.category.slug, self.slug],
        )


    def __str__(self):
        return self.product_name 


