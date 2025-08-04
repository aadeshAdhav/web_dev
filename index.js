let currentIndex = 0;
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
}

// Modal open/close
const modal = document.getElementById("modal");
const enrollBtn = document.getElementById("enrollBtn");
const closeBtn = document.querySelector(".close");

enrollBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Optional: form submit handling
document.getElementById("enrollForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form submitted! Thank you.");
  modal.style.display = "none";
  this.reset();
});
