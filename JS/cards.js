function showT() {
  // Selecciona todas las cajas de información
  const displayBoxes = document.querySelectorAll(".info");

  // Oculta todas las cajas de información
  displayBoxes.forEach((box) => {
    box.classList.add("oculto");
  });

  // Muestra la caja de información asociada con la tarjeta clickeada
  const card = event.currentTarget;
  const infoId = `info${card.id.replace("card", "")}`;
  const infoBox = document.getElementById(infoId);

  if (infoBox) {
    infoBox.classList.remove("oculto"); // Muestra con animación
  }
}

function cancel() {
  // Selecciona todas las cajas de información y las oculta con animación
  const displayBoxes = document.querySelectorAll(".info");
  displayBoxes.forEach((box) => {
    box.classList.add("oculto");
  });
}

 
// El viernes tercera ronda de revisiones

const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
let currentIndex = 0;
let autoSlideInterval;

// Función para actualizar el carrusel y hacerlo cambiar de ítem
function updateCarousel() {
  // Aseguramos que todos los elementos se vuelvan pequeños
  items.forEach(item => item.classList.remove("active"));

  // Hacemos que el elemento actual se vea más grande
  items[currentIndex].classList.add("active");

  // Desplazamos el carrusel
  const offset = -(currentIndex * (items[0].offsetWidth + 20)); // 20px es el margen entre ítems
  carousel.style.transition = "transform 0.5s ease"; // Añadimos transición suave
  carousel.style.transform = `translateX(${offset}px)`;
}

// Función para cambiar al siguiente ítem
function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
  resetAutoSlide(); // Reinicia el intervalo de cambio automático
}

// Función para cambiar al ítem anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
  resetAutoSlide(); // Reinicia el intervalo de cambio automático
}

// Función para iniciar el carrusel automático
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }, 21000); // Cambio cada 20 segundos
}

// Función para reiniciar el intervalo del carrusel automático
function resetAutoSlide() {
  clearInterval(autoSlideInterval); // Limpiamos el intervalo anterior
  startAutoSlide(); // Iniciamos uno nuevo
}

// Inicializa el carrusel
startAutoSlide();
updateCarousel();
