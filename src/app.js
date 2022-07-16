const express = require("express");
const app = express();
const hbs = require("hbs")
const port = process.env.PORT || 3000
const path = require("path")




const staticpath = path.join(__dirname,"../public")
const tempPath = path.join(__dirname,"../templates/views")
const partPath = path.join(__dirname,"../templates/partials")
// const viewPath = path.join(__dirname,"../template/views")


app.set("view engine","hbs");
app.set("views", tempPath)
hbs.registerPartials(partPath)

app.use(express.static(staticpath))

app.get("",(req,res)=>{
res.render("index");
})

app.get("/about",(req,res)=>{
res.render("about");
})

app.get("/weather",(req,res)=>{
res.render("weather");
}) 

app.get("*",(req,res)=>{
res.render("404");
})

app.listen(port,()=>{
    console.log(`listening to the port${port}`)
})