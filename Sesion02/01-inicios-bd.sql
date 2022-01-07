CREATE DATABASE pruebas;

USE pruebas;
-- https://dev.mysql.com/doc/refman/8.0/en/data-types.html
CREATE TABLE personas(
	-- Ahora definimos las columnas pertenecientes a esta tabla
    id INT, -- solamente se podran almacenar numeros
    nombre VARCHAR(100), -- se podran almacenar caract. HASTA 100 como maximo
    dni CHAR(8), -- siempre se almacenaran 8 caracteres
    fecha_nacimiento DATE, -- seran solamente fecha
    created_at DATETIME, -- sera fecha y hora , minuto, segundo
    sexo ENUM('MASCULINO','FEMENINO','OTRO','HELICOPTERO'), -- solamente podra tener los valores definidos en el parentesis
    estado BOOL -- o sera true o false
);

-- sirve para modificar el nombre de una columna
-- ALTER TABLE personas RENAME COLUMN nombre TO nombrecito;


-- AHORA INGRESAREMOS LOS DATOS
-- DML (Data Manipulation Language) Lenguaje de Manipulacion de Datos
-- INSERT : ingresar nueva informacion a una tabla en especifico
INSERT INTO personas (id, nombre, dni, fecha_nacimiento, sexo, estado, created_at) VALUES
                     (1, 'Eduardo', '73500749', '1992-08-01', 'M', true, now());












