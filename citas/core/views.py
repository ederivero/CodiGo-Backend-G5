from rest_framework.generics import CreateAPIView

class PersonasController(CreateAPIView):
    def post(self):
        """se ejecutara todo lo relacionado con el metodo post de este controlador"""
        return 'Hola amigos'