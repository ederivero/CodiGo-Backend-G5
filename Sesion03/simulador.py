from faker import Faker
from faker.providers import person, internet

objFaker = Faker()
objFaker.add_provider(person)
objFaker.add_provider(internet)

# print(objFaker.first_name()) > nombre
# print(objFaker.last_name()) > apellido
# print(objFaker.free_email()) > correo
# print(objFaker.name())

cursos = ['COMUNICACION', 'CTA', 'INGLES', 'FRENCH']

# HACER UN FOR para que en cada item del curso me imprima lo siguiente
# INSERT INTO CURSOS (nombre) values ('COMUNICACION');
# INSERT INTO CURSOS (nombre) values ('CTA');

# for curso in cursos:
#     print(f"INSERT INTO CURSOS (nombre) values ('{curso}');")

    # print("INSERT INTO CURSOS (nombre) values ('{}');".format(curso))

# crear 100 alumnos
# range
# INSERT INTO ALUMNOS (nombre, apellido, correo) VALUES(....)
# hacer un for que se repita 100 veces

# for x in range(1,100):
#     nombre = objFaker.first_name()
#     apellido = objFaker.last_name()
#     correo = objFaker.free_email()

#     print(f"INSERT INTO ALUMNOS (nombre, apellido, correo) VALUES('{nombre}','{apellido}','{correo}');")

# TODO HOMEWORK
# hacer un for 200 veces encontrar un numero random entre 1 y 100 (que seria el alumno) y luego un numero random entre 1 y 4 (que seria los cursos), 
# 50 2 (0)
# 75 3 (1)
# 80 2 (2)
# 50 2 < (3)
# 50 1 (3)
# ... (200)
# si se vuelve a repeter el mismo alumno con el mismo curso entonces obviarlo PERO no incrementar el for
# ADICIONAL: no se puede repetir ninguno de los registros siguientes:
# print(f'INSERT INTO ALUMNOS_CURSOS (ALUMNO_ID, CURSO_ID) VALUES(1,3);')
# print(f'INSERT INTO ALUMNOS_CURSOS (ALUMNO_ID, CURSO_ID) VALUES(10,2);')
# print(f'INSERT INTO ALUMNOS_CURSOS (ALUMNO_ID, CURSO_ID) VALUES(32,1);')
# print(f'INSERT INTO ALUMNOS_CURSOS (ALUMNO_ID, CURSO_ID) VALUES(55,4);')
# print(f'INSERT INTO ALUMNOS_CURSOS (ALUMNO_ID, CURSO_ID) VALUES(86,3);')
# print(f'INSERT INTO ALUMNOS_CURSOS (ALUMNO_ID, CURSO_ID) VALUES(10,1);')

data = [[1,3],[10,2],[32,1],[55,4],[86,3],[10,1]]
x = 0
while x < 200:
    curso = objFaker.random_int(min=1, max=4)
    alumno = objFaker.random_int(min=1, max=100)
    if [alumno, curso] not in data:
        x+=1
        print(f'INSERT INTO ALUMNOS_CURSOS (ALUMNO_ID, CURSO_ID) VALUES({alumno}, {curso});')
        data.append([alumno, curso])