window.addEventListener("DOMContentLoaded", () => {
  // Ampliar logo
  const logo = document.querySelector(".logomenu");
  const imagenAmpliada = document.getElementById("imagenAmpliada");

  logo.addEventListener("click", () => {
    imagenAmpliada.style.display = "flex";
  });

  imagenAmpliada.addEventListener("click", () => {
    imagenAmpliada.style.display = "none";
  });

  // SLIDER
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide); // Mostrar la primera imagen
  setInterval(nextSlide, 5000); // Cambiar cada 5 segundos
});