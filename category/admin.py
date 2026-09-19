from django.contrib import admin
from .models import Category, SubCategory


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('category_name', 'slug')
    prepopulated_fields = {'slug': ('category_name',)}

@admin.register(SubCategory)
class SubCategoryAdmin(admin.ModelAdmin):
    list_display = (
        'subcategory_name',
        'category',
        'slug',
    )
    list_filter = ('category',)
    prepopulated_fields = {
        'slug': ('subcategory_name',),
    }
