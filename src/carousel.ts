let currentIndex: number = 0;
const totalSlides: number = 4;

const carousel = document.getElementById("carousel") as HTMLElement;
const dots: HTMLElement[] = Array.from({ length: totalSlides }, (_, i) =>
  document.getElementById(`dot${i}`) as HTMLElement
);

function updateCarousel(): void {
  if (!carousel) return;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach((dot, i) => {
    if (!dot) return;
    dot.classList.toggle("bg-black", i === currentIndex);
    dot.classList.toggle("bg-gray-400", i !== currentIndex);
  });
}

export function nextSlide(): void {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

export function prevSlide(): void {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

export function initCarousel(): void {
  let startX: number = 0;

  if (carousel) {
    carousel.addEventListener("touchstart", (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) {
        nextSlide();
      } else if (endX - startX > 50) {
        prevSlide();
      }
    });
  }

  updateCarousel();
}
