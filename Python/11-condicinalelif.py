#elif
Ocupación = 'Ingeniero'

if Ocupación == 'Programador':
    print ('Tienes 50% de descuento')
elif Ocupación == 'Ingeniero':
    print('Tienes 55% de descuento')
else:
    print('Pago completo')


#AND && y OR  ||

user_signed = False
user_admin = False
'''
si el usuario y el admin estan logueados es True
en dado caso de que cualquiera de los 2
no sea True... se arroja el else
'''
if user_signed and user_admin:
    print ('Admin')
elif user_signed:
    print('Bienvenido usuario')
else:
    print('Debes iniciar sesión')
