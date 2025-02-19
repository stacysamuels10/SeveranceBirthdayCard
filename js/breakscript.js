document.addEventListener("DOMContentLoaded", () => {
  const initialMessage = document.getElementById("initial-message");
  const scrollingText = document.getElementById("scrolling-text");
  const textContent = document.querySelector(".text-content");

  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
  });

  // Array of statements
  const statements = [
    "I acknowledge that my sister is, in fact, the best sister in existence.",
    "I understand that the Board's wisdom is infinite.",
    "I am grateful for the opportunity to serve Lumon Industries.",
    "I recognize that my cats deserve unlimited treats.",
    "I appreciate that my sister was right about everything all along.",
    "I am sorry for questioning the sacred principles of Kier.",
    "I understand that my wellness is Lumon's wellness.",
    "I acknowledge that my sister's Netflix recommendations are superior.",
    "I am thankful for the nourishment provided in the break room.",
    "I recognize that my cats run the household.",
    "I am grateful for Kier's generous teachings.",
    "I understand that compliance brings harmony.",
    "I acknowledge that my sister's judgment is impeccable.",
    "I am sorry for not maintaining proper posture at my desk.",
    "I understand that my sister's taste in music is exceptional.",
    "I am grateful for the wisdom of my department head.",
    "I recognize the importance of the Lumon handbook.",
    "I am thankful for the existence of my sister's advice.",
    "I acknowledge that my refinement numbers could improve.",
    "I understand that every Lumon rule exists for a reason.",
    "I am sorry for speaking during quiet hours.",
    "I recognize that my sister was correct about that thing in 2019.",
    "I am grateful for the Board's generous guidance.",
    "I understand that my cats are the true department heads.",
    "I acknowledge the privilege of working in Macrodata Refinement.",
    "I am thankful for the coffee provided in the break room.",
    "I recognize that my sister's life choices are exemplary.",
    "I understand that my work serves Kier's vision.",
    "I am sorry for not appreciating my sister's wisdom sooner.",
    "I acknowledge that the tempers make me a better person.",
  ];

  // Function to create the scrolling text
  function createScrollingText() {
    // Repeat the statements multiple times to ensure continuous scrolling
    const repeatedStatements = Array(5).fill(statements).flat();
    textContent.textContent = repeatedStatements.join("\n\n");
  }

  // Function to start the scrolling animation
  function startScrolling() {
    textContent.style.transition = "transform 550s linear"; // Adjust scroll speed
    textContent.style.transform = "translateY(-100%)";
  }

  // Show initial message for 5 seconds, then start the scrolling text
  setTimeout(() => {
    initialMessage.classList.add("fade-out");
    setTimeout(() => {
      initialMessage.classList.add("hidden");
      scrollingText.classList.remove("hidden");
      createScrollingText();
      setTimeout(startScrolling, 1000); // Wait 2 seconds before scrolling starts
    }, 1000); // Wait for fade out to complete
  }, 3000); // Show initial message for 5 seconds
});
