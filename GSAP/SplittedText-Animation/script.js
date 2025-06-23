function textBreaker(){
var head=document.querySelector("h1")
var headtext=head.textContent
var splitted=headtext.split('')
var clutter=''
var halfvalue=Math.floor(splitted.length/2)
splitted.forEach((e,idx)=>{
    if(idx<halfvalue){
         clutter+=`<span class="a">${e}</span>`
    }else{
         clutter+=`<span class="b">${e}</span>`
    }
   
})
head.innerHTML=clutter
}
textBreaker()
gsap.from(".a",{
    y:100,
    opacity: 0,
    duration: 0.3,
    stagger: +0.3,
})
gsap.from(".b",{
    y:100,
    opacity: 0,
    duration: 0.3,
    stagger: -0.3,
})
