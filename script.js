// script.js
document.querySelector(".celebrate-btn").addEventListener("click", () => {
  // Hide button and start confetti
  document.querySelector(".celebrate-btn").style.display = "none";
  createConfetti();
});

function createConfetti() {
  const confettiContainer = document.querySelector(".confetti");
  confettiContainer.style.display = "block";

  for (let i = 0; i < 100; i++) {
    const confettiPiece = document.createElement("div");
    confettiPiece.classList.add("confetti-piece");
    confettiPiece.style.left = `${Math.random() * 100}vw`;
    confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confettiPiece.style.backgroundColor = `hsl(${
      Math.random() * 360
    }, 100%, 50%)`;
    confettiContainer.appendChild(confettiPiece);
  }
}
