// *Como nuestro proyecto va creciendo podemos realizar la lógica de auth en nuestra store con pinia
//* y solamente importarla en nuestros componentes
import {signInWithEmailAndPassword} from 'firebase/auth';
import {defineStore} from 'pinia';
import {computed, ref} from 'vue';
import {useFirebaseAuth} from 'vuefire';
export const useAuthStore = defineStore('auth', () => {
  const auth = useFirebaseAuth();
  //   *Creamos mensajes de Error como objeto... cada mensaje en consola parecido a las keys del objeto lanzara un mensaje de error

  const authUser = ref({});
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
        // console.log(authUser.value);
      })
      .catch(error => {
        console.log(error);
        errorMessage.value = errorCode[error.code];
      });
  };
  const hasError = computed(() => {
    return errorMessage.value;
  });
  return {login, hasError, errorMessage};
});
