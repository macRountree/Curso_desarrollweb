//*Optional chaining
//*permite encadenar

const alumno = {
  nombre: 'Juan',
  clase: 'Programacion 1',
  aprobado: true,
};

if (alumno.examen1) {
  //*si agregamos ? en una propiedad que no existe .. el código no truena
  console.log(alumno.examen?.eaamen1);
}

console.log(alumno.examen1);
