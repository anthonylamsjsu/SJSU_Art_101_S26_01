let score = 742;

const scoreEl = document.getElementById("score");
const statusEl = document.getElementById("status");

const blob1 = document.getElementById("blob1");
const blob2 = document.getElementById("blob2");
const blob3 = document.getElementById("blob3");
const blob4 = document.getElementById("blob4");

function updateScore(value) {
  score = parseInt(value);

  scoreEl.textContent = score;

  updateTheme();
}

function updateTheme() {
  let color;

  if (score >= 700) {
    color = "green";
    statusEl.textContent = "Trusted Citizen";
  } else if (score >= 400) {
    color = "orange";
    statusEl.textContent = "Monitored Citizen";
  } else {
    color = "red";
    statusEl.textContent = "Restricted Citizen";
  }

  if (color === "green") {
    blob1.style.background = "radial-gradient(circle, #5ff2ac, transparent)";
    blob2.style.background = "radial-gradient(circle, #8dffcc, transparent)";
  }

  if (color === "orange") {
    blob1.style.background = "radial-gradient(circle, #ffc978, transparent)";
    blob2.style.background = "radial-gradient(circle, #ffb15c, transparent)";
  }

  if (color === "red") {
    blob1.style.background = "radial-gradient(circle, #ff5c72, transparent)";
    blob2.style.background = "radial-gradient(circle, #ff7a8f, transparent)";
  }
}

updateTheme();
