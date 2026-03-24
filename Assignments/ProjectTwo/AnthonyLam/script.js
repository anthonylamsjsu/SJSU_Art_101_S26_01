let score = 742;

const scoreEl = document.getElementById("score");
const statusLabel = document.getElementById("statusLabel");
const statusDesc = document.getElementById("statusDesc");
const slider = document.getElementById("scoreSlider");

const blob1 = document.getElementById("blob1");
const blob2 = document.getElementById("blob2");
const blob3 = document.getElementById("blob3");
const blob4 = document.getElementById("blob4");

/* SLIDER CONTROL */
function updateScoreFromSlider(value) {
  score = parseInt(value);

  if (scoreEl) {
    scoreEl.textContent = score;
  }

  updateThemeByScore();
}

/* (Optional fallback if buttons exist) */
function changeScore(amount) {
  score += amount;

  if (score < 0) score = 0;
  if (score > 1000) score = 1000;

  if (scoreEl) {
    scoreEl.textContent = score;
  }

  // sync slider position if used
  if (slider) {
    slider.value = score;
  }

  updateThemeByScore();
}

/* MAIN THEME LOGIC */
function updateThemeByScore() {
  if (score >= 700) {
    document.body.style.background =
      "radial-gradient(circle at 20% 0%, rgba(95,242,172,0.08), transparent 28%), radial-gradient(circle at 80% 10%, rgba(184,255,227,0.06), transparent 24%), linear-gradient(180deg, #0a0b10 0%, #070a08 100%)";

    if (blob1) blob1.style.background = "radial-gradient(circle, #b8ffe3, transparent 70%)";
    if (blob2) blob2.style.background = "radial-gradient(circle, #8dffcc, transparent 70%)";
    if (blob3) blob3.style.background = "radial-gradient(circle, #5ff2ac, transparent 70%)";
    if (blob4) blob4.style.background = "radial-gradient(circle, rgba(217,255,232,0.45), transparent 70%)";

    if (statusLabel) statusLabel.textContent = "Trusted Citizen";
    if (statusDesc) {
      statusDesc.textContent =
        "Eligible for priority services, financial access, and exclusive social spaces.";
    }

  } else if (score >= 400) {
    document.body.style.background =
      "radial-gradient(circle at 20% 0%, rgba(255,210,120,0.10), transparent 28%), radial-gradient(circle at 80% 10%, rgba(255,170,90,0.08), transparent 24%), linear-gradient(180deg, #120d08 0%, #0c0907 100%)";

    if (blob1) blob1.style.background = "radial-gradient(circle, #ffe7a3, transparent 70%)";
    if (blob2) blob2.style.background = "radial-gradient(circle, #ffc978, transparent 70%)";
    if (blob3) blob3.style.background = "radial-gradient(circle, #ffb15c, transparent 70%)";
    if (blob4) blob4.style.background = "radial-gradient(circle, rgba(255,235,180,0.40), transparent 70%)";

    if (statusLabel) statusLabel.textContent = "Monitored Citizen";
    if (statusDesc) {
      statusDesc.textContent =
        "Your access remains active, but behavioral fluctuations are under review.";
    }

  } else {
    document.body.style.background =
      "radial-gradient(circle at 20% 0%, rgba(255,110,130,0.10), transparent 28%), radial-gradient(circle at 80% 10%, rgba(255,80,100,0.08), transparent 24%), linear-gradient(180deg, #14080b 0%, #0b0507 100%)";

    if (blob1) blob1.style.background = "radial-gradient(circle, #ffb3c1, transparent 70%)";
    if (blob2) blob2.style.background = "radial-gradient(circle, #ff7a8f, transparent 70%)";
    if (blob3) blob3.style.background = "radial-gradient(circle, #ff5c72, transparent 70%)";
    if (blob4) blob4.style.background = "radial-gradient(circle, rgba(255,180,190,0.35), transparent 70%)";

    if (statusLabel) statusLabel.textContent = "Restricted Citizen";
    if (statusDesc) {
      statusDesc.textContent =
        "Access to services, financial tools, and social privileges is currently limited.";
    }
  }
}

/* INITIAL LOAD */
updateThemeByScore();
