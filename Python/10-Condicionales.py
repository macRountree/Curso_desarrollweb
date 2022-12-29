#mayor a 

balance = 1

if balance > 0:
    print('puedes pagar')
else:
    print('no tienes saldo')

# likes

likes = 200

if likes >= 200:
    print ('LLegaste a 200 likes')
else:
    print('Casi llegas a 200')


# if con texto
lenguaje = 'Ingles'
if not lenguaje == 'Frances':
    print('No Es Frances')
else:
    print ('es Frances')


#boolean

usuario_auth = False
if not usuario_auth:
    print('No eres el usuario. Inicia Sesión')
else:
    print('Bienvenido')

#Evaluamos un elemento de la lista
lenguajes = ['Ingles', 'Frances', 'Portugues', 'Japonés','Español']

if 'Español' in lenguajes:
    print ('Si sabes Español')
else:
    print('No sabes español')


#If anidados
usuario_name= 'Mac'
usuario_authe = True
admin = True
if usuario_authe:
    if not admin:
        print('Bienvenido admin')
    else:
        print(f'Bienvenido {usuario_name}')
else:
    print('Debes iniciar Sesión')
