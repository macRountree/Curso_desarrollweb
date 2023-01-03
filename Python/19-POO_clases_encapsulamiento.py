class Restaurant:

    def __init__(self ,nombre, categoria,direccion, platillo, precio, ): 
        self.nombre = nombre #atributo llamado nombre
        self.categoria = categoria
        self.direccion = direccion
        self.__precio = precio
        self.platillo = platillo  #Todos estos atributos estan públicas por Default por lo que se pueden modificar
        #en cualquier lugar de la app
     #Para proteger un atributo y pasarlo de publico a protected... debemosdeclararla asi:
     # self._platillo = platillo
     # si queremos pasarlo de publico a private utilizamos .__precio en este caso no se modifica el precio... solo usando Getters and setters
     

    def mostrar_informacion(self):
        print(f'Nombre: {self.nombre} , Categoria: {self.categoria} , Direccion: {self.direccion} , Platillo: {self.platillo}, Precio: {self.__precio}')    



    '''
    Getters y Setters - Get: se obtiene un valor, set= Se agrega un Valor


    '''
    def get_precio(self):              #Para facilidad el codigo de un GET le ponemos get_nombreatributo(self)
        print(self.__precio)   #Recodar que debemos poner el atributo con .__precio
     #OJO debemos instanciarlos afuera de la clase en las lineasdespues de .mostrar_información para que muestre los nuevos precios
    def set_precio(self,precio):
        self.__precio = precio
restaurant = Restaurant('Raffaelos','Comida Italiana', 'Quintero Arce','Pizza Mexicana' , 180)
#restaurant.__precio = 50 #Si declaramos un nuevo precio con ._precio se actualiza

restaurant.mostrar_informacion()
restaurant.set_precio(50)
restaurant.get_precio()

restaurant2 = Restaurant('Jerry Burger', 'Comida Americana', 'Colosio' , 'Doble carne c/papas', 95) 
#restaurant2.__precio = 20 #pero si usamos .__precio Este no cambia y si los imprimes da error 
restaurant2.mostrar_informacion()
restaurant.set_precio(20) # primero Setteamos el nuevo precio (por eso declaramos self,precio)
restaurant.get_precio()  # Despues obtenemos get para que aparezca en consola