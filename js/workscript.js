// Update workscript.js
document.addEventListener("DOMContentLoaded", () => {
  const mainGrid = document.getElementById("main-grid");
  const progressBar = document.getElementById("progress-bar");
  const completionMessage = document.getElementById("completion-message");
  const waffleBtn = document.getElementById("waffle-btn");
  const waffleImg = document.getElementById("waffle-img");
  const roundDisplay = document.getElementById("round-display");

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

  // Initial grid setup
  function createGrid() {
    mainGrid.innerHTML = "";
    for (let i = 0; i < 300; i++) {
      const gridItem = document.createElement("div");
      gridItem.className = "grid-item";
      gridItem.textContent = Math.floor(Math.random() * 10);

      // First round position
      const row = Math.floor(i / 30);
      const col = i % 30;
      if (
        currentRound === 1 &&
        row >= 4 &&
        row <= 6 &&
        col >= 14 &&
        col <= 16
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
    const totalNumbers = 18; // 9 per round × 2 rounds
    const progress = (completedCount / totalNumbers) * 100;
    progressBar.style.width = `${progress}%`;

    if (completedCount === 9) {
      currentRound = 2;
      roundDisplay.textContent = "Round 2/2";
      createSecondRound();
    } else if (completedCount === 18) {
      showCompletion();
    }
  }

  function createSecondRound() {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((item, index) => {
      const row = Math.floor(index / 30);
      const col = index % 30;
      // Second round position (different location)
      if (row >= 8 && row <= 10 && col >= 14 && col <= 16) {
        if (!item.classList.contains("disappeared")) {
          activateNumber(item);
        }
      }
    });
  }

  function showCompletion() {
    mainGrid.classList.add("hidden");
    document.querySelector(".progress-container").classList.add("hidden");
    completionMessage.classList.remove("hidden");
  }

  // Waffle party handler
  waffleBtn.addEventListener("click", () => {
    waffleImg.classList.remove("hidden");
    completionMessage.classList.add("hidden");
    triggerConfetti();
  });

  // Initialize first round
  createGrid();
});
