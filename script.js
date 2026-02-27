gsap.to("#page2 h1",{
    transform:"translate(-190%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -190%",
        scrub:2,
        pin:true
    }
})

