//EVENTOS QUE SUCEDEN CON EL SCROLL
//cuando yo muevo el mouse

window.addEventListener("scroll", () => {
  // const scrolPx = window.scrollY;

  // console.log(scrolPx);

  const premium = document.querySelector(".premium");
  const ubi = premium.getBoundingClientRect();
  if (ubi.top < 100 && ubi.bottom > 100) {
    console.log("Ya se mira ");
  } else {
    console.log("da mas scroll");
  }
});
