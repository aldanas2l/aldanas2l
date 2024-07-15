import mysql.connector

def get_connection():
    connection = None
    cursor = None
    try:
        connection = mysql.connector.connect(
            host= "localhost",
            user="root",
            password="",
            database="multifacetic"
        )
        cursor = connection.cursor()
        print("Conexión exitosa")
        query= "SELECT * FROM reservas"
        cursor.execute(query)
        results = cursor.fetchall()
        for row in results:
            print(row)

    except mysql.connector.Error as err:
        print(f"Error: {err}")

    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()

if __name__ == "__main__":
    get_connection()
