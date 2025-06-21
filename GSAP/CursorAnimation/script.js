var main=document.querySelector("#main")
var cursor=document.querySelector("#cursor")
var img=document.querySelector("#image")
main.addEventListener("mousemove",(e)=>{
   gsap.to(cursor,{
    x:e.x,
    y:e.y,
    duration: 0.5,
    
   })
})
img.addEventListener("mouseenter",(e)=>{
console.log(e)
cursor.innerHTML="View More"
gsap.to(cursor,{
    scale: 4,
})
})
img.addEventListener("mouseleave",(e)=>{
console.log(e)
cursor.innerHTML=""
gsap.to(cursor,{
    scale: 1,
})
})
