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




pregunta1 = input('¿El inicial evoluciona en el nivel 17? : \r\n')
if pregunta1 == 'SI':
    print('Incorrecto. Evolucionan en nivel 16')
    calificación =+ 0
    
elif pregunta1 == 'NO':
    print('Correcto: ')
    calificación =+1

print(f'LLevas {calificación} de 3')

pregunta2 = input('¿El usuario puede llevar 7 Pokemon en tu equipo a la ves? \r\n')

if pregunta2 == 'SI':
    print('Incorrecto. Evolucionan en nivel 16')
    calificación =+ 0
   
elif pregunta2 == 'NO':
    print('Correcto')
    calificación =+1

print(f'LLevas {calificación} de 3')   

pregunta3 = input('¿El alto mando son 4 entradores y el campeón? \r\n')

if pregunta3 == 'NO':
    print('Incorrecto. Si son 4 entrenadores y el campeon')
    calificación +=0
    print(f'LLevas {calificación} de 3')
elif pregunta3 == 'SI':
    print('Correcto')
    calificación +=1
    print(f'LLevas {calificación} de 3')

print(f'Tu calificacion final fue {calificación} de 3')