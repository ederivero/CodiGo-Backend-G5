class Persona:
    # variables > atributos
    # nombre = ''
    # edad= 0
    # estatura=0.0

    # funcion > metodo
    def saludar(self):
        print('Hola!',self.nombre)

    # constructor > es el encargado de inicializar los atributos de la clase
    # SIEMPRE EN TODO METODO al comienzo como primer parametro tiene que ir el self (sirve para referenciar a la copia que estamos usando) 
    def __init__(self, nombre_de_la_persona, edad_persona, estatura_persona, sexo_persona='NS/NO'):
        self.nombre = nombre_de_la_persona
        self.edad = edad_persona
        self.estatura = estatura_persona
        self.sexo = sexo_persona

# cuando una variable le asignamos una clase, pasa a llamar una instancia de la clase (copia de la clase con todos sus atributos y metodos)
eduardo = Persona(nombre_de_la_persona='Eduardo', edad_persona=20, estatura_persona=1.89)
print(eduardo.nombre)
print(eduardo.sexo)
eduardo.sexo = 'Masculino'
print(eduardo.sexo)
eduardo.saludar()