let db;
document.addEventListener('DOMContentLoaded', () => {
  crmDB();

  setTimeout(() => {
    crearCliente();
  }, 5000);
});

function crmDB() {
  //Creamos DB 10
  let crmDB = window.indexedDB.open('crm', 1);
  //   error

  crmDB.onerror = function () {
    console.log('Hubo un  error a la hora de crear la DB');
  };
  // bien

  crmDB.onsuccess = function () {
    console.log('DB creada');
    db = crmDB.result;
  };
  // config DB
  // Este es un buen metodo para definir nuestras columnas
  crmDB.onupgradeneeded = function (e) {
    const db = e.target.result;
    //definimos el Object Store le mandamos el nombre de la db y el key path a la misma db
    const objectStore = db.createObjectStore('crm', {
      keyPath: 'crm',
      //   auto increment es cuando insertamos 1 registro va incrementando en numero
      autoIncrement: true,
    });

    // definimos las columnas
    objectStore.createIndex('nombre', 'nombre', { unique: false });
    objectStore.createIndex('email', 'email', { unique: true });
    objectStore.createIndex('telefono', 'telefono', { unique: false });

    console.log('columnas creadas');
  };
}

function crearCliente() {
  // !Transacciones en DB  realiza el paso de verificacion
  let trans = db.transaction(['crm'], 'readwrite');

  trans.oncomplete = function () {
    console.log('Transasaccion Completreada');
  };

  trans.onerror = function () {
    console.log('Error en la trans');
  };

  const objectStore = trans.objectStore('crm');
  const newClient = {
    telefono: 6546546,
    nombre: 'Mac',
    email: 'mac@mac.com',
  };
  const peticion = objectStore.add(newClient);
  console.log(peticion);
}
