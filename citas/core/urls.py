from django.urls import path
from .views import PersonasController

urlpatterns = [
    path('personas/', PersonasController.as_view()),
]