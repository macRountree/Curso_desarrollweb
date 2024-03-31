export const priceProperty = computed(() => {
  return price =>
    // console.log('precio', price); //Devuelve el precio en Strings
    //*Debemos devolverlo en Numeros y le agregamos signo de precio en USD
    Number(price).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
});
