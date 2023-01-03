class Restaurant:

    def __init__(self ,nombre, categoria,direccion, precio, ): 
        self.nombre = nombre #atributo llamado nombre
        self.categoria = categoria
        self.direccion = direccion
        self.__precio = precio
          #Todos estos atributos estan públicas por Default por lo que se pueden modificar
        #en cualquier lugar de la app
     #Para proteger un atributo y pasarlo de publico a protected... debemosdeclararla asi:
     # self._platillo = platillo
     # si queremos pasarlo de publico a private utilizamos .__precio en este caso no se modifica el precio... solo usando Getters and setters
     

    def mostrar_informacion(self):
        print(f'Nombre: {self.nombre} , Categoria: {self.categoria} , Direccion: {self.direccion}, Precio: {self.__precio}')    



    '''
    Getters y Setters - Get: se obtiene un valor, set= Se agrega un Valor


    '''
    def get_precio(self):              #Para facilidad el codigo de un GET le ponemos get_nombreatributo(self)
        print(self.__precio)   #Recodar que debemos poner el atributo con .__precio
     #OJO debemos instanciarlos afuera de la clase en las lineasdespues de .mostrar_información para que muestre los nuevos precios
    def set_precio(self,precio):
        self.__precio = precio


#Con el ejemplo del restaurant creamos otra clase HIJO

class Hotel(Restaurant): #Hotel es hijo y Restaurant Padre
    def __init__(self, nombre, categoria, direccion, precio): #Podemos declarar el mismo contructor
        super().__init__(nombre, categoria, direccion, precio)
    
hotel = Hotel('Hotel glamour', '5 Estrellas', 'Luis Encinas',200 ) #Son los mismos atributos que en la clase Restaurant(nombre,catego,precio)
hotel.mostrar_informacion()

