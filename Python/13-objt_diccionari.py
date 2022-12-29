#Iniciar un diccionario vacio

pokemaster = {}
print(pokemaster)

'''En este caso cuando creamos un diccionario,
lo debemos tratar como si crearamos una variable
Recordar que los diccionarios es 'Llave' : 'valor'
'''
pokemaster['Nombre'] = 'Mac'
pokemaster['Equipo'] = 5
print(pokemaster)


'''
ccedemos a un valor.. como no tenemos la llave pokemon 
la consola nos marcara None pero podemos ponerle un comentario
para personalizar que no tenemos aun ningnun pokemon
'''
print(pokemaster.get('pokemon' , 'Aún no tienes Pokemon'))

'''Utilizamos iteradores para acceder al diccionario
En el for masterpkm es para que itere las llavesy valor
para que itere los valores de cada llave
'''

for masterpkm, valor in pokemaster.items():
    print(masterpkm) # aqui iteramos los items de las keys
    #print(valor) # aqui iteramos los items de los valores de las keys