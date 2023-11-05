import { datosCita, nuevaCita } from '../Funciones.js';

import {
  fechaInput,
  formulario,
  horaInput,
  mascotaInput,
  propietarioInput,
  sintomasInput,
  telefonoInput,
} from '../Selectores.js';

class App {
  constructor() {
    this.initApp();
  }
  initApp() {
    eventListener();
    function eventListener() {
      mascotaInput.addEventListener('input', datosCita);
      propietarioInput.addEventListener('input', datosCita);
      telefonoInput.addEventListener('input', datosCita);
      fechaInput.addEventListener('input', datosCita);
      horaInput.addEventListener('input', datosCita);
      sintomasInput.addEventListener('input', datosCita);

      formulario.addEventListener('submit', nuevaCita);
    }
  }
}

export default App;
