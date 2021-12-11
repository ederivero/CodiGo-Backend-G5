# Listas
dias = ['Lunes', 'Martes', 'Miercoles']

# metodo para agregar un nuevo valor a la lista
dias.append('Jueves')

print(dias)
# metodo para eliminar un valor de la lista
dias.remove('Martes')
print(dias)
# dias.clear()
print(dias)

otros_dias = ['Sabado','Domingo']

# para combinar dos o mas listas
# El + en listas sirve para concatenar
dias_semana = dias + otros_dias 
print(dias_semana)

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