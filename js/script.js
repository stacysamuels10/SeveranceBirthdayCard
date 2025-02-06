/* script.js - Interactive Behavior */
document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startWork");
  const elevator = document.getElementById("elevator");
  const hallway = document.getElementById("hallway");
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  if (startButton) {
    startButton.addEventListener("click", function () {
      document.getElementById("landing").classList.add("hidden");
      elevator.classList.remove("hidden");

      // Play elevator sound after a short delay
      setTimeout(() => {
        elevator.classList.add("hidden");
        hallway.classList.remove("hidden");
      }, 3000); // 3-second delay simulating the elevator ride
    });
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("hidden");
    });
  }
});
