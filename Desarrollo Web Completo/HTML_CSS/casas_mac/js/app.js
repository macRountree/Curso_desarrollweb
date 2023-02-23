const imagenes = document.querySelectorAll(".propiedad__imagen");

window.addEventListener("scroll", () => {
  const scroll = this.scrollY / -25;

  imagenes.forEach((imagen) => {
    if (scroll < -80) {
      scroll += 80;
    }
    imagen.style.backgroundPositionY = `${scroll}px`;
  });
});
