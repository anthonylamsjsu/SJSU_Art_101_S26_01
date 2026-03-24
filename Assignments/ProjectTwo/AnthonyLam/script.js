let score = 742;

function changeScore(amount) {
  score += amount;

  // prevent going below 0 or above 1000 (optional but nice)
  if (score < 0) score = 0;
  if (score > 1000) score = 1000;

  document.getElementById("score").textContent = score;
}
