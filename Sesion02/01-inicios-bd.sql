CREATE DATABASE pruebas;

USE pruebas;
-- https://dev.mysql.com/doc/refman/8.0/en/data-types.html
-- https://dev.mysql.com/doc/refman/8.0/en/create-table.html#create-table-types-attributes
CREATE TABLE personas(
	-- Ahora definimos las columnas pertenecientes a esta tabla
    -- solamente se puede tener una sola pk (primary key) por tabla y ademas una sola columna
    -- auto incrementable
    id INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL, -- solamente se podran almacenar numeros
    nombre VARCHAR(100) NOT NULL, -- se podran almacenar caract. HASTA 100 como maximo
    dni CHAR(8) UNIQUE NOT NULL, -- siempre se almacenaran 8 caracteres
    fecha_nacimiento DATE, -- seran solamente fecha
    created_at DATETIME NOT NULL, -- sera fecha y hora , minuto, segundo
    sexo ENUM('MASCULINO','FEMENINO','OTRO','HELICOPTERO'), -- solamente podra tener los valores definidos en el parentesis
    estado BOOL -- o sera true o false
);

-- sirve para modificar el nombre de una columna
-- ALTER TABLE personas RENAME COLUMN nombre TO nombrecito;


-- AHORA INGRESAREMOS LOS DATOS
-- DML (Data Manipulation Language) Lenguaje de Manipulacion de Datos
-- INSERT : ingresar nueva informacion a una tabla en especifico
INSERT INTO personas (id, nombre, dni, fecha_nacimiento, sexo, estado, created_at) VALUES
                     (1, 'Eduardo', '73500749', '1992-08-01', 'MASCULINO', true, now());


INSERT INTO personas (id, nombre, dni, fecha_nacimiento, sexo, estado, created_at) VALUES
                     (1, 'Rogelio', '15964657', '1992-08-01', 'masculino', true, now());

-- SELECT : leer los datos de una determinada tabla o tablas
SELECT nombre, id FROM personas;

-- DDL (Data Definition Language) Lenguaje de Definicion de Datos
-- CREATE : Crear tablas , bases de datos y funciones y procedimientos almacenados entre otros

-- DROP: Eliminar completamente toda una tabla , una base de datos, una estructura 
-- esto NO elimina solamente el contenido de la tabla SINO que elimina toda su estructura
DROP TABLE personas;






