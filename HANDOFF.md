# Project Handoff

## Overview

- Repository: `https://github.com/Divo15/Shaali-E-commerce.git`
- Branch: `main`
- Project path: `D:\Backend`
- Framework: Django 6.1
- Python: 3.12
- Virtual environment: `env`
- Database: SQLite (`db.sqlite3`)

## Current Validation

The following command currently passes:

```powershell
.\env\Scripts\python.exe manage.py check
```

Applied migrations include:

- `category.0004_alter_category_description_subcategory`
- `store.0002_alter_product_stock`

## Completed Work

- Fixed the category filtering query in `store/views.py`.
- Added the category menu context processor at `category/context_processor.py`.
- Registered the context processor in `ecommerce/settings.py`.
- Added a top-level `SubCategory` model in `category/models.py`.
- Linked `SubCategory` to `Category` with `related_name='subcategories'`.
- Added a per-category unique constraint for subcategory slugs.
- Registered `SubCategory` in Django Admin.
- Fixed the `SubCategoryAdmin` field list, filter, and slug prepopulation settings.
- Added `.gitignore` and `requirements.txt` while preparing the repository for an initial commit.

## Current Category Models

`Category` contains:

- `category_name`
- `slug`
- `description`
- `category_image`

`SubCategory` contains:

- `category` foreign key
- `subcategory_name`
- `slug`
- `description`

The intended initial hierarchy is:

- Sarees
  - Banarasi
  - Kanjipuram
  - Organza
  - Maheshwari
  - Georgette
  - Modal
  - Cotton
  - Kota Doria

These records still need to be entered through Django Admin if they have not already been created.

## Remaining Subcategory Work

The database model and Admin registration are complete, but storefront navigation and product filtering are not complete.

1. Add an optional `subcategory` foreign key to `Product` in `store/models.py`.
2. Create `store/urls.py` with routes for all products, category products, and subcategory products.
3. Change `ecommerce/urls.py` to include `store.urls`.
4. Update `store/views.py` to accept `category_slug` and `subcategory_slug` and filter accordingly.
5. Update `store/store.html` to display subcategories for the selected category.
6. Run `makemigrations`, `migrate`, and `check` after changing the product model.

## Known Routing Problems

- `ecommerce/urls.py` currently sends `/store/` to `ecommerce.views.store`, so the filtering view in `store/views.py` is not used.
- `Category.get_urls()` reverses a URL named `products_by_category`, but that URL does not exist yet.
- The category method should eventually be renamed from `get_urls()` to `get_url()`.
- `SubCategory.get_url()` expects `store:products_by_subcategory`, but the `store` URL namespace and route do not exist yet.
- Calling either URL method before creating the routes can raise `NoReverseMatch`.

## Templates

- `ecommerce/templates/home.html` is currently a minimal placeholder.
- `ecommerce/templates/store/store.html` is currently a minimal placeholder.
- The larger static React-style templates are not connected to Django routes.
- Several static templates use relative `styles.css`, `app.js`, and `.html` links that will not resolve correctly through Django without static tags and named URLs.

## Git State

The repository has no commits yet. A previous `git add` staged more than 6,600 files, including:

- `env/`
- `__pycache__/`
- `db.sqlite3`
- collected files under the root `static/` directory

Do not create the initial commit in this state. Rebuild the Git index after confirming `.gitignore` rules, then stage only source files, migrations, templates, `.gitignore`, and `requirements.txt`.

No commit or push has been completed.

## Useful Commands

```powershell
cd D:\Backend
.\env\Scripts\Activate.ps1
python manage.py check
python manage.py makemigrations --check --dry-run
python manage.py showmigrations
python manage.py runserver
```

## Collaboration Preference

The user wants to learn by making most subcategory feature edits personally. Explain changes step by step and avoid editing files unless the user explicitly asks for an edit.
