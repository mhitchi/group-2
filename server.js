const db = require("./app/models");
const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

//sets up express to handle data parsing
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

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