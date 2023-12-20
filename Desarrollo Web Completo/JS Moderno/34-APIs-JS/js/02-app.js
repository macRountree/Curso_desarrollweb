// Intersection Observer API

document.addEventListener('DOMContentLoaded', () => {
  // Podremos aplicar el scroll infinito (instagram, Fb) con el Intersection Observer
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      console.log('Ya se mira');
    }
  });

  observer.observe(document.querySelector('.premium'));
});
