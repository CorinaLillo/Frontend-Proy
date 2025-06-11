

console.log("¡Bienvenido a Consultorio FC!");

const nombre = prompt("¿Cuál es tu nombre?");
if (nombre) {
    alert(`Hola ${nombre}, gracias por visitarnos`);
} else {
    alert("¡Bienvenido visitante anónimo!");
}

// Carrusel con botones y fade
let index = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

window.addEventListener('DOMContentLoaded', () => {
    // Mostrar primer slide
    showSlide(index);
    // Botones
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    // Automático cada 3 seg
    setInterval(nextSlide, 3000);
});
