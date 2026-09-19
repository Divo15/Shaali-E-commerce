from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.shortcuts import redirect, render
from django.utils.http import url_has_allowed_host_and_scheme
from django.views.decorators.http import require_POST

from .forms import RegistrationForm


def register(request):
    if request.user.is_authenticated:
        return redirect('home')

    form = RegistrationForm(request.POST or None)

    if request.method == 'POST' and form.is_valid():
        form.save()
        return redirect('accounts:login')

    return render(request, 'register.html', {'form': form})


@require_POST
def logout(request):
    auth_logout(request)
    return redirect('accounts:login')


def login(request):
    if request.user.is_authenticated:
        return redirect('home')

    error_message = None

    if request.method == 'POST':
        email = request.POST.get('email', '').strip()
        if not email:
            email = request.POST.get('username', '').strip()
        password = request.POST.get('password', '')

        if not email or not password:
            error_message = 'Email and password are required.'
        else:
            user = authenticate(request, username=email, password=password)

            if user is not None:
                auth_login(request, user)
                next_url = request.POST.get('next') or request.GET.get('next')

                if next_url and url_has_allowed_host_and_scheme(
                    next_url,
                    allowed_hosts={request.get_host()},
                    require_https=request.is_secure(),
                ):
                    return redirect(next_url)

                return redirect('home')

            error_message = 'Invalid email or password.'

    return render(
        request,
        'signin.html',
        {'error_message': error_message},
    )
