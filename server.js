var express = require ("express");
var bodyParser = require ("body-parser");
var expressHdl = require("express-handlebars");

var PORT = process.env.PORT || 8080;
var db = require("./models");
var app=express ();
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


require("./routes/api-routes.js")(app);


db.sequelize.sync().then(function(){
 app.listen(PORT, function () { console.log("server is listening on: http://localhost:"+PORT)
    
});
   
})
