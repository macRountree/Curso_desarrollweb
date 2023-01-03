
'''
Esto puede utilizarse en los bancos para generar los ultimos movimientos
'''

def app():
    #creamos un archivo .. la desventaja de open() es que tenemos que cerrar la conexion
    archivo = open('archivo.txt', 'w')# primer parametro es el nombre, el segundo es el permiso de escritura si el permiso no existe.. open() lo creara


    #generamos numeros en archivo
    for numero in range(0,100):
        archivo.write('Esta es la linea '  + str(numero) + "\r\n")

    #cerramos el archivo para buenas practicas
    archivo.close()

app()