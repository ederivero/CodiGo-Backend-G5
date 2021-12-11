# Condicional IF ELSE
edad = 20
edad_minima = 18
print( edad >= edad_minima)
# Para que ingrese al if siempre la condicion tiene que ser VERDADERA 
if edad >= edad_minima:
    # TODO: aca implementare el accion cuando sea mayor de edad
    print('Eres mayor de edad, puedes ingresar')
elif edad > 15:
    print('Puedes ingresar solo a los quinceañeros')
elif edad > 10:
    print('Puedes ingresar al zoo gratis')
else:
    print('Eres menor de edad, no puedes hacer nada')

print('Yo siempre me ejecuto')
    

# operador ternario
# es para devolver un valor y almacenarlo en una variable y en una sola linea de codigo
resultado = 'eres mayor de edad' if edad >= edad_minima else 'Eres menor de edad'
print(resultado)

# tengo el siguiente numero
numero =6
# como saber si es par o impar

# luego de haber terminado con el if hacer uso del operador ternario
if numero % 2 == 0:
    print('es par')
else:
    print('es impar')

resultado = 'es par' if numero % 2 == 0 else 'es impar'
print(resultado)

persona = {
    'nombre': 'Raul',
    'nacionalidad': 'Boliviana',
    'sexo': 'M'
}

# validar si la persona es Raul y ademas es Peruana
# Si, la persona es _____ y su nacionalidad es ______
# La persona es ______ y su nacionadad es ______
if (persona['nombre'] == 'Raul' and persona['nacionalidad']== 'Peruana'):
    print('Si, la persona es', persona['nombre'], 'y su nacionalidad es:', persona['nacionalidad'])
else:
    print('No, La persona es', persona['nombre'], 'y su nacionalidad es:', persona['nacionalidad'])    