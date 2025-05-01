var noofbutton=document.querySelectorAll(".drum").length
for(var i=0;i<noofbutton;i++){
 document.querySelectorAll(".drum")[i].addEventListener("click",function () {
   var btnInnerHTML=this.innerHTML
   switch(btnInnerHTML){
      case "w":
         var audio=new Audio("sounds/tom-1.mp3");
         audio.play();
         break;
      case "a":
         var audio=new Audio("sounds/tom-2.mp3");
         audio.play();
         break;
      case "s":
         var audio=new Audio("sounds/tom-3.mp3");
         audio.play();
         break;
      case "d":
         var audio=new Audio("sounds/tom-4.mp3");
         audio.play();
         break;
      case "j":
         var audio=new Audio("sounds/snare.mp3");
         audio.play();
         break;
      case "k":
         var audio=new Audio("sounds/crash.mp3");
         audio.play();
         break;
      case "l":
         var audio=new Audio("sounds/kick-bass.mp3");
         audio.play();
         break;
      default:
         console.log("Error")
   }
   buttonanimation(btnInnerHTML)
})
}
document.addEventListener("keypress",function(event){
   var btnInnerHTML=event.key.toLowerCase();
   switch(btnInnerHTML){
      case "w":
         var audio=new Audio("sounds/tom-1.mp3");
         audio.play();
         break;
      case "a":
         var audio=new Audio("sounds/tom-2.mp3");
         audio.play();
         break;
      case "s":
         var audio=new Audio("sounds/tom-3.mp3");
         audio.play();
         break;
      case "d":
         var audio=new Audio("sounds/tom-4.mp3");
         audio.play();
         break;
      case "j":
         var audio=new Audio("sounds/snare.mp3");
         audio.play();
         break;
      case "k":
         var audio=new Audio("sounds/crash.mp3");
         audio.play();
         break;
      case "l":
         var audio=new Audio("sounds/kick-bass.mp3");
         audio.play();
         break;
      default:
         console.log("Error")
   }
   buttonanimation(btnInnerHTML)
});
function buttonanimation (current){
   var active=document.querySelector("."+current);
active.classList.add("pressed");
setTimeout(function (){
active.classList.remove("pressed");
},100);

}
