document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startWork");
  const elevator = document.getElementById("elevator");
  const landing = document.getElementById("landing");
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  // Hamburger menu functionality
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
      menu.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });

  // Elevator sequence
  if (startButton) {
    startButton.addEventListener("click", async function () {
      landing.classList.add("hidden");
      elevator.classList.remove("hidden");

      // First tone - Low G (196 Hz)
      await new Promise((resolve) => {
        setTimeout(() => {
          playTone(195); // G3
          resolve();
        }, 500);
      });

      // Second tone - High C# (554.37 Hz)
      await new Promise((resolve) => {
        setTimeout(() => {
          playTone(277); // C#5
          resolve();
        }, 1000);
      });

      // Navigate to work page
      setTimeout(() => {
        window.location.href = "pages/work.html";
      }, 2000);
    });
  }

  // Function to play a tone
  function playTone(frequency) {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + 0.5
    );

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5);
  }
});
