# Operadores aritmeticos
# Suma, resta, multiplicacion, division, exponente, cociente, modulo

numero1= 10
numero2= 30

resultado = numero1 + numero2
print(resultado)
print('El resultado es: ',resultado, 'y nada mas')

print('El resultado es {} y nada mas {}'.format(resultado, numero1))
print(f'El resultado es {resultado}')

print('El resultado es {1} y nada mas {0}'.format(numero1, resultado))

# resta
resultado = numero1 - numero2

# multiplicacion
resultado = numero1 * numero2

#division
resultado = numero1 / numero2
# 0.33333333333333333....
print('{:.1f}'.format(resultado))
print(f'{resultado:.1f}')

# el modulo
resultado = numero1 % numero2
print('El modulo es:',resultado)

# el cociente
resultado = numero1 // numero2
print('El cociente es:',resultado)

# el exponente
resultado = numero1 ** numero2
print('El exponente es:', resultado)

texto = "Hola mi nombre es Eduardo"
# las variables de tipo STR tambien pueden ser accedidas mediante sus posiciones como si fuese una lista