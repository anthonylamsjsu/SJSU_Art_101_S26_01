const blobs = document.querySelectorAll(".blob");

blobs.forEach(blob => {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;

  function move() {
    x += (Math.random() - 0.5) * 2;
    y += (Math.random() - 0.5) * 2;

    blob.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(move);
  }

  move();
});
