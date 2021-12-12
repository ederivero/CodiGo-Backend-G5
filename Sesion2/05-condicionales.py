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
    print(f'Si, la persona es{ persona["nombre"] } y su nacionalidad es:{persona["nacionalidad"]}')
else:
    print(f"No, La persona es {persona['nombre']} y su nacionalidad es: {persona['nacionalidad']}")    

# for
# sirve para iterar un numero limitado de veces y tiene un inicio o un numero de arranque y un fin
# generalmente el for se usa para iterar colecciones de datos ORDENADAS pero se puede usar como cualquier for
meses= ['Enero', 'Febrero', 'Marzo', 'Abril']

# para ir desde la posicion 1 hasta el final
for mes in meses[1:]:
    print(mes)

# itera todos los meses
for mes in meses:
    if mes == 'Enero':
        print('Vamos a la playa 🏖️')
    print(mes)

# for(let i=0; i< 10; i++){....}
# en el range podemos pasar hasta 3 parametros
# range(n) => el limite <n
# range(n,m) => n el inicio, m el limite (<m)
# range(n,m,o) => n el inicio, m el limite (<m), o cuantos se suma en cada ciclo
for numero in range(5,10, 2):
    print(numero)

# len() => saca la longitud de la variable
# para convertir de un tipo de dato a otro es necesario tener las siguientes consideraciones:
# * tiene que ser un tipo masomenos coherente (no tratar de convertir de una letra a un numero)
# str(121) | int(12.5) | bool(0) | float(5)

# para ir desde la mitad del arreglo al final
print(int(10.5))
for numero in range(int(len(meses)/2),len(meses)):
    print(numero)
    print(meses[numero])

# TAREAAAAAAA
personas = [
    {
    'nombre': 'Adriana',
    'edad': 25
    },
    {
    'nombre': 'Nicolas',
    'edad': 15
    },
    {
    'nombre': 'Maria',
    'edad': 23
    },
    {
    'nombre': 'Guillermo',
    'edad': 10
    }
]
# 1. Cuantas personas tienen mas de 20 años  > 2
# 2. Que personas son las que tienen menos de 20 años > Las personas son Nicolas, Guillermo
# HINT: crear una lista donde se almacenen los nombres de las personas que tienen menos de 20, un contador para contar a las personas de mas de 20

# el parametro end sirve para indicar como queremos que termine la impresion de pantalla, si le modificamos entonces ya no hara el clasico SALTO DE LINEA sino que terminara con dicho caracter
print('aaaaaa',end='')
print('bbbbbbbb')
