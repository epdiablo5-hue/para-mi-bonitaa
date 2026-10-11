// Fecha de inicio: 5 de junio de 2024.
const START_DATE = new Date(2024, 5, 5, 0, 0, 0);

function updateCounter() {
  const now = new Date();
  let diff = Math.max(0, now.getTime() - START_DATE.getTime());
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("days").textContent = days.toLocaleString("es-MX");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}
updateCounter();
setInterval(updateCounter, 1000);

// Animar secciones cuando aparecen al desplazarse.
const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

// Corazones decorativos suaves generados por JavaScript.
const sparkles = document.querySelector(".sparkles");
if (sparkles) {
  for (let i = 0; i < 14; i++) {
    const heart = document.createElement("span");
    heart.textContent = i % 3 === 0 ? "♡" : "·";
    heart.style.cssText = `
      position: fixed; z-index: -1; pointer-events: none;
      left: ${Math.random() * 100}%; top: ${Math.random() * 100}%;
      color: rgba(220, 91, 147, ${0.08 + Math.random() * 0.12});
      font-size: ${12 + Math.random() * 22}px;
      animation: float ${7 + Math.random() * 9}s ease-in-out ${Math.random() * -8}s infinite;
    `;
    sparkles.appendChild(heart);
  }
}
