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