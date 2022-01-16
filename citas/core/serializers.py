from rest_framework import serializers
from .models import PersonaModel

class PersonasSerializer(serializers.ModelSerializer):
    # si el serializador es correspondiente a un Modelo entonces tendremos que pasar informacion a su metada indicando a que modelo corresponde
    class Meta:
        # model => indica en que modelo se tiene que basar para traer toda su configuracion (que serian las columnas y sus tipos de datos) para que al momento de serializar (formatear) lo convierta al tipo de dato correcto
        model= PersonaModel
        # fields > indica que columnas (atributos) va a utilizar de ese modelo este serializador, si queremos que use todos entonces pondremos de valor '__all__', sin embargo si queremos que solamente use determinadas columnas seria asi: ['personaNombre', 'personaCorreo']
        fields= '__all__'
