'''nombre = input('¿Cúal es tu nombre?: \r\n')

print(f'Hola mi nombre es {nombre}')
'''
'''Leer datos que seran numeros
'''

num_pokemon = input('¿Cuántos Pokemon capturaste? \r\n')
#convertimos num_pokemon string a enteros
#Las entradas de datos estaran en string por Default
num_pokemon = int(num_pokemon)
if num_pokemon > 6:
    print(f'LLevas  {num_pokemon} Pokemon.  Solo puedes llevar 6 Pokemon en tu equipo')
elif num_pokemon <= 6 and num_pokemon >= 1:
    print(f'LLevas  {num_pokemon} Pokemon  en tu equipo')
else:
    print('No tienes ningun Pokemon en tu equipo')


#Ver si un numero es par o impar
num = input('Digite un numero: \r\n')

num = int(num)

if num % 2 == 0:
    print(f'El numero {num} es par ')
else:
    print(f'el numero: {num} es impar')