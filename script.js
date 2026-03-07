let body = document.querySelector("body")
let marque = document.querySelectorAll("#move .marque")
let marque2 = document.querySelectorAll("#move2 .marque2")

let direction = 1; // 
let yPercent = 0;
const speed = 0.5;
gsap.to(marque, {
  yPercent: -100,
  duration: 3,
  repeat: -1,
  ease: "none",
});


gsap.to(marque2, {
  repeat: -1,
  yPercent: 100,
  duration: 3,
  ease: "none",
});

