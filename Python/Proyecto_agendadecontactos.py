'''
Se reaizara un proyecto en el cual crearemos archivos con el contacto de cada persona
podemos editar ese contacto.. verlos, buscarlos y eliminar cada contacto Todo atraves de un menu (CRUD)
Cada contacto que se cree se creara un archivo (es mas recomendable utilizar un DB pero es para practicar)
'''
#importamos una libreria en el cual tiene funciones para manejar archivos

import os
 #primero crearemos la funcion principal
CARPETA = 'contactos/' #carpeta de contactos es global porque no cambiara por es se pone en mayusculas
EXTENSION = '.txt'

class Contacto:
    def __init__(self, nombre, telefono, categoria):
        self.nombre = nombre
        self.telefono = telefono
        self.categoria = categoria


def app():
    crear_directorio()
    
    #mostrar menu

    mostrar_menu()

    #Preguntamos al usuario la accion que preguntamos
    preguntar = True

    while preguntar:
        opcion = input('Seleccione una opcion numerada : \r\n')
        opcion = int(opcion)

        if opcion == 1:
            print('Agregar contacto')
            agregar_contacto()
            preguntar = False
        elif opcion == 2:
            print('Editar contacto')
            editar_contacto()
            preguntar = False
        elif opcion == 3: 
            print('Ver contacto')
            preguntar = False
        elif opcion == 4: 
            print('Buscar contacto')
            preguntar = False
        elif opcion == 5: 
            print('Eliminar contacto')
            preguntar = False
        else:
            print('Opcion no Valida. Intente de nuevo')

def editar_contacto():
    print('escribe el nombre del contacto a editar')
    nombre_anterior = input('Nombre del contacto : \r\n ')

    #Revisamos si existe el contacto
    existe = existe_contacto(nombre_anterior)

    if existe:
        with open(CARPETA + nombre_anterior + EXTENSION, 'w') as archivo:
            nombre_contacto = input('Agrega el nuevo nombre: \r\n')
            telefono_contacto = input('Agrega el nuevo telefono del contacto: \r\n')
            categoria_contacto = input(' Agrega la nueva Categoria : \r\n')

            #instanciamos la clase
            contacto = Contacto(nombre_contacto,telefono_contacto,categoria_contacto)

            #Escribimos en el archivo
            archivo.write('Nombre: ' + contacto.nombre + '\r\n') #como ya instanciamos arriba.. solo nombramos el objeto
            archivo.write('Telefono: ' + contacto.telefono + '\r\n')
            archivo.write('Categoria: ' + contacto.categoria + '\r\n')


            #Tambien tenemos que actualizar el nombre del archivo/carpeta
            os.rename(CARPETA + nombre_anterior + EXTENSION,
                      CARPETA + nombre_contacto + EXTENSION)

            #Se agrego correctamente
            print('\r\n   Contacto editado correctamente \r\n ')
    else:
        print('Este contacto no existe')
    
    #Reiniciamos
    app()

    
def agregar_contacto():
    print('Escribe los datos para agregar contacto Nuevo:')
    nombre_contacto = input('Nombre del contacto: \r\n' )

    #Aqui validamos si ya existe el contacto
    existe = existe_contacto(nombre_contacto)

    if not existe:


   
        with open(CARPETA + nombre_contacto + EXTENSION, 'w') as archivo:
            telefono_contacto = input('Agrega el telefono del contacto: \r\n')
            categoria_contacto = input('Categoria Contacto: \r\n')

            #instanciamos la clase
            contacto = Contacto(nombre_contacto,telefono_contacto,categoria_contacto)

            #Escribimos en el archivo
            archivo.write('Nombre: ' + contacto.nombre + '\r\n') #como ya instanciamos arriba.. solo nombramos el objeto
            archivo.write('Telefono: ' + contacto.telefono + '\r\n')
            archivo.write('Categoria: ' + contacto.categoria + '\r\n')

            #Se agrego correctamente
            print('\r\n   Contacto agregado correctamente \r\n ')
    else:
        print('Ese contacto ya existe !!! \r\n')
    
    #Reiniciamos la app para que nos vuelva a preguntar
    app()
def mostrar_menu():
    print('Seleccione del menu lo que desee hacer: ')
    print('1) Agregar nuevo contacto')
    print('2) Editar Contacto')
    print('3) Ver Contactos')
    print('4) Buscar Contacto')
    print('5) Eliminar Contacto')
def crear_directorio():
    if not os.path.exists(CARPETA): # Si NO existe la carpeta contactos
        os.makedirs(CARPETA) #creamos la carpeta contactos
    else:
        print('Esa carpeta ya existe \r\n')

def existe_contacto(nombre):
    return os.path.isfile(CARPETA + nombre + EXTENSION)

app()
