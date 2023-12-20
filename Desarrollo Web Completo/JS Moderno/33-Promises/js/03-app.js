// ?¨PROMISES

// Los promisess tienen acceso a 2 parametros
// Resolve es cuando se resuelve la promesa y reject cuando se rechaza
const aplicarDescuento = new Promise((resolve, reject) => {
  const disct = true;
  if (disct) {
    resolve('Descuento Aplicado');
  } else {
    reject('No se pudo aplicar el descuento');
  }
});
// Cuando se termina el promise se utiliza el métoodo then para mostrar el resultado del Promise
// Siempre que el promise falle tenemos acceso al .catch
aplicarDescuento
  .then(res => {
    descuente(res);
  })
  .catch(error => {
    console.log(error);
  });

function descuente(mensaje) {
  console.log(mensaje);
}
// console.log(aplicarDescuento);

// Si el promise es true  === Fullfiled
// Si el promise es false ====== no se cumplio (Rejected)
// Cuando no hay resolve o reject ==== pending
