
#Pondremos un ejemplo de polimorfismo
class Restaurant:

    def __init__(self ,nombre, categoria,direccion, precio, ): 
        self.nombre = nombre #atributo llamado nombre
        self.categoria = categoria
        self.direccion = direccion
        self.precio = precio
      
    def mostrar_informacion(self):
        print(f'Nombre: {self.nombre} , Categoria: {self.categoria} , Direccion: {self.direccion}, Precio: {self.__precio}')    



    '''
    Getters y Setters - Get: se obtiene un valor, set= Se agrega un Valor


    '''
    def get_precio(self):              #Para facilidad el codigo de un GET le ponemos get_nombreatributo(self)
        print(self.precio)   #Recodar que debemos poner el atributo con .precio
     #OJO debemos instanciarlos afuera de la clase en las lineasdespues de .mostrar_información para que muestre los nuevos precios
    def set_precio(self,precio):
        self.precio = precio


#Con el ejemplo del restaurant creamos otra clase HIJO

class Hotel(Restaurant): #Hotel es hijo y Restaurant Padre
    def __init__(self, nombre, categoria, direccion, precio, alberca): #Podemos declarar el mismo contructor
        super().__init__(nombre, categoria, direccion, precio)
        self.alberca = alberca # Este atributo no lo ocupamos en la clase padre asi que lo declaramos aqui.. igual como argumento
    #Podemos agregar métodos exlusivos de la clase hijo_hotel
    def get_alberca(self):
        return self.alberca

    def mostrar_informacion(self): #Podemos usar el mismo metodo pero adaptado a esta clase
        print(f'Nombre: {self.nombre} , Categoria: {self.categoria} , Direccion: {self.direccion}, Precio: {self.precio}, Alberca: {self.alberca}')    
    
hotel = Hotel('Hotel glamour', '5 Estrellas', 'Luis Encinas',200, 'Si' ) #Son los mismos atributos que en la clase Restaurant(nombre,catego,precio)
hotel.mostrar_informacion()
alberca = hotel.get_alberca()
print(alberca)

