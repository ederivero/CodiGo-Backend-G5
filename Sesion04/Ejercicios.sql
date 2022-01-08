-- 1. Todas los alumnos que comience con la letra A y tenga una C
SELECT * FROM ALUMNOS WHERE nombre like 'A%C%';
-- 2. Mostrar cuantos alumnos tienen como correo @hotmail.com
SELECT count(*) 'conteo','alumnos' texto 
FROM ALUMNOS WHERE correo like '%@hotmail.com';
-- 3. Traer todos los alumnos que lleven comunicacion (id=1)
SELECT * 
FROM alumnos as a 
	inner join alumnos_cursos as ac ON a.id = ac.alumno_id
WHERE curso_id = 1;
-- 4. Contabilizar cuantos alumnos hay de cada curso de mayor a menor

-- 10 comunicacion
-- 7  ingles
-- 2  french
-- 1  cta

SELECT cursos.nombre,count(alumnos_cursos.curso_id) 
FROM alumnos INNER JOIN alumnos_cursos 
	ON alumnos.id=alumnos_cursos.alumno_id 
	INNER JOIN cursos ON  alumnos_cursos.curso_id=cursos.id
GROUP BY cursos.nombre
ORDER BY 2 ASC;
