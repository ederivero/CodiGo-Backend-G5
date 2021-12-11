# Listas
dias = ['Lunes', 'Martes', 'Miercoles']

# metodo para agregar un nuevo valor a la lista
dias.append('Jueves')

print(dias)
# metodo para eliminar un valor de la lista
dias.remove('Martes')
print(dias)

# Limpia toda la lista
dias.clear()
print(dias)

otros_dias = ['Sabado','Domingo']

# para combinar dos o mas listas
# El + en listas sirve para concatenar
dias_semana = dias + otros_dias 
print(dias_semana)

# Tuplas
# coleccion se parece a unalista PERO la tupla no se puede modificar sus valores una vez creada
alumnos= ('Eduardo', 'Pedro', 'Ana', 'Roberta')
# se usa para almacenar algunos valores que nunca va a cambiar su contenido
CONFIGURACION = (
    {
        'Nombre':'API_KEY', 
        'Valor': 'xxxxxx.xxxx.xxxx'
    }, 
    {
        'Nombre':'Sendgrid', 
        'Valor': 'asdasdasdadasda'
    })
CONFIGURACION = ('asdasdasdasdasd', 'asdakjahsdfjkahds' , '127893687ca8s7da')
# Si una tupla internamente tiene otra coleccion de datos que si se puede modificar entonces normal se podra cambiar su valor, sin embargo si tiene algun tipo de dato primitivo (STR, INT, FLOAT) ahi si entrara a tallar las propiedades de la tupla que no se pueden modificar sus valores

# alumnos[0] = 'Juan'
# CONFIGURACION[0] = 'XD'
print(CONFIGURACION[0])

print(CONFIGURACION)

# DICCIONARIOS
# coleccion de elementos que estan INDEXADOS cuentan con una LLAVE (o clave) y su valor o contenido, se pueden modificar el contenido y ademas se puede crear nuevas llaves
persona= {
    'nombre': 'Eduardo',
    'correo': 'ederiveroman@gmail.com',
    'direcciones': [
        {
            'calle': 'xxxx 1234',
            'dpto': 'arequipa'
        },
        {
            'calle': 'yyyyy 4567',
            'dpto': 'lima'
        }
    ],
    'est_civil': 'soltero'
}
persona['estatura']= '1.95'

print('Para saber las llaves del diccionario:',persona.keys())
print('Para saber el contenido de todo el diccionario:', persona.values())


# CONJUNTOS
# Es la unica coleccion de datos DESORDENADA , si permiten agregar nuevos valores
colores = {'rojo', 'verde', 'amarillo', 'azul'}

# para eliminar un valor del conjunto
colores.remove('rojo')
# para agregar nuevos valores al conjunto
colores.add('mostaza')
print(colores)






# VARIABLES MUTABLES / INMUTABLES
# Variables mutables son colecciones de datos como LISTAS, DICCIONARIOS, TUPLAS y CONJUNTOS
# Variables inmutables son las variables de tipo primitivo como los INT, STR, FLOAT, BOOLEAN, DATE..
nombre1= 'Eduardo'
nombre2 =nombre1
nombre1 = 'Ruben'

lista1 = [1,2,3,4,5]

lista2 = lista1
lista3 = lista1[:]
lista1[0]= 50
print(id(lista1))
print(id(lista2))
print(id(lista3))
print('La lista 1 es:', lista1)
print('La lista 2 es:', lista2)
print('La lista 3 es:', lista3)


