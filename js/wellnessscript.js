document.addEventListener("DOMContentLoaded", () => {
  const factsContent = document.querySelector(".facts-content");

  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
  });

  const facts = [
    "Your outie is excellent at ordering takeout. They once ordered from three different restaurants in one night just to create the perfect meal.",
    "Your outie has a collection of rubber ducks. They say it's for bathroom decoration, but we know it's because they find them oddly comforting.",
    "Your outie frequently loses arguments with their cat. The cat usually wins by making direct eye contact and slowly knocking things off tables.",
    "Your outie has a secret dance they do when they think no one is watching. It involves a lot of shoulder movement and finger guns.",
    "Your outie has named their houseplants. All of them are named after characters from their favorite TV shows.",
    "Your outie once spent three hours trying to take the perfect selfie with their cat. The cat was not cooperative.",
    "Your outie still uses their childhood stuffed animal as a pillow. They claim it's for neck support.",
    "Your outie has perfected the art of pretending to be on the phone to avoid awkward social interactions.",
    "Your outie regularly talks to their computer when it's being slow. They believe positive reinforcement might help.",
    "Your outie has a specific voice they use when talking to dogs. It's three octaves higher than their normal voice.",
    "Your outie once tried to learn juggling from YouTube videos. They gave up after breaking two mugs and a picture frame.",
    "Your outie has a drawer full of sauce packets from various restaurants. They're saving them for 'emergencies'.",
    "Your outie frequently practices their acceptance speech for awards they haven't been nominated for.",
    "Your outie has strong opinions about the proper way to load a dishwasher. They will reorganize it if someone else does it wrong.",
    "Your outie keeps buying succulents despite their track record of plant care being questionable at best.",
    "Your outie has a playlist called 'Songs to Dramatically Stare Out Windows To'.",
    "Your outie once spent an entire weekend binge-watching a show they didn't even like, just to see how it ended.",
    "Your outie has multiple unfinished craft projects hidden in various closets. They insist they'll finish them 'someday'.",
    "Your outie regularly Googles their own name to see what comes up. They're slightly disappointed when nothing interesting appears.",
    "Your outie has perfected the art of looking busy while actually doing absolutely nothing.",
    "Your outie still remembers all the lyrics to their middle school talent show performance.",
    "Your outie has a specific system for eating M&Ms. They insist it enhances the flavor experience.",
    "Your outie once tried to learn a new language by watching foreign movies. They only learned how to say 'Where is the bathroom?' and 'I am a pineapple'.",
    "Your outie has named their car and occasionally pats the dashboard as a way of saying 'good job'.",
    "Your outie has a secret folder of memes they've created but never shared because they're not sure if they're funny enough.",
    "Your outie once spent an entire day speaking in a British accent just to see if they could maintain it.",
    "Your outie has strong opinions about the Oxford comma and will defend its usage passionately.",
    "Your outie regularly sets their alarm clock 30 minutes early just so they can hit the snooze button multiple times.",
    "Your outie has attempted to recreate restaurant dishes at home. The results are usually... creative.",
    "Your outie maintains a list of potential band names despite not playing any instruments.",
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
