document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startWork");
  const elevator = document.getElementById("elevator");
  const landing = document.getElementById("landing");
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  let audioContext = null;

  function initAudioContext() {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
  }

  // Update menu toggle functionality
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
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

  // Close menu when resizing window
  window.addEventListener("resize", () => {
    menu.classList.remove("active");
    menuToggle.classList.remove("active");
  });

  function playTone(frequency, duration = 600) {
    // Extended duration to 600ms
    const ctx = initAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    // Using sine wave for clean tone
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

    // Configure gain (volume envelope)
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.7, ctx.currentTime + 0.01);
    gainNode.gain.linearRampToValueAtTime(
      0.7,
      ctx.currentTime + duration / 1000 - 0.05
    );
    gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + duration / 1000);

    // Connect nodes
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    // Play tone
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration / 1000);

    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  }

  // Elevator sequence
  if (startButton) {
    startButton.addEventListener("click", async function () {
      initAudioContext();

      landing.classList.add("hidden");
      elevator.classList.remove("hidden");

      try {
        // First tone - G5 (784 Hz)
        await playTone(784);

        // Wait 200ms between tones
        await new Promise((resolve) => setTimeout(resolve, 200));

        // Second tone - C#5 (554.37 Hz)
        await playTone(554.37);

        // Wait before navigation
        setTimeout(() => {
          window.location.href = "pages/work.html";
        }, 1800); // Extended wait time to account for longer tones
      } catch (error) {
        console.error("Error playing tones:", error);
      }
    });
  }
});
