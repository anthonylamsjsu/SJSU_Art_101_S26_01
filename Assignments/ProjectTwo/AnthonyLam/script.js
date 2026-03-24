let score = 742;

const scoreEl = document.getElementById("score");
const statusLabel = document.getElementById("statusLabel");
const statusDesc = document.getElementById("statusDesc");
const slider = document.getElementById("scoreSlider");

const blob1 = document.getElementById("blob1");
const blob2 = document.getElementById("blob2");
const blob3 = document.getElementById("blob3");
const blob4 = document.getElementById("blob4");

function updateScoreFromSlider(value) {
  score = parseInt(value, 10);

  if (scoreEl) {
    scoreEl.textContent = score;
  }

  updateThemeByScore();
}

function lerp(start, end, t) {
  return start + (end - start) * t;
}

function rgba(r, g, b, a = 1) {
  return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${a})`;
}

function getScoreColor(t) {
  let r, g, b;

  if (t < 0.5) {
    const mid = t / 0.5;
    r = lerp(255, 255, mid);
    g = lerp(92, 201, mid);
    b = lerp(114, 120, mid);
  } else {
    const mid = (t - 0.5) / 0.5;
    r = lerp(255, 95, mid);
    g = lerp(201, 242, mid);
    b = lerp(120, 172, mid);
  }

  return { r, g, b };
}

function updateThemeByScore() {
  const t = score / 1000;
  const { r, g, b } = getScoreColor(t);

  document.body.style.background = `
    radial-gradient(circle at 20% 0%, ${rgba(r, g, b, 0.10)}, transparent 28%),
    radial-gradient(circle at 80% 10%, ${rgba(r, g, b, 0.08)}, transparent 24%),
    linear-gradient(180deg, #0a0b10 0%, #070a08 100%)
  `;

  if (blob1) blob1.style.background = `radial-gradient(circle, ${rgba(r + 20, g + 20, b + 20, 0.85)}, transparent 70%)`;
  if (blob2) blob2.style.background = `radial-gradient(circle, ${rgba(r, g, b, 0.75)}, transparent 70%)`;
  if (blob3) blob3.style.background = `radial-gradient(circle, ${rgba(r - 10, g - 10, b - 10, 0.70)}, transparent 70%)`;
  if (blob4) blob4.style.background = `radial-gradient(circle, ${rgba(r + 30, g + 30, b + 30, 0.35)}, transparent 70%)`;

  if (score >= 700) {
    if (statusLabel) statusLabel.textContent = "Trusted Citizen";
    if (statusDesc) {
      statusDesc.textContent =
        "Eligible for priority services, financial access, and exclusive social spaces.";
    }
  } else if (score >= 400) {
    if (statusLabel) statusLabel.textContent = "Monitored Citizen";
    if (statusDesc) {
      statusDesc.textContent =
        "Your access remains active, but behavioral fluctuations are under review.";
    }
  } else {
    if (statusLabel) statusLabel.textContent = "Restricted Citizen";
    if (statusDesc) {
      statusDesc.textContent =
        "Access to services, financial tools, and social privileges is currently limited.";
    }
  }

  if (slider) {
    slider.value = score;
  }
}

updateThemeByScore();
