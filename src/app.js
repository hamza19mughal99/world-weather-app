const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path")
const port = process.env.PORT || 8000;


//gets views folder
const staticPath = path.join(__dirname, "../public")
const templates_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");
// console.log(partial_path)

app.set('view engine', 'hbs');

app.use(express.static(staticPath))

app.set("views", templates_path)

//partials get
hbs.registerPartials(partial_path)


//public -> index.html 





app.get("/",(req , res) => {
    res.render("index")
});
app.get("/weather",(req , res) => {
    res.render("weather")
});

app.get("*",(req , res) => {
    res.render("404pages")
});
app.get("weather/*",(req , res) => {
    res.render("404pages")
});

app.listen(port , () =>{
    console.log(`${port} chl rha ha...`);
});