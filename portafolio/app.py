from flask import Flask, render_template
from config.conexion_bd import base_de_datos
from controllers.conocimientos import devolverConocimientos
from dotenv import load_dotenv
from os import environ

load_dotenv()

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

base_de_datos.init_app(app)
base_de_datos.create_all(app=app)


@app.route('/', methods=['GET'])
def inicio():
    conocimientos = devolverConocimientos()
    return render_template('inicio.jinja', nombre='Eduardo', conocimientos=conocimientos)


if __name__ == '__main__':
    app.run(debug=True)
