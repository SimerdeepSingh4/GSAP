let menu = document.querySelector("#menu")
let menuClose = document.querySelector("#menu-close")

menu.addEventListener("click", function(){
  console.log("hello")
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
tl.from("#full i",{
  opacity:0
})
})


