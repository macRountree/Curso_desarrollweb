"""
--------------------------------Secuencia de caracteres-------------------
f --------- lo utilizams para concatenar Strings con variables (f'Hola mi nombre es: {nombre_usuario}')
\r----------Lo utilizamos para retornarun valor
\n......... Lo utilizamos para un salto de linea
----------------------------------Métodos--------------------------------
Lista de metodos
.upper()  ---> Convierte en mayusculas un string
.title()------ Convierte la primera letra en Mayuscula
.sort() --------- Ordena los elemementos de una lista  alfabeticamente
.pop() ----------  Elimina el ultimo element de una lista
.pop(n)---------- elimina un elemento especifico de una lista
.append()--------- Agregamos un elemento al final de la lista
.remove().......... Eliminamos un elemento por su nombre
range(n,n,n)........Es utilizado en for para ponerle limites 
 a nuestra condicion (inicio,final, incremental)
.get()...........Se puede utilizar para acceder a unvalor de un diccionario
.item()..........Se utiliza para acceder alos items de un diccionario (valor/key)               
.open()..........Se utiliza para crear archivos (video 48)
.write()--------- Metodo para escribir en el archivo creato..
.close()...........Metodo para cerrar el archivo.. Se utiliza para buenas practicas
.rstrip()......... Es un metodo que nos quita los espacios entre renglones
.exist().........metemos el path o la variable global del path
.makedirs()......se crea la carpeta
.listdir()....... lista todas los archivos de un directorio
.remove()....... De utiliza para eliminar un archivo seleccionado
---------------------------------LIBRERIAS-------------------------------------------

import os -----> libreria que nos permite importar funciones para manejar archivos



-------------------------AQUI EMPIEZA
Cuando tenemos un problema grande lo mejor es dividirlo
 en problemas chicos*/
-----------------------------------------------
python usa la extension .py
-----------------------------------------------------------
#---------VARIABLEES-------------------

 Es un contenedor de valor
composision de variable es .... nombre = "mac"
Las variables en python NO PUEDEN INICIAR CON UN NUMERO pero si ponerlo enotro lugar
 Hay varias variaciones a la hora de declarar una variable
 camelCase --->  nombreCLiente = "juan"
 PascalCase o Capital Camel Case --->  NombreCliente = "juan"
 flatcase --->  nombrecliente = 'juan'
 KebabCase o dash case --->  nombre-cliente = "juan"
 SnakeCase ---> nombre_cliente = "juan" Esta sintaxis es la que MAS SE UTILIZA en Py

 ----------------------TIPO DE DATOS-------------------------
 Strings ->  nombre = "juan"
 Integers -> likes = 201
 Floats -> total_pagar = 100.20
 Boolean - pagado  = True , pagado = False el booleano es en Mayusculas siempre

Python tiene tipado dinamico por ejemplo
 edad = 50
 edad = 51
 edad = "Python"
------------------------------------Funcion y Metodo--------------------------
Funcion: Es un bloque de código diseñado para realizar una actividad
La función muchas veces NO existe y el lenguaje nos deja crear nosotros mismos
para crear una funcion en Python 
            def hola():

Para crear una funcion debemos primero definiir o crear la funcion:
            def hola():
Despues debemos ejecutar la funcion:
            hola()
ERRROR COMUN ES PRIMERO EJECUUTAR LA FUNCION primero y despues definirla por lo
que nos tirara error en la compilación
Es reconmendable identar siempre los def al mismo nivel para no tener errores


-----------------------------------03ARAMETROS y Argumentos
Def hola(nombre):      En este caso lo que esta dentro de la funcion(nombre) es un 
parametro

Si ponemos 2 parametros por ejemplo
        def hola(nombre,puesto): debemos declararla dentro de la funcion
            print (f"soy {nombre} y soy {puesto})
            donde f es para concatenar los parametros/argumentos con strings
            donde {} es donde inyectamos los parametros

Al final si tenemos la funcion ejecutada debemos inyectar los 2 argumetos
    hola('Mac','Nut') el argumento Mac es del parametro "nombre" y el argumento
                        Nut es del parametro "puesto"
    hola('Macoy', 'Inge') aqui seria el argumento Macoy como parametro nombre y 
                        el argumento Inge es el parametro puesto
Al correr el programa nos dara como resultado
    soy Mac y soy Nut
    soy Macoy y soy Inge
Nota: se deben acomodar bien los para metros en la def y los argumentos a la hora de
ejecutar
Mota: si por ejemplo a mi funcion ejecutada le falta un argumento, al momento de
ejecutarlo saltara error por ejemplo
        hola('mac') <<<Le falta el argumento del parametro puesto
Para ello si desconocemos el puesto de mac.... en el parametro puesto declaramos
desconocido en caso de que no sepamos lo antes mencionado

    def hola(nombre, puesto = "Desconocido")
    al final cuando e8jecutamos:
        hola("mac") 
    se imprimira -->  Soy Mac y soy desconocido


-----------------------------------------FUNCIONES QUE RETORNAN VALORES---------------
    No siempre las funciones imprimen un valor ejemplo:
        def hola(planeta):
            return planeta
        satelite = hola('Tierra')
        print (satelite)

----------------------------------------------------Diferencias entre metodos y funciones--
                    FUNCIONES | Metodos
        mostrarNombre(nombre) | nombre.upper() Los metodos son funciones en POO



  ------------------------------------------NUMEROS EN PROGRAMACIón-------------------------------------------
  sirven para mantener resultados , balances, cantidad de likes
   
   cuerpo de operador
   2 + 3 = los numeros son los inputs y  el + es el operador
   se puede restar (-) , sumar(+), dividir (/), multiplicar (*) , potencias (**)
   incrementar += 1 que incrementa +1
   decrementar -= 1 que disminuye -1
------------------------------------------NUMERO Y FUNCIONES---------------
-----------------------------------------TIPS---------------------------
Comentarios para Buenas practicas
Sirven para recordar o para que otra persona entienda nuestro codigo
mantener espacios y orden nos permitirá mas facilidad de lectura
El orden del código esm uy imporante

------------------------------------------------ARREGLOS(ARRAYS)---------------------
En una sola variable permite agrupar muchos datos
En python se conocen como listas
meses = ["Enero","Diciembre","Abril","Marzo"]
meses[1] // Diciembre
La ubicación Diciembre es 1 porque empieza de 0 a 3 en este caso.. abril seria posicion
2 y marzo 3

------------------------------------ITERADORES--------------------------

Son repetidores de codigo hasta que una condicion se cumpla o no
 En caso de tener una lista un For accede a todosl os datos
 y se ejecutara hasta que se cumpla la condicion en el caso de la lista
 hasta que cheque cada elemento
 se puede utilizar en rangos
 for numero in range (0,10,1)
    print (numero)
    aqui estamos usando un metodo range el cual cada argumento
especifica:
el comienzo en este caso el 0
el final en este caso es 10 (el recorrido es
de 0 a 9)
y el ultimo argumento que es 1 estara corriendo de 1 en 1
si ponemos 2 el resultado es 0,2,4,6,8
no se pone 10 porque el rango es de 0a9
 
------------------------CONDICIONALES

If nos dice si un valor cumple comparandolo con otro

if valor > valor  
los condicionales son 
>.... mayor
<....menor
== .... igual a  (Si condicionamos booleanos no lo ocupamos)
!= ,,,, diferente a 
<= .... menor o igual a 
>= ... mayor o igual a
else... Siempre que la condicion no se cumpla
aparece el else
elif es una segundo condición en cas de tener mas de 1 if

operadores AND y OR

------------------------------------------OBJETOS con Diccionarios
Son parecidos a los arreeglos pero en lugar de usasr listas en Objetos
utilizamos las llaves (keys) y en pyhon Objetos son llamados Diccionarios



-------------------------------Entrada de datos por USUARIOS--------
Las entradas de datos son acciones por parte del usuario cuando ingresa
cierta informacíón como logearte, realizar un examen en linea, realizar pagos
en python se utiliza la funcion input()




-------------------------------WHILE--------------------------------
Se ejecuta mientras una condicion sea VERDADERA
Se recomienda crear una variable inicial e incrementar el final del
while para que no se haga loop

--------------------------------------EJERCICIO----------------
Siempre que creemos una app es recomendable crear una funcionprincipal
y que esta funcion llame a todas las demas y arranque la app 


------------------------------------POO en python------------------------
Es un estandar a la hora de escribir codigo

Cuando definimos una clase () debemos describir su comportamiento y
 la forma de ese objeto 
 El objeto es la información creada por una clase (instancia)

 clase cliente : 
    nombre
    apellido
    tipo
    
    Estructura de una clase en Python
    class Cliente:
        #resto de la clase
    cliente = Cliente() 'Este es la intancia' Es decir
    un objeto creado cuando llamamos a una clase
    --->Atributo de clase: Es una propiedad que tendran todos
    los objetos creados con nuestra clase
    ---> Metodo: Es una funcion que existe dentro de una clase

    *ABSTRACCIÓN ---> Son los datos necesarios de una clase
    Restaurant ocupa un : Nombre, nombre del platillo, descripcion, precio
    SOLAMENTE AGREGAMOS DATOS NECESARIOS

    *Encapsulamiento --> Permite restringir u ocultar el acceso de los datos
    dentro de la misma clase del mundo exterior (se modifican via metodos en la misma clase)


    Herencia: Podemos crear una clase que sea hijo o una copia de otra,al heredar una clase
    tendremos tdos los metodos y atributos de la clase padre en en hijo, y
    podremos modificarlos encaso de ser necesario.


    Polimorfismo: Es la habilidad de tener diferentes comportamientos basado en que subclase
    se esta utilizando.. se relaciona estrechamente con la herencia



    ---------------------------------------------------------CREACION DE ARCHIVOS--------------------------------

    Los lenguajes de programación podemos crear archivos de texto o pdf
--------------------------------------------------------proyecto FINAL---------------------------

CRUD
Crear
Read
Update
Delete
Los datos de una app deben de tener la realizar estas acciones
 
 
 
 ---------------------PROYECTOS FUTUROS
 APLICACION CON ARCHIVOS PARA RESTAURANT
 DIRECTORIO DE EMPRESA CON SUBCARPETAS /GERENCIA/VENTAS

 SISTEMA DE ADMINISTRACION DE BIBLIOTECAS CON PRESTAMO DE LIBROS
 (un libro prestado debera moverse de carpeta hacia prestados)

 crear un juego de piedra, papel o tijeras
 
 """