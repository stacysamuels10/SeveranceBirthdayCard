document.addEventListener("DOMContentLoaded", () => {
  const mainGrid = document.getElementById("main-grid");
  const progressBar = document.getElementById("progress-bar");
  const completionMessage = document.getElementById("completion-message");
  const waffleBtn = document.getElementById("waffle-btn");
  const waffleImg = document.getElementById("waffle-img");
  let completedCount = 0;

  // Create main grid
  for (let i = 0; i < 300; i++) {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.textContent = Math.floor(Math.random() * 10);

    // Create 3x3 vibrating grid in the center
    const row = Math.floor(i / 30);
    const col = i % 30;
    if (row >= 4 && row <= 6 && col >= 14 && col <= 16) {
      gridItem.classList.add("vibrating");
      gridItem.dataset.interactive = "true";
    }

    mainGrid.appendChild(gridItem);
  }

  // Add click handlers to vibrating numbers
  document.querySelectorAll("[data-interactive]").forEach((item) => {
    item.addEventListener("click", () => {
      if (!item.classList.contains("disappeared")) {
        item.classList.add("disappeared");
        animateDisappearance(item);
        updateProgress();
      }
    });
  });

  function animateDisappearance(element) {
    element.style.transition = "transform 1s, opacity 1s";
    element.style.transform = `translateY(${
      window.innerHeight - element.getBoundingClientRect().top
    }px)`;
    element.style.opacity = "0";
  }

  function updateProgress() {
    completedCount++;
    const progress = (completedCount / 9) * 100;
    progressBar.style.width = `${progress}%`;

    if (completedCount === 9) {
      mainGrid.classList.add("hidden");
      document.querySelector(".progress-container").classList.add("hidden");
      completionMessage.classList.remove("hidden");
    }
  }

  // Waffle party handler
  waffleBtn.addEventListener("click", () => {
    waffleImg.classList.remove("hidden");
    completionMessage.classList.add("hidden");
    triggerConfetti();
  });

  function triggerConfetti() {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }
});
