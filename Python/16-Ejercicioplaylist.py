#Nombrar una playlist y agregar canciones

#creamos una función principal

#Variables GLOBALES (no se recomienda llenar el proyecto con globales)
playlist = {} #diccionario vacío
playlist['canciones'] = [] #lista vacia de canciones
def app():

    '''#Agregamos un playlist como Verdadero porque siempre podremos hacerlo y
    agregamos el while    
    '''
    agregar_playlist = True
    while agregar_playlist:
        nombre_playlist = input('?Como deseas nombrar la playlist¿ \r\n')    
        #validamos nombre de la playlist para que no se quede vacio
        if nombre_playlist:
            playlist['playlist'] = nombre_playlist
            #Ya escrito el nombre desactivamos l agregar playlist para que no pregunte
            agregar_playlist = False
            agregar_canciones()

#Hacemos otra función para agregar las canciones
def agregar_canciones():
    agregar_cancion = True
    while agregar_cancion:
        nombre_playlist = playlist['playlist'] #Le pasamos el nombre a la playlist
        #Preguntamos que cancion quiere agregar a dicha playlist creada
        pregunta = f'Que cancion desea agregar a la playlist {nombre_playlist}\r\n'
        pregunta += 'Escribe X para dejar de agregar canciones\r\n'
        
        cancion = input(pregunta)
        if cancion == 'X':
            #Dejamos de agregar canciones
            agregar_cancion = False
            
            #mostramos resumen de la playlist
            mostrar_resumen()
        else:
            #Agregar canciones .. el append agregamos al lista la cancion
            playlist['canciones'].append(cancion)

            print(playlist)
           
def mostrar_resumen():
    nombre_playlist = playlist['playlist']
    print(f'mostrando playlist {nombre_playlist}\r\n')
    print('Canciones: \r\n')
    #utilizamos un iterador para que muestre cada cancion de la playlist
    for cancion in playlist['canciones']:
        print(cancion)









app()