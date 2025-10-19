window.onload = function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
     slides.forEach((slide) => {
        slide.style.display = "none";
     });
     slides[index].style.display = "block";
  }

  function nextSlide() {
     currentIndex = (currentIndex + 1) % slides.length;
     showSlide(currentIndex);
  }

  showSlide(currentIndex);
  setInterval(nextSlide, 3000);

  // 🎵 Background Music Toggle
  const music = document.getElementById("bg-music");
  const toggleBtn = document.getElementById("music-toggle");

  toggleBtn.addEventListener("click", () => {
     if (music.paused) {
        music.play();
        toggleBtn.textContent = "🔊";
     } else {
        music.pause();
        toggleBtn.textContent = "🔇";
     }
  });
};
