self.conn = mysql.connector.connect(
host=host,
user=user,
password=password,
database=database
)



class Cliente:
    def __init__(self,id,nombre,apellido,edad,detalles,dia_mes,hora,tratmiento):
        self.id=id
        self.nombre=nombre
        self.apellido=apellido
        self.edad=edad
        self=detalles=detalles
        self=dia_mes=dia_mes
        self.hora=hora
        self.tratamiento=tratmiento
reserva_turno=[]
def reservar_turno(id,nombre,apellido,edad,detalles,dia_mes,hora,tratmiento):
    if consultar_turno(dia_mes,hora): #¿Existe turno con misma F y H?
        return False
#Diccionario:
nuevo_turno ={
    'id': id,
    'nombre':nombre,
    'apellido':apellido,
    'edad':edad,
    'dia_mes':dia_mes,
    'hora':hora,
    'tratamiento':tratamiento
}
reserva_turno.append(nuevo_turno) #Agrego nuevo turno.
return True #Exito!