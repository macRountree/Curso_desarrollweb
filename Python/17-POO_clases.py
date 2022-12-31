#VIDEO 43 python    

#Creamos la clase
class Restaurant:
    #La funcion dentro de una clase se llama METODO
    def agregar_restaurant(self, nombre):
        self.nombre = nombre  #es un atributo para este método
    def mostrar_informacion(self):
        print(f'Nombre: {self.nombre}')    

#instanciamos la clase
#objeto-------Clase
restaurant = Restaurant()

'''mandamos a llamar el metodo agregar_restaurant()
    Si imprimimos restaurant.agregar_restaurant() sin delcarar
    ningun argumento en agregar_restaurant... saldra error
Agregamos el argumento SELF para que se autoargumente
'''
restaurant.agregar_restaurant('Raffaelos') #el self no aparece aqui... solo el argumento nombre
restaurant.mostrar_informacion() #aqui no ocupamosdeclarar nada porque ya lo esta imprimiendo en el metodo

#Si queremos agregar otro restaurant podemos hacer lo mismo

restaurant2 = Restaurant() #podemos crear multiples objetos con el mismo clase y metodos
restaurant2.agregar_restaurant('Jerrry Burger')
restaurant2.mostrar_informacion()


# otra forma de mostrar la informacion

print(f' Nombre de Restaurant: {restaurant.nombre}')
print(f' Nombre de Restaurant: {restaurant2.nombre}')
