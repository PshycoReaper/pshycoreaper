document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });






//DEZPLAZAMIENTO DE 100 EN 100  
class SectionScroller {
  constructor(selector) {
    this.sections = document.querySelectorAll(selector);
    this.currentSection = 0;

    // Vinculamos el evento de desplazamiento
    this.initScrollEvent();
  }

  // Función para hacer scroll a una sección específica
  scrollToSection(index) {
    this.sections[index].scrollIntoView({ behavior: "smooth" });
  }

  // Función para inicializar el evento de desplazamiento
  initScrollEvent() {
    window.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) { // Desplazamiento hacia abajo
        this.currentSection = Math.min(this.currentSection + 1, this.sections.length - 1);
      } else { // Desplazamiento hacia arriba
        this.currentSection = Math.max(this.currentSection - 1, 0);
      }
      this.scrollToSection(this.currentSection);
    });
  }
}

// Instancia de la clase para las secciones con la clase .section
new SectionScroller(".section");



