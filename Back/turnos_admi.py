class Admin:
    def __init__(self,nombreSecretario):
        self.nombreSecretario

    def consultar_turno(id): #Busca Existencia de turno.
        for reserva_turno in reserva_turno:
            if reserva_turno['id']==id:
                return reserva_turno #Turno encontrado.
        return False #Turno no encontrado.

    #¿Necesito modificar?
    def modificar_turno(id,nombre,apellido,edad,detalles,dia_mes,hora):
        for reserva_turno in reserva_turno: #Recorrido, utilizando id
            if reserva_turno['id']==id: #si lo encuentra podremoos actualizar
                reserva_turno['id'] == mod_id
                reserva_turno['apellido'] == mod_descripcion
                reserva_turno['edad'] == mod_edad
                reserva_turno['detalles'] == mod_detalles
                reserva_turno['dia_mes'] == mod_dia_mes
                reserva_turno['hora'] ==  mod_hora
                reserva_turno['Tratamiento'] == mod_tratamiento
            return True #Despues de finalizado, con: Exito¡
    #Vista info turno
    def vista_turnos():
        print("-"*50)
        print(f)