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
        default='NO_ESPECIFICA', # si no se proporciona un valor inicial, entonces este sera el valor por defecto
        max_length=50
    )

    # ImageField > sirve para almacenar imagenes PEEEERO solamente guardara en la bd su ubicacion del archivo, y el archivo como tal lo guardara en el proyecto
    personaFoto = models.ImageField(
        db_column='foto',
        upload_to= 'personas/', # es la carpeta donde se almacenera estos archivos dentro del proyecto
        null= True, 
    )

    class Meta:
        # sirve para pasar metadata al padre, a la configuracion del modelo (Model)
        db_table = 'personas' # modificaremos el nombre con el que se guardara en la bd
        # para modificar el ordenamiento de manera personalizada
        # ordering= ['-email','apellido'] # asc SELECT * ...... ORDER BY email DESC, apellido ASC
        # para crear una clausula unica e irrepetible entre dos o mas columnas
        # unique_together= [['nombre', 'email'],['nombre','apellido','estado_civil']]
        

class CitaModel(models.Model):
    opcionesEstado = [
        ('ACTIVA','ACTIVA'),
        ('CANCELADA','CANCELADA'),
        ('POSPUESTA','POSPUESTA'),
    ]
    # un autoField vendria a ser un campo entero autoincrementable
    # NOTA: solamente puede haber como maximo un autofield por tabla
    citaId = models.AutoField(
        primary_key=True, 
        unique=True, 
        db_column='id')
    
    citaDescripcion = models.TextField(
        db_column='descripcion',
        null=False,
    )

    citaFecha = models.DateTimeField(
        db_column='fecha',
        null=False
    )

    citaLatitud = models.FloatField(
        db_column='latitud',
        null=False,
    )

    citaLongitud = models.FloatField(
        db_column='longitud',
        null=False,
    )
    
    citaEstado = models.CharField(
        choices=opcionesEstado,
        db_column='estado',
        null=False,
        max_length=50
    )

    # campos que registran la fecha de manera automatica cuando se crea un nuevo registro y cuando se actualiza un registro > campos de auditoria o audit fields
    createdAt = models.DateTimeField(
        auto_now_add=True, # agarrara la hora y fecha actual de la bd y pondra ese valor en este campo de manera automarica cuando se cree un nuevo registro
        db_column='created_at'
    ) 
    updatedAt = models.DateTimeField(
        auto_now= True, #modificara el valor cada vez que se haga una modificacion en alguna columna del registro, la que sea y le modificara con su valor actual de la hora y fecha de la bd
        db_column='updated_at'
    )

    # ahora creamos las relaciones
    # https://docs.djangoproject.com/en/4.0/topics/db/examples/many_to_one/
    # que va a suceder cuando se elimine el padre (el citador):
    # CASCADE > es que primero se elimina el citador y luego se eliminan sus citas
    # PROTECT > protegera la eliminacion e indicar que no se puede por lo que manualmente tendremos que eliminar las citas para luego eliminar al citador
    # SET_NULL > eliminar a la persona y en su citas pondra el valor de null
    # DO_NOTHING > permite la eliminacion peeero no hace nada en la columna fk, esto generara una mala integridad de los datos ya que tendremos informacion apuntando a personas que no existe
    # RESTRICT > no permite la eliminacion como el PROTECT pero lanzara un error de tipo RestrictedError
    # https://docs.djangoproject.com/en/4.0/ref/models/fields/#arguments
    citador = models.ForeignKey(
        to=PersonaModel, 
        db_column='citador_id',
        on_delete=models.PROTECT,
        related_name='personaCitas' # servira para ingresar desde la persona a las citas, se usa para las relaciones inversas (inverse relations), si no se declara Django pondra un valor diferente
        )

    citado = models.ForeignKey(
        to=PersonaModel, 
        db_column='citado_id',
        on_delete=models.PROTECT,
        related_name='personaCitadas'
        )    
    
    class Meta:
        # la tabla se llame citas
        db_table = 'citas'
        # la fecha debe de ser unica con el citador
        # la fecha debe de ser unica con el citado
        # no se indica el nombre de la columna de la base de datos, sino que se indica el nombre del atributo de la clase
        unique_together= [['citaFecha','citador'], ['citaFecha','citado']]
        # ordenamiento sea por la fecha mas proxima (desc)
        ordering= ['-citaFecha']
