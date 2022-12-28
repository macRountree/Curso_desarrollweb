nombre = 'mac'

def mostrar_nombre(nombre):
    print(f'Hola {nombre}')

mostrar_nombre(nombre)


print(nombre.upper())
print(nombre.title())

'''
---------------------------RETOO--------------------------
Crear una funcion que imprima un mensaje de bienvenida
Crear una funcion que tome un nombre de usuario y lo muestre como mensaje
de bienvenida
'''
def bienvenida():
    print('Bienvenido a mi casa')
bienvenida()

def bienvenido(nombre_usuario,apellido_usuario, ultima_actividad):
    print (f'Bienvenido {nombre_usuario} {apellido_usuario} lo ultimo que hice fue {ultima_actividad}')


bienvenido('Mac','Rountree', 'Programar')