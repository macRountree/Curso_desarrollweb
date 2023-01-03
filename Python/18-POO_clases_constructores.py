#VIDEO 43 python    

'''
Creamos un constructor
nos ayuda a no tener que estar declarando metodos... el mismo
constructor podemos llamar cada atributo sin metodos
'''


class Restaurant:

    #un constructor (linea 13) es una funcion que se ejecuta automaticamente al crear
    #un objeto por medio de una claseS
    def __init__(self ,nombre, categoria,direccion, platillo, precio, ): 
        self.nombre = nombre #atributo llamado nombre
        self.categoria = categoria
        self.direccion = direccion
        self.precio = precio
        self.platillo = platillo
     #La funcion dentro de una clase se llama METODO

    def mostrar_informacion(self):
        print(f'Nombre: {self.nombre} , Categoria: {self.categoria} , Direccion: {self.direccion} , Platillo: {self.platillo}, Precio: {self.precio}')    


restaurant = Restaurant('Raffaelos','Comida Italiana', 'Quintero Arce','Pizza Mexicana' , 180)
restaurant.mostrar_informacion()
'''restaurant.agregar_restaurant() <--Esta linea ya
no la utilizamos declaramos todo en el metdo Restaurant() de la linea 21
'''
restaurant2 = Restaurant('Jerry Burger', 'Comida Americana', 'Colosio' , 'Doble carne c/papas', 95) 
restaurant2.mostrar_informacion()
