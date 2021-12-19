from flask import Flask, request
from flask_cors import CORS
# el request nos da toda la informacion del cliente

app = Flask(__name__)
# si solamente le pasamos la aplicacion o la instancia de flask habilitara los CORS para todos los dominios y para todos los metodos 
CORS(app=app)

mis_productos = [{
    "nombre":"Paneton con arto bromato",
    "precio": 17.50,
    "disponible": True,
    "fecha_vencimiento": "2022-01-14"
}, {
    "nombre":"Chocolate con arta azucar",
    "precio": 6.90,
    "disponible": False,
    "fecha_vencimiento": "2021-12-30"
}]

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

@app.route('/productos', methods= ['GET', 'POST'])
def productos():
    if request.method == 'GET':
        return {
            'data': mis_productos,
            'message': 'Los productos son:',
            'ok': True
        }

    elif request.method == 'POST':
        data = request.get_json()
        mis_productos.append(data) # insertando un registro en una bd (INSERT INTO ...)
        return {
            'data': data,
            'message': 'Producto agregado exitosamente',
            'ok': True
        }, 201

# al nosotros ponerle el tipo de dato que podemos aceptar y si al momento de enviar no es ese tipo de dato entonces se rechazara automaticamente la peticion con un estado 404 NOT FOUND
@app.route('/producto/<int:id>', methods=['GET', 'PUT'])
def producto(id):
    if request.method == 'GET':
        # Solucion: Sacar la longitud de la lista y validar si la posicion deseada es MENOR que la longitud si es MAYOR entonces no existe len(lista)

        # recibir el ID que vendria a ser LA POSICION DE LA LISTA (recordemos que empieza en 0) y dar el producto a buscar, SI NO EXISTE el producto entonces emitir un message que diga que el producto no existe 
        # {
        #     'data': null,
        #     'message': 'El producto no existe',
        #     'ok': False
        # }
        # Si el producto si existe entonces dar el producto
        if (id < len(mis_productos)):
            return {
                'ok': True,
                'data': mis_productos[id],
                'message':'El producto es:'
            }
        else:
            return {
                'ok': False,
                'data': None,
                'message': 'El producto no existe'
            }
    elif request.method == 'PUT':
        data = request.get_json()
        if(id < len(mis_productos)):
            # sobreescribir la informacion en esa posicion con la nueva que nos esta enviando el front
            mis_productos[id] = data
            return {
                'ok': True,
                'data': mis_productos[id],
                'message': 'Producto actualizado exitosamente'
            }, 201
        else:
            return {
                'ok': False,
                'data': None,
                'message': 'El producto con el id {} no existe'.format(id)
            }
    

if __name__ == '__main__':
    app.run(debug=True)



