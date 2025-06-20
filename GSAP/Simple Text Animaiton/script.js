var ti=gsap.timeline()

ti.from("h2",{
    y:-30,
    duration: 1,
    opacity: 0,
    delay:0.5
})
ti.from("h4",{
    y:-30,
    duration: 0.5,
    opacity: 0,
    
    stagger:0.3
})
ti.from("h1",{
    y:20,
    opacity:0,
    duration:2,
    scale: 0.5,
})
