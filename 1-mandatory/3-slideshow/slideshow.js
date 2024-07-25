let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let stopwatch = null;

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active"); // remove active class for all other slides
  }
  slides[currentSlide].classList.add("active"); // set active class to current slide
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1; // If the current slide index is less than 0 (meaning we have reached the beginning of the slides), then the current slide index is set to the last slide, by setting currentSlide equal to slides.length - 1.
  }
  showSlide();
}

document.querySelector(".forward").addEventListener("click", nextSlide);
document.querySelector(".back").addEventListener("click", prevSlide);

function autoForward() {
  if (stopwatch !== null) {
    clearInterval(stopwatch); // to clear the 'queue of clicks' if I clicked the button more than once
  }
  stopwatch = setInterval(nextSlide, 2000); // nextSlide function called every 2 secs
}
function autoBack() {
  if (stopwatch !== null) {
    clearInterval(stopwatch); // to clear the 'queue of clicks' if I clicked the button more than once
  }
  stopwatch = setInterval(prevSlide, 3000); // prevSlide function called every 3 secs
}

document.querySelector(".autoForward").addEventListener("click", autoForward);
document.querySelector(".autoBack").addEventListener("click", autoBack);
document.querySelector(".stop").addEventListener("click", function () {
  clearInterval(stopwatch); // to clear the 'queue of clicks' if I clicked the button more than once
});
