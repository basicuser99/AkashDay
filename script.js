const text = [
  "> Compiling reasons I love you...",
  "> Done. (Too many to fit here!)",
  "> Wishing you the happiest birthday 🚀"
];

let i = 0, j = 0, currentText = '', isDeleting = false;

function type() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      currentText = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = text[i].substring(0, j--);
    }

    document.getElementById("typewriter").innerHTML = currentText;

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && j === text[i].length) {
      isDeleting = true;
      speed = 1000;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
      speed = 500;
    }

    setTimeout(type, speed);
  }
}

type();

// =======================
// Jupiter Facts
// =======================
const facts = [
  "Jupiter is so big that 1,300 Earths could fit inside it.",
  "A day on Jupiter lasts only 10 hours!",
  "Jupiter has at least 95 moons — one is called Europa, covered in ice.",
  "The Great Red Spot is a storm bigger than Earth that has lasted 350+ years!"
];

function showFact() {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("space-fact").innerText = fact;
}

// =======================
// Countdown to Next Birthday
// =======================
const nextBirthday = new Date("2026-09-09 T20:40:00"); 

function updateCountdown() {
  const now = new Date();
  const diff = nextBirthday - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerText = "🎉 It's your birthday again! 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("countdown").innerText =
    `⏳ ${days} days, ${hours} hours, ${mins} mins until your next orbit around the Sun 🌞`;
}

setInterval(updateCountdown, 60000);
updateCountdown();

