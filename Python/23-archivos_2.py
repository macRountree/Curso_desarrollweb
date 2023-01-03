#Queremos abrir el archivo que creamos

def app():
    #utilizamos otro metodo
    with open('archivo.txt') as archivo:
        for contenido in archivo:
            print(contenido.rstrip())

app()