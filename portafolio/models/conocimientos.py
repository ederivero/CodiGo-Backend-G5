from sqlalchemy import Column, types
from config.conexion_bd import base_de_datos
# https://docs.sqlalchemy.org/en/14/core/type_basics.html?highlight=datatypes#generic-types


class ConocimientoModel(base_de_datos.Model):
    __tablename__ = 'conocimientos'

    conocimientoId = Column(
        name='id',
        type_=types.Integer,
        autoincrement=True,
        unique=True,
        nullable=False,
        primary_key=True)

    conocimientoNombre = Column(
        type_=types.String(100),
        name='nombre',
        unique=True,
        nullable=False,
    )
