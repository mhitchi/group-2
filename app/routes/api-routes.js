//**********ROUTES DB CRUD OPs*************************************************************************/
let db = require("../models");

module.exports = function (app) {

  //GET ALL RECIPES
  app.get('/api/recipes/all', function (req, res) {
    
  });

  //GET RECIPES BY MAIN ALC
  app.get('/api/recipes/:main_alc', function (req, res) {
    // res.render("index");
  });

  //POST NEW RECIPE
  app.post("/api/recipes", (req, res) => {
    console.log(req.body);
    db.Todo.create({
      name: req.body.whatever,
      main_alc: req.body.whatever,
      main_oz: req.body.whatever,
      ing1: req.body.whatever,
      ing2: req.body.whatever,
      ing3: req.body.whatever,
      ing4: req.body.whatever,
      ing5: req.body.whatever,
      ing6: req.body.whatever,
      instructions: req.body.whatever

    }).then((newRecipe) => {
      console.log(newRecipe);
      // res.json(dbTodo);
    });
  });
}