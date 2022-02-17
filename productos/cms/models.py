from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .authManager import UsuarioManager

class ProductosModel(models.Model):
    productoId = models.AutoField(
        primary_key=True,
        null=False,
        db_column='id',
        unique=True
    )

    productoNombre = models.CharField(
        max_length=100,
        null=False,
        db_column='nombre'
    )

    productoPrecio = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        db_column='precio'
    )

    class Meta:
        db_table= 'productos'
        ordering=['-productoPrecio']


class UsuariosModel(AbstractBaseUser, PermissionsMixin):
    """Este modelo es un modelo que modificara la creacion de la tabla auth_user que viene por defecto dentro de todos los proyectos de django"""
    TIPO_USUARIO = [
        (1, 'ADMIN'),
        (2, 'CLIENTE'),
        (3, 'COLABORADOR')
    ]

    usuarioId = models.AutoField(
        db_column='id',
        primary_key=True,
        unique=True
    )

    usuarioNombre = models.CharField(
        max_length=50,
        db_column='nombre',
        null=False,
        verbose_name='nombre'
    )

    usuarioCorreo = models.EmailField(
        db_column='correo',
        null=False,
        unique=True,
        verbose_name='correo'
    )

    usuarioTipo = models.IntegerField(
        choices=TIPO_USUARIO,
        db_column='tipo_usuario',
        default=2
    )

    password = models.TextField()

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    # comportamiento del modelo al momento de realizar la creacion de un superuser por la consola o terminal
    objects = UsuarioManager()

    # ahora defino la columna que sera la encargada de validar que el usuario sea unico
    USERNAME_FIELD = 'usuarioCorreo'

    # sirve para indicar que campos van a ser solicitados cuando se cree el superuser en la terminal
    REQUIRED_FIELDS = ['usuarioNombre', 'usuarioTipo']
    class Meta:
        db_table = 'usuarios'