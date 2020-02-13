const db = require("./app/models");
const express = require("express");//Express Node Package to create back-end server/routes/control-flow
const exphbs = require("express-handlebars");// Handle Bars - Templating Engine deliver/format data to front end
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

//sets up express to handle data parsing
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

//SHOULD BE SETTING VIEW PATH TO __dirname/app/views (right now it justlooking for __dirname/views)
let viewsPath = path.join(__dirname, "/app", "/views")
app.set('views', viewsPath);
// Allows app to implement handlebars to template data
app.engine("handlebars", exphbs({ defaultLayout: "main", layoutsDir: viewsPath + '/layouts' })); 
app.set("view engine", "handlebars");
console.log(path.join(__dirname, "/app", "/views"))

//static directory
app.use(express.static("./app/static"));

//routes
require("./app/routes/api-routes.js")(app);

//wrap app.listen with db.sequelize to make sure database is ready
db.sequelize.sync({ force:true }).then(function(){
  app.listen(PORT, function(){
    console.log("Listening on port", PORT);
  });
});