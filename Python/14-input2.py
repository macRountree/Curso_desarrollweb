#Programa para aplicar un while

pregunta = 'Digita un numero para saber si es par o impar \r\n'

#Podemos crear otra variable para concatenar la primera pregunta
pregunta += '(Escribe "cerrar" para que parar el juego)\r\n'

#creamos otra variable para que nuestra pregunta sea siempre verdadero

preguntar = True

#Como 'preguntar' siempre es verdadero creamos el while 
# si es verdadero entonces aparece el input con las preguntas
while preguntar:
    numero = input(pregunta)
    if numero == 'cerrar':  #Si el numero escribimos 'cerrar' entonces deja de preguntar
        preguntar = False
    else:                  # si escribimos un numero entra el programa  con otro if para saber si es par o impar
        numero = int(numero)
        if numero % 2 == 0:
            print(f' {numero} es par')
        else:
            print(f'{numero} es impar')