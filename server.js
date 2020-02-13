const db = require("./app/models");
const express = require("express");//Express Node Package to create back-end server/routes/control-flow
const exphbs = require("express-handlebars");// Handle Bars - Templating Engine deliver/format data to front end
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

//sets up express to handle data parsing
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

// // TRIED BASIC:
// app.engine('.handlebars', exphbs({extname: '.handlebars'}));
// app.set('view engine', '.handlebars');

// TRIED path.join, threw ENOENT
let viewsPath = path.resolve(__dirname, "/app", "/views")
app.set('views', viewsPath);
app.engine("handlebars", exphbs({ defaultLayout: "main", layoutsDir: viewsPath + '/layouts'})); 
app.set("view engine", "handlebars");
console.log(path.join(__dirname, "/app", "/views"))

// Allows app to implement handlebars to template data
// TRIED .handlebars, tried path.resolve, tried , extname: '.handlebars' 
// app.engine(".handlebars", exphbs({ defaultLayout: "main", layoutsDir: viewsPath + '/layouts', extname: '.handlebars' })); 
// app.set("view engine", ".handlebars");
// console.log(path.resolve(__dirname, "/app", "/views"))

//static directory
app.use(express.static("./app/static/assets"));

//routes
require("./app/routes/api-routes.js")(app);

//wrap app.listen with db.sequelize to make sure database is ready
db.sequelize.sync({ force:true }).then(function(){
  app.listen(PORT, function(){
    console.log("Listening on port", PORT);
  });
});