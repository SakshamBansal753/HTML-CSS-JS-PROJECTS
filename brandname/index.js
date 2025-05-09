import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname=dirname(fileURLToPath(import.meta.url))
const app = express();
const port = 3000;
var b_name=""
app.use(bodyParser.urlencoded({extended:true}))
function brandname(req,res,next){
    const bodyreq=req.body;
    b_name=bodyreq["street"]+bodyreq["pet"]
    next();
}
app.use(brandname)

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html")
})
app.post("/submit",(req,res)=>{
  res.send(`<p>Your Brand Name is${b_name}`)
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
