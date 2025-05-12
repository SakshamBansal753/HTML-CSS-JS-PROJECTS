import express from "express"
const app=express();
const port=3000;

app.get('/',(req,res)=>{
const d = new Date();
  const day = d.getDay()
  console.log(day)
  let type="a weekday"
  let adv="Its time to work"
  if(day==0||day==6){
    type="weekend";
    adv="Its time for rest "
  }
    res.render("index.ejs",{dayType:type,advice:adv,})
})


app.listen(port,()=>{
    console.log("localhost:3000")
})