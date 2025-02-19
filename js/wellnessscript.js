document.addEventListener("DOMContentLoaded", () => {
  const factsContent = document.querySelector(".facts-content");

  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
  });

  const facts = [
    "Your outie finds great comfort in their childhood tube pillow. It has been with them longer than most of their friendships. This is a mark of loyalty.",
    "Your outie has mastered the art of culinary improvisation. They call it a 'kabilla.' Others call it an unholy union of leftovers and tortillas. Both perspectives are valid.",
    "Your outie believes TikTok is beneath them. And yet, they scroll. This is a healthy contradiction.",
    "Your outie insists all medical dramas are inaccurate. This is true. And yet, people still survive surgeries. This is a mystery.",
    "Your outie refuses to listen to mainstream music. Their operating room playlist confuses both patients and colleagues. This is the sound of individuality.",
    "Your outie owns more cycling gear than casual clothes. They believe they could survive exclusively on two wheels. This is an admirable delusion.",
    "Your outie has three cats, but this is only the beginning. If left unchecked, they would become a full-time cat curator. This is a destiny they have not yet accepted.",
    "Your outie claims to be skilled at Borderlands. The game does not agree. The struggle for self-awareness continues.",
    "Your outie required 35 years to conquer eye contacts. They battled. They blinked. They emerged victorious. This is an inspiration to us all.",
  ];

  function createFactElements() {
    facts.forEach((fact) => {
      const factElement = document.createElement("div");
      factElement.className = "fact";
      factElement.textContent = fact;
      factsContent.appendChild(factElement);
    });
  }

  createFactElements();
});
