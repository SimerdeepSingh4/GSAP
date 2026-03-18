function breakText() {
    let h1 = document.querySelector("h1")
    let h1Text = h1.textContent


    let splittedText = h1Text.split("")

    let clutter = ""
    let halfValue = splittedText.length / 2

    splittedText.forEach((char, idx) => {
        if (idx < halfValue) {
            clutter += `<span class="a">${char}</span>`
            return
        } else {
            clutter += `<span class="b">${char}</span>`
        }
    })

    h1.innerHTML = clutter
}

breakText()

gsap.from("h1 .a", {
    y: 50,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.15,
    opacity: 0
})

gsap.from("h1 .b", {
    y: 50,
    duration: 0.6,
    delay: 0.5,
    stagger: -0.15,
    opacity: 0
})
