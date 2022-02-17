from rest_framework import serializers
from .models import UsuariosModel


class RegistroSerializer(serializers.Serializer):
    email = serializers.EmailField()
    nombre = serializers.CharField(max_length=10)


class RegistroModelSerializer(serializers.ModelSerializer):
    def save(self):
        # el validated_data es un atributo que se crea luego de llamar al metodo is_valid en el controlador y guardara en un diccionario todos los atributos de la clase
        usuarioNombre = self.validated_data.get('usuarioNombre')
        usuarioCorreo = self.validated_data.get('usuarioCorreo')
        usuarioTipo = self.validated_data.get('usuarioTipo')
        password = self.validated_data.get('password')
        is_superuser = self.validated_data.get('is_superuser')

        nuevoUsuario = UsuariosModel(usuarioNombre=usuarioNombre,
                                     usuarioCorreo=usuarioCorreo,
                                     usuarioTipo=usuarioTipo,
                                     is_superuser=is_superuser)

        nuevoUsuario.set_password(password)
        nuevoUsuario.save()
        return nuevoUsuario

    class Meta:
        model = UsuariosModel
        # definir que vamos a utilizar todas las columnas
        # fields= '__all__'

        # definir que columnas vamos a utilizar
        # fields = ['usuarioCorreo', 'password']

        # definir que columnas NO vamos a utilizar
        exclude = ['user_permissions',
                   'is_staff', 'groups', 'last_login', 'is_active']
