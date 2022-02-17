from django.contrib.auth.models import BaseUserManager

class UsuarioManager(BaseUserManager):
    """Clase que me sirve para modificar el comportamiento del modelo auth_user en la terminal"""

    def create_user(self, email, nombre, tipo, password=None):
        """Creacion de un usuario comun y corriente (no necesita password)"""
        if not email:
            raise ValueError('El usuario debe tener obligatoriamente un correo')
        # normalizaremos el correo para que remueva los espacios en blanco en cualquier lado y ademas valide si cumple con el formato de un correo estandar (texto@dominio.com)
        email = self.normalize_email(email)
        # creo mi objeto de usuario PERO todavia no lo guardo en la bd
        nuevoUsuario = self.model(usuarioCorreo=email, usuarioNombre=nombre, usuarioTipo=tipo)
        # ahora encripto la contraseña
        nuevoUsuario.set_password(password)
        # ahora recien guardo en la bd
        # sirve para referenciar a la bd en el caso que tengamos varias conexiones a diferentes bases de datos, esto referenciara a la base de datos default
        nuevoUsuario.save(using= self._db)
        return nuevoUsuario


    def create_superuser(self, usuarioCorreo, usuarioNombre, usuarioTipo, password):
        """Creacion de un super usuario para que pueda acceder al panel administrativo y algunas opciones mas"""
        usuario = self.create_user(usuarioCorreo, usuarioNombre, usuarioTipo, password)
        usuario.is_superuser= True
        usuario.is_staff= True
        usuario.save(using= self._db)