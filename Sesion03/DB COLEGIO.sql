-- HACER UNA BASE DE DATOS EN LA CUAL SE MANEJE EL DIRECTORIO DE ALUMNOS DE UN COLEGIO
-- EL COLEGIO SOLO TIENE UN AÑO Y UNA SECCION PERO SI MANEJA VARIOS CURSOS QUE SON
-- COMUNICACION, CTA, INGLES, FRENCH
-- EL ALUMNO TIENE UN NOMBRE, APELLIDO, CORREO
-- UN ALUMNO PUEDE LLEVAR VARIOS CURSOS Y UN CURSO PUEDE TENER VARIOS ALUMNOS
-- es que las FK y las PK's no pueden ser nulas 
CREATE DATABASE colegio;
use colegio;

CREATE TABLE ALUMNOS(
	id int not null primary key auto_increment,
    nombre varchar(100),
    apellido varchar(100),
    correo varchar(50)
);
CREATE TABLE CURSOS(
	id int not null primary key auto_increment,
    nombre varchar(100)
);

CREATE TABLE ALUMNOS_CURSOS(
	id int not null primary key auto_increment,
    curso_id int not null,
    alumno_id int not null,
    foreign key (curso_id) references cursos(id),
    foreign key (alumno_id) references alumnos(id)
);

