// gsap.to("#box",{
//     x:1000,
//     rotation: 360,
//     duration: 1.5,
//     delay: 1,
// })
// gsap.to("#box2",{
//      x:1000,
//      backgroundColor:"yellow",
//     repeat:-1,
//     yoyo:true,
//     duration: 1,
//     delay: 2.5,
// })
// gsap.to("#box3",{
//      x:1000,
//      backgroundColor:"yellow",
   
//     duration: 1,
//     delay: 3.5,
// }
// )
var tl=gsap.timeline()
tl.to("#box",{
     x:1000,
    rotation: 360,
    duration: 1.5,
    delay: 1,
})
tl.to("#box2",{
  x:1000,
     backgroundColor:"yellow",
    repeat:-1,
    yoyo:true,
    duration: 1,
    
})
tl.to("#box3",{
        x:1000,
     backgroundColor:"yellow",
   
    duration: 1,
    
})