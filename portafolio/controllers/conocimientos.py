from config.conexion_bd import base_de_datos
from models.conocimientos import ConocimientoModel


def devolverConocimientos():
    # SELECT * FROM CONOCIMIENTOS;
    conocimientos = base_de_datos.session.query(ConocimientoModel).all()
    print(conocimientos)
    return conocimientos
