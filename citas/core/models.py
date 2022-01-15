from django.db import models

# https://docs.djangoproject.com/es/4.0/ref/models/fields/#field-types
# https://docs.djangoproject.com/es/4.0/ref/models/fields/#field-options

class PersonaModel(models.Model):
    opcionesEstadoCivil = [
        ('SOLTERO', 'SOLTERO'),
        ('CASADO', 'CASADO'),
        ('VIUDO','VIUDO'),
        ('DIVORCIADO','DIVORCIADO'),
        ('COMPLICADO','COMPLICADO'),
        ('NO_ESPECIFICA', 'NO_ESPECIFICA')]

    personaId = models.AutoField(
        primary_key=True, # indica que esta columna sera la primary key de la tabla
        unique=True, # indica que no puede tener valores repetidos
        null=False,  # indica que no puede no tener valor alguno
        db_column='id') # indica el nombre que llevara en la tabla en la bd
    
    personaNombre = models.CharField(
        max_length=50, # que almacenara como maximo 50 caracteres
        unique=False,
        null=False, 
        db_column='nombre' # si no le indicamos entonces su nombre sera el mismo que el atributo (personaNombre)
        )
    
    personaApellido = models.CharField(
        max_length=50,  
        unique=False,
        null=False,
        db_column='apellido'
    )

    personaEmail = models.EmailField(
        max_length=50, 
        db_column='email', 
        null=False, 
        unique=True)

    personaFechaNacimiento = models.DateField(
        db_column='fec_nac',
    )

    personaEstadoCivil = models.CharField(
        choices= opcionesEstadoCivil,
        db_column='estado_civil',
        default='NO_ESPECIFICA' # si no se proporciona un valor inicial, entonces este sera el valor por defecto
    )

    # ImageField > sirve para almacenar imagenes PEEEERO solamente guardara en la bd su ubicacion del archivo, y el archivo como tal lo guardara en el proyecto
    personaFoto = models.ImageField(
        db_column='foto',
        upload_to= 'personas/', # es la carpeta donde se almacenera estos archivos dentro del proyecto
        null= True, 
    )