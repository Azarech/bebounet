let index = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length;

    index = (index + direction + totalImages) % totalImages;
    const offset = -index * images[0].clientWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

// Fonction pour ouvrir l'image en plein écran (lightbox)
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;  // Met à jour la source de l'image dans la lightbox
    lightbox.style.display = 'block';  // Affiche la lightbox
}

// Fonction pour fermer la lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';  // Cache la lightbox
}

// Ajoute un événement "onclick" à chaque image du carousel pour ouvrir la lightbox
const images = document.querySelectorAll('.carousel img');
images.forEach(image => {
    image.addEventListener('click', () => {
        openLightbox(image.src);  // Passe la source de l'image cliquée à la lightbox
    });
});
