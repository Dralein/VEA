const visualDiv = document.querySelector('.visual');
const slidesData = [
  {
    year: '2018',
    title: 'QUAI DE L\'OISE',
    subtitle: 'Paris, France',
    link: 'slide1.html',
    image: 'images/slideshow/slide1.webp'
  },
  {
    year: '2020',
    title: 'NOM_DE_VOTRE_PROJET',
    subtitle: 'Votre lieu',
    link: 'projet/slide2.html',
    image: 'images/slideshow/slide2.webp'
  },
  {
    year: '2020',
    title: 'NOM_DE_VOTRE_PROJET',
    subtitle: 'Votre lieu',
    link: 'projet/slide3.html',
    image: 'images/slideshow/slide3.webp'
  },
  {
    year: '2020',
    title: 'NOM_DE_VOTRE_PROJET',
    subtitle: 'Votre lieu',
    link: 'projet/slide4.html',
    image: 'images/slideshow/slide4.webp'
  },
  {
    year: '2020',
    title: 'NOM_DE_VOTRE_PROJET',
    subtitle: 'Votre lieu',
    link: 'projet/slide5.html',
    image: 'images/slideshow/slide5.webp'
  },
  // Ajoutez ici les autres diapositives avec leurs données et liens
];

const preloadImages = () => {
  slidesData.forEach(slide => {
    const img = new Image();
    img.src = slide.image;
  });
};

const updateSlide = index => {
  const slide = slidesData[index];
  visualDiv.style.backgroundImage = `url(${slide.image})`;
  visualDiv.querySelector('.subtitle-year').textContent = slide.year;
  visualDiv.querySelector('.title').textContent = slide.title;
  visualDiv.querySelector('.subtitle:not(.year)').textContent = slide.subtitle;

  // Mettre à jour le lien pour la diapositive actuelle
  const contentLink = document.querySelector('.content');
  contentLink.href = slide.link;
};

let currentIndex = 0;
updateSlide(currentIndex);

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % slidesData.length;
  updateSlide(currentIndex);
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length;
  updateSlide(currentIndex);
};

// Définir l'intervalle de changement automatique des diapositives (toutes les 5 secondes ici)
const interval = setInterval(nextSlide, 5000); // Change d'image toutes les 5 secondes

// Arrêter le carrousel automatique lorsque l'utilisateur interagit avec les flèches de navigation
document.querySelector('.arrow_left').addEventListener('click', () => {
  clearInterval(interval);
  prevSlide();
});

document.querySelector('.arrow_right').addEventListener('click', () => {
  clearInterval(interval);
  nextSlide();
});

window.addEventListener('load', preloadImages);

document.querySelector('.arrow_left').addEventListener('click', prevSlide);
document.querySelector('.arrow_right').addEventListener('click', nextSlide);


