document.addEventListener("DOMContentLoaded", () => {
  const mainGrid = document.getElementById("main-grid");
  const progressBar = document.getElementById("progress-bar");
  const completionMessage = document.getElementById("completion-message");
  const waffleBtn = document.getElementById("waffle-btn");
  const waffleImg = document.getElementById("waffle-img");
  const roundDisplay = document.getElementById("round-display");

  // Add hamburger menu functionality
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
  });

  let completedCount = 0;
  let currentRound = 1;
  let isDragging = false;
  let lastProcessed = null;

  // Touch handling
  mainGrid.addEventListener("touchstart", handleTouchStart);
  mainGrid.addEventListener("touchmove", handleTouchMove);
  mainGrid.addEventListener("touchend", handleTouchEnd);

  function handleTouchStart(e) {
    isDragging = true;
    processTouch(e.touches[0]);
  }

  function handleTouchMove(e) {
    if (isDragging) {
      processTouch(e.touches[0]);
    }
  }

  function handleTouchEnd() {
    isDragging = false;
    lastProcessed = null;
  }

  function processTouch(touch) {
    const element = document.elementFromPoint(touch.clientX, touch.clientY);

    if (
      element &&
      element.dataset.interactive &&
      !element.classList.contains("disappeared") &&
      element !== lastProcessed
    ) {
      lastProcessed = element;
      handleNumberClick(element);
    }
  }

  function createGrid() {
    mainGrid.innerHTML = "";
    for (let i = 0; i < 300; i++) {
      const gridItem = document.createElement("div");
      gridItem.className = "grid-item";
      gridItem.textContent = Math.floor(Math.random() * 10);

      const row = Math.floor(i / 30);
      const col = i % 30;
      if (
        currentRound === 1 &&
        row >= 4 &&
        row <= 6 &&
        col >= 14 &&
        col <= 16
      ) {
        if (completedCount < 9) {
          activateNumber(gridItem);
        } else {
          gridItem.style.fontWeight = "normal";
        }
      }

      if (
        currentRound === 2 &&
        row >= 3 &&
        row <= 5 &&
        col >= 12 &&
        col <= 14
      ) {
        activateNumber(gridItem);
      }

      mainGrid.appendChild(gridItem);
    }
  }

  function activateNumber(element) {
    element.classList.add("vibrating");
    element.dataset.interactive = true;
  }

  function handleNumberClick(element) {
    element.classList.add("disappeared");
    animateDisappearance(element);
    updateProgress();
  }

  function animateDisappearance(element) {
    element.style.transition = "transform 1s, opacity 1s";
    element.style.transform = `translateY(${
      window.innerHeight - element.getBoundingClientRect().top
    }px)`;
    element.style.opacity = "0";
  }

  function updateProgress() {
    completedCount++;
    const totalNumbers = 18;
    const progress = (completedCount / totalNumbers) * 100;
    progressBar.style.width = `${progress}%`;

    if (completedCount === 9) {
      currentRound = 2;
      roundDisplay.textContent = "Round 2/2";
      createGrid();
    } else if (completedCount === 18) {
      showCompletion();
    }
  }

  function showCompletion() {
    mainGrid.classList.add("hidden");
    document.querySelector(".progress-container").classList.add("hidden");
    completionMessage.classList.remove("hidden");
  }

  // Updated confetti function
  function triggerConfetti() {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 1000,
    };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Create confetti from multiple origins
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  }

  // Updated waffle party handler
  waffleBtn.addEventListener("click", () => {
    completionMessage.classList.add("hidden");
    mainGrid.classList.add("hidden"); // Ensure grid is hidden
    document.querySelector(".progress-container").classList.add("hidden");
    waffleImg.classList.remove("hidden");
    waffleImg.classList.add("fullscreen-waffle");

    // Delay confetti slightly to ensure everything else is ready
    setTimeout(triggerConfetti, 100);
  });

  createGrid();
});
