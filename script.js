let menu = document.querySelector("#menu")
let cross = document.querySelector("#menu-close")

let tl = gsap.timeline()

tl.to("#full", {
  right: "0",
  duration: 1
})

tl.from("#full h4", {
  x: 200,
  duration: 1,
  stagger: 0.25,
  opacity: 0
})
tl.from("#full i", {
  opacity: 0
})
tl.pause()

menu.addEventListener("click", function () {
  tl.play()
})

cross.addEventListener("click", function () {
  tl.reverse()
})


