# variable numerica
numero= 10
numero2 = 1.0

# variables de texto o string
nombre = "Eduardo"
apellido = 'Ramiro'

html='''<html>
<p>
</p>'''

html= """<html>
<p>
</p>"""

print('holaaa :)')

print(type(nombre))
# str = string
# int = integer
# float = float
print(type(numero))
print(type(numero2))
#bool = boolean 

soltero= True
calor=False
print(type(soltero))


# VARIABLES que tienen varios VALORES
# ARREGLOS > LISTAS LIST
edades = [10 , 12, 40, 60 , 'Eduardo', 14.5, False, [1, 2]]

# JSON (JavaScript Object Notation) | Diccionario
# Nota : Si una llave se repite su valor sera modificado y se perdera el anterior valor
curso = {
    'nombre': 'Backend',
    'nombre': 'Frontend',
    'dificultad': 'Dificil',
}

print(curso['dificultad'])