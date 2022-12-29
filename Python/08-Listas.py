lenguajes = ['Ingles', 'Frances', 'Portugues', 'Japonés']

print(lenguajes)

'''los arrayList empiezan en 0 y en este caso termina en 3 y la posicion[2] es 
portugues
'''
print(lenguajes[2])


#Ordenar elementos alfabeticamente
lenguajes.sort()
print(lenguajes)

# aqui creamos otra variable e inyectamos el aarray con un string
learning = f'I am learning {lenguajes[3]}'
print(learning)


#aqui modificamos los valores de un arreglo. reemplazandolo
lenguajes[3] = 'Frances'
print(lenguajes)


#aqui agregamos otro valor al final lista 

lenguajes.append('Italiano')
print(lenguajes)

#eliminar elementos de una lista
del lenguajes[1]
print(lenguajes)

#Eliminar el ultimo elemento de una lista
lenguajes.pop()
print(lenguajes)

#eliminar con .pop() un elemento especifico
lenguajes.pop(2)
print(lenguajes)

# eliminar algo por nombre
lenguajes.remove('Japonés')
print(lenguajes)