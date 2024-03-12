// *Como nuestro proyecto va creciendo podemos realizar la lógica de auth en nuestra store con pinia
//* y solamente importarla en nuestros componentes

//*onAuthStateChanged... mantiene la referencia del usuario auth(debe declararse en onMounted)

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import {defineStore} from 'pinia';
import {computed, onMounted, ref} from 'vue';
import {useRouter} from 'vue-router';
import {useFirebaseAuth} from 'vuefire';
export const useAuthStore = defineStore('auth', () => {
  const auth = useFirebaseAuth();
  //   *Creamos mensajes de Error como objeto... cada mensaje en consola parecido a las keys del objeto lanzara un mensaje de error

  const authUser = ref(null);
  const router = useRouter();
  const errorMessage = ref(''); //creamos una variable reef con string vacios para llenarlo de las alertas de nuestro objeto de errores
  const errorCode = {
    'auth/user-not-found': 'Usuario no encontrado',
    'auth/invalid-credential': 'Credenciales Invalidas',
    'auth/wrong-password': 'Contraseña Incorrecta',
  };

  const login = ({email, password}) => {
    // *Recomendación de los mens de vuefire
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredencial => {
        //podemos entrar al objeto de usercredencial
        const user = userCredencial.user;
        authUser.value = user;
        // * Redireccionammos al usuario una vez iniciado sesion
        router.push({name: 'admin-propiedades'});

        // console.log(authUser.value);
      })
      .catch(error => {
        console.log(error);
        errorMessage.value = errorCode[error.code];
      });
  };

  const logOut = () => {
    // console.log('cerrandoSesion');
    signOut(auth)
      .then(() => {
        // como auth tiene credenciales de inicio de sesion debemos convertir nuestro aAuth a null

        authUser.value = null;
        router.push({name: 'login'});
      })
      .catch(error => {
        console.log(error);
      });
  };

  const hasError = computed(() => {
    return errorMessage.value;
  });
  onMounted(() => {
    onAuthStateChanged(auth, user => {
      //*user regresara null si no esta auth, para facilitar el auth declaramos null en la variable auth y validamos
      if (user) {
        console.log(user); //*colocamos la info en el state
        authUser.value = user;
      }

      // console.log(user);
    }); //le pasamos auth (devueFire)
  });
  //*valida si el usuario esta auth o no ... regresa bool
  const isAuth = computed(() => {
    return authUser.value;
  });
  return {login, hasError, errorMessage, isAuth, logOut};
});
