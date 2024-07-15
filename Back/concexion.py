import mysql.connector
'''
conexion= mysql.connector.conect(
    user='root',
    pasword='root',
    host='localhost',
    database='multifacetic',
    port='',
)'''
def get_conenection():
    config = {
        'user':'root',
        'pasword': '',
        'host':'localhost',
        'database':'multifacetic',
        'raise_on_warning': True
    }

    try:
        connection =mysql.connector.connect(**config)
        return connection
    except mysql.connector.Error as err:
        print (f"Error: {err}")
        return None