from flask import Flask, request
# el request nos da toda la informacion del cliente

app = Flask(__name__)

# url? no, la url es el dominio mas el endpoint => 127.0.0.1:5000/
# endpoint
@app.route('/', methods=['POST','GET'])
def inicio():
    # request.method > nos da el metodo que esta queriendo acceder el cliente
    print(request.method)

    if request.method == 'POST':
        # request.get_json() > captura el json enviado por el cliente y lo convierte automaticamente a un diccionario para que python lo pueda entender
        print(request.get_json())
        # validar si hay el nombre y si lo hay entonces retornar un saludo con ese nombre EJEMPLO: Hola, Eduardo!
        # si no hay el nombre entonces indicar Necesito la informacion con un estado 400 (BAD REQUEST)
        data = request.get_json()

        # get(llave) > sirve para extraer la informacion de un diccionario segun su llave y si no existe esa llave entonces retornara VACIO o NULL, ADICIONAL: como segundo parametro se puede indicar el valor si es que no existe
        if(data.get('nombre')):
            nombre = data.get('nombre')
            return 'Hola, {}!'.format(nombre)
        else:
            return 'Necesito la informacion', 400

    elif request.method == 'GET':
        # cuando retornamos una respuesta puede contener hasta dos parametros en el cual el primero sera la data enviada y el segundo sera el estado HTTP
        return 'Bienvenido a mi API de Productos', 200

@app.route('/productos')
def productos():
    pass


if __name__ == '__main__':
    app.run(debug=True)



