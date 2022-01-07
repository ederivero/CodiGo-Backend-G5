CREATE DATABASE pruebas;
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