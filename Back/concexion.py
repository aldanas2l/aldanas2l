#importe api asicrona asycn
'''from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}
import mysql.connector

conexion= mysql.connector.conect(
    user='root',
    pasword='root',
    host='localhost',
    database='multifacetic',
    port='',
)'''
import mysql.connector

def get_connection():
    config = {
        'user': 'root',
        'password': '',
        'host': 'localhost',
        'database': 'multifacetic',
        'raise_on_warnings': True
    }

    try:
        connection = mysql.connector.connect(**config)
        return connection
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return None




