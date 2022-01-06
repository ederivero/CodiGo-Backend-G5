class Electrodomestico:
    def __init__(self):
        self.__nombre=''
        self.__precio=0.0
        self.__color=''
    
    # getter > sirve para devolver el contenido de un atributo privado
    # setter > sirve para asignar el contenido de un atributo privado que no sea en el constructor 
    # deletter > sirve para eliminar un atributo privado

    def __getNombre(self):
        return self.__nombre
    
    def __setNombre(self, nombre):
        self.__nombre = nombre
    
    def __deleteNombre(self):
        del self.__nombre

    # property > es una propiedad de las clases que sirve para indicar el comportamiento que va a tener el atributo publico en relacion al atributo privado que hemos definido con su getter, setter y deleter siendo el deleter opcional
    nombre_electrodomestico = property(__getNombre, __setNombre, __deleteNombre)
    
microondas = Electrodomestico()
microondas.nombre_electrodomestico = 'Microondas'
print(microondas.nombre_electrodomestico)
del microondas.nombre_electrodomestico