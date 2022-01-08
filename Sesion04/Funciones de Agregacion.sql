SELECT * FROM ALUMNOS;
-- FUNCIONES DE AGREGACION (AGGREGATION FUCTION)
-- avg(columna) => da el promedio de una columna NUMERICA 
-- max(columna) => traera el valor maximo de los resultados
-- min(columna) => traera el valor minimo
-- count(columna) => puede ser numericos o strings
-- sum(columna) => traera el resultado de la suma de dicha columna
-- first(columna) => el primer valor
-- last(columna) => el ultimo valor

SELECT avg(id) from alumnos WHERE id between 1 and 2; -- entre [1 - 2]
SELECT avg(id) from alumnos WHERE id >= 1 and  id <=2;
SELECT max(id) from alumnos;
-- NOTA: cuando se usa alguna funcion de agregacion Y ADEMAS se usa
-- una columna comun y corriente entonces se tiene que modificar su
-- agrupacion predeterminada
SELECT count(nombre), nombre 
FROM alumnos 
WHERE id between 10 and 20
GROUP BY nombre
ORDER BY count(nombre) desc, nombre asc;

-- SELECT columnas 
-- FROM tablas [JOINS] 
-- WHERE condicionales 
-- GROUP BY col...
-- ORDER BY col...

SELECT * 
FROM cursos 
WHERE nombre LIKE '%a%' ;



