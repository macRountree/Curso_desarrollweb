import {collection} from 'firebase/firestore';
import {computed} from 'vue';
import {useCollection, useFirestore} from 'vuefire';
//*Utilizaremos el state de firestore para conectar nuestr db y use Collections para acceder a nuestra db con nombre 'propiedades' ('como lo nombramos en firebase')
export default function usePropiedades() {
  const db = useFirestore();
  const propiedadesCollection = useCollection(collection(db, 'propiedades'));
  //*Computed es mas estaticos no puede tomar valores

  return {propiedadesCollection};
}
