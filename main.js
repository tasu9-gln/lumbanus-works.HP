document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const track = slider.querySelector('.slides');
  const slides = track.querySelectorAll('img');
  const prevBtn = slider.querySelector('#prevBtn');
  const nextBtn = slider.querySelector('#nextBtn');
  const captionTitle = slider.querySelector('.caption__title');
  const captionDesc = slider.querySelector('.caption__desc');
  const dotsContainer = slider.querySelector('.dots');

  let currentIndex = 0;

  function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    captionTitle.textContent = slides[currentIndex].dataset.title || '';
    captionDesc.textContent = slides[currentIndex].dataset.desc || '';
    updateDots();
  }

  function updateDots() {
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'dot';
      if (i === currentIndex) dot.classList.add('is-active');
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlide();
      });
      dotsContainer.appendChild(dot);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
  }, 5000);

  updateSlide();
});
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-track img');

