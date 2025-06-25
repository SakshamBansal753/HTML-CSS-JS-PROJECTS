var animate = document.querySelector("#mate");
var animetext = animate.textContent;
var clutter1 = "";
var splitted = animetext.split('');
var tl = gsap.timeline();

splitted.forEach((e, i) => {
    clutter1 += `<span class="char${i}">${e === ' ' ? '&nbsp;' : e}</span>`;
});
animate.innerHTML = clutter1;

var anything = document.querySelector("#anything");
var anythingtext = anything.textContent;
var clutter2 = "";
var sp = anythingtext.split('');

sp.forEach((e, i) => {
    clutter2 += `<span class="anythingchar${i}">${e === ' ' ? '&nbsp;' : e}</span>`;
});
anything.innerHTML = clutter2;

console.log(document.querySelector(".char0")); 

tl.from(".char0", {
    rotationX: -120,
    y:12,
    opacity: 0.5,
    duration: 1,
    delay: 0.5,
    
});
tl.from(".char1",{
    rotationY:360,
    opacity: 0,
   
    onComplete:()=>{
         var c=document.querySelector(".char1");
         c.innerHTML='n'
    }
});
tl.fromTo(".circle", {
    opacity: 0,
    x: -120
}, {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2.out"
});

tl.to(".circle", {
    rotationZ: 360,
    duration: 2.5,
    ease: "power2.inOut",
    repeat:-1,
    repeatDelay: 2,
});

tl.from(".char2",{
    y:-120,
    opacity: 0,
})
tl.from(".char3",{
    opacity: 0,
    x:-30
})
tl.to([".char5",".char6"],{
    y:120,
    opacity:0,
     ease: "power1.in",
    onComplete:()=>{
        var d=document.querySelector(".char5");
        var e=document.querySelector(".char6");
        d.innerHTML="t"
        e.innerHTML="e"
    },
    opacity:1,
    y:0
    
})
tl.fromTo([".char5", ".char6"], 
  { y: -120, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
);
tl.from(".char4",{
    opacity: 0,
    y:22,
})
tl.from(".anythingchar0",{
    y:50,
    opacity: 0,
   ease:"elastic.out(2,0.3)",
   duration:2,

})
tl.from(".anythingchar2",{
    rotationY:360,
    opacity: 0,
    y:-120
})
tl.from(".anythingchar1",{
    y:50,
    opacity: 0,
   ease:"elastic.out(2,0.3)",
   duration:2,

})
tl.from(".anythingchar3",{
    opacity:0
})
tl.from(".anythingchar4",{
    opacity:0,
    y:-120
})
tl.from(".anythingchar5",{
    opacity:0,
    rotationX:270,
    duration:1,
    repeat:-1,
    repeatDelay: 1,
})
tl.from(".anythingchar7",{
    opacity: 0,
    rotationZ:-120
})
tl.from(".anythingchar6",{
    opacity: 0,
    x:-20
})
tl.from(".spiral",{
    y:12,
    opacity: 0,
    duration:2,
    ease:"bounce.out(1,0.3)",
    
})
tl.from(".spiral",{
    y:-12,
    repeat:-1,
    duration: 2,
    repeatDelay:2,
    yoyo:true
})
