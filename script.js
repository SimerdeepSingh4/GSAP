let body = document.querySelector("body")
let marque = document.querySelectorAll("#marque")
let arrow = document.querySelectorAll(".arrow")

const marqueeTween = gsap.to(marque, {
  xPercent: -100,
  duration: 3,
  repeat: -1,
  ease: "none",
});

const arrowMove = gsap.to(".arrow",{
  rotate:180,
})

window.addEventListener("wheel", (e) => {
  const isDown = e.deltaY > 0;
  marqueeTween.timeScale(isDown ? 1 : -1);
  arrowMove.timeScale(isDown? 1: -1)
});