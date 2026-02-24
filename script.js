// gsap.to("#box1",{
//     x:1200,
//     rotate:360,
//     duration:1.5,
//     delay:1,
// })

// gsap.to("#box2",{
//     x:1200,
//     backgroundColor:"yellow",
//     rotate:360,
//     duration:1.5,
//     delay:2.5,
// })
// gsap.to("#box3",{
//     x:1200,
//     backgroundColor:"green",
//     scale:0.5,
//     borderRadius:"50%",
//     rotate:360,
//     duration:1.5,
//     delay:4,
// })


let tl = gsap.timeline()

tl.to("#box1",{
    x:1200,
    rotate:360,
    duration:1.5,
    delay:1
})

tl.to("#box2",{
    x:1200,
    rotate:360,
    duration:1.5,
    delay:1
})
tl.to("#box3",{
    x:1200,
    rotate:360,
    duration:1.5,
    delay:1
})