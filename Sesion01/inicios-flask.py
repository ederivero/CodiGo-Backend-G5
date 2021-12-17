from flask import Flask

# en python tenemos varias variables que son de uso propio de python no podemos modificar ni alterar
# __main__ > esta variable sirve para indicar si estamos en el archivo principal del proyecto

app = Flask(__name__)

app.run()