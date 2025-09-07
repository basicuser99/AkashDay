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
