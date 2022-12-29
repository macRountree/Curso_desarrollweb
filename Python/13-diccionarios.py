#Diccioario simple 

pokemon = {
    'Nombre': 'Squirtle',
    'Tipo' : 'Agua',  #Llave =tipo y valor = Agua
    'Evoluciones' : ' Wartortle ' ' Blastoise ',
    'Movimientos': 'Hidrobomba ' 'Rayohielo',
    'Nivel': 15,
}

print(pokemon)
#Si queremos acceder a los elementos del dicc

print(pokemon['Evoluciones'])
'''
Si queremos mezclar con un string 
lo mejor es asignar otra variable
en este caso es movimiento

'''
movimiento = pokemon['Movimientos']
print(f'Sus Movimientos son {movimiento}')

'''
Si queremos agregar otro valor
'''
pokemon['Habilidad'] = 'Absorbe Agua'
print(pokemon)

'''
Si queremos reemplazar otro valor
'''
pokemon['Nivel'] = 16
print(pokemon)

pokemon['Nombre'] = 'Totodile'
pokemon['Evoluciones'] = 'Croconaw ,' ' Feraligatr '
print(pokemon)

# Si queremos eliminar un valor
del pokemon['Habilidad']
print(pokemon)