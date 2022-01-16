from rest_framework.generics import CreateAPIView
from .serializers import PersonasSerializer
from rest_framework.response import Response

class PersonasController(CreateAPIView):
    # sera el encargado de moldear la informacion que nos llega a nuestro backend y a su vez de formatear la information para que pueda ser enviada al front
    serializer_class=PersonasSerializer
    def post(self, request):
        print(request)
        """se ejecutara todo lo relacionado con el metodo post de este controlador"""
        return Response(data='Hola amigos')