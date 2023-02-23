const imagenes = document.querySelectorAll(".propiedad__imagen");

window.addEventListener("scroll", () => {
  const scroll = this.scrollY / -20;

  imagenes.forEach((imagen) => {
    console.log((imagen.style.backgroundPositionY = `${scroll}px`));
  });
});
