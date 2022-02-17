from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView
from .serializers import RegistroModelSerializer, RegistroSerializer


class RegistroController(CreateAPIView):
    serializer_class = RegistroModelSerializer

    def post(self, request):
        print(request.data)
        data = self.serializer_class(data=request.data)
        print(data)
        if data.is_valid():
            nuevoUsuario = data.save()
            resultado = self.serializer_class(instance=nuevoUsuario)
            return Response({'message': 'Usuario creado exitosamente', 'usuario': resultado.data})
        else:
            return Response({'errores': data.errors})
