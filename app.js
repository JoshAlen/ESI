var express = require("express");
var app = express();


app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(rep, res){
   res.render("landing"); 
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("server is running"); 
});
