// Countdown Timer
const weddingDate = new Date("2025-10-05T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Fade-in on scroll
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate only once
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));

// Google Map
function initMap() {
  const location = { lat: 40.7128, lng: -74.0060 }; // Default: NYC
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });
  new google.maps.Marker({
    position: location,
    map: map,
    title: "Wedding Location",
  });
}
