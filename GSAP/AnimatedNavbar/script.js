var menu=document.querySelector("#nav i")
var cross=document.querySelector('#full i')
var ti=gsap.timeline()
ti.to("#full",
    {
        right:"0",
        duration: 0.5,

    })
ti.from('#full h4',{
    x:100,
    duration:0.6,
    stagger: 0.2,
    opacity: 0,
})
ti.from("#full i",{
    opacity:0
})
ti.pause()
menu.addEventListener("click",()=>{
    ti.play()
})
cross.addEventListener("click",()=>{
    ti.reverse()
})
