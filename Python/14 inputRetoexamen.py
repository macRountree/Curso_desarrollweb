'''----------RETO EXAMEN-----
Realiza un examen  con 3 preguntas que
tu desees, el usuario debera responder
SI o NO y al final otorgarle una calif
(la calif se logra con una variable
que inicia en 0 y por cada respuesta se
incrementa en 1 en 1)

'''
#la calificacion inicial es 0
calificación = 0


'''

pregunta_1 = input('¿El inicial evoluciona en el nivel 17? : \r\n')
if pregunta_1 == 'SI':
    print('Incorrecto. Evolucionan en nivel 16')
    
    
elif pregunta_1 == 'NO':
    print('Correcto')
    calificación =+ 1

print(f'LLevas {calificación} de 3')

pregunta_2 = input('¿El usuario puede llevar 7 Pokemon en tu equipo a la ves? \r\n')

if pregunta_2 == 'SI':
    print('Incorrecto. Evolucionan en nivel 16')
     
elif pregunta_2 == 'NO':
    print('Correcto')
    calificación =+ 1

print(f'LLevas {calificación} de 3')   

pregunta_3 = input('¿El alto mando son 4 entradores y el campeón? \r\n')

if pregunta_3 == 'NO':
    print('Incorrecto. Si son 4 entrenadores y el campeon')
    
elif pregunta_3 == 'SI':
    print('Correcto')
    calificación +=1
    print(f'LLevas {calificación} de 3')

print(f'Tu calificacion final fue {calificación} de 3')

'''
calificación= 0

preguntas = {'¿El inicial evoluciona en el nivel 17? :': 'no',
             '¿El usuario puede llevar 7 Pokemon en tu equipo a la ves?' : 'no' ,
             '¿El alto mando son 4 entradores y el campeón?': 'si'}

for pregunta in preguntas:
     question = input(pregunta)
     if question == preguntas.get(pregunta):
        calificación +=1

print(f'Tu calificacion es {calificación} de 3')
