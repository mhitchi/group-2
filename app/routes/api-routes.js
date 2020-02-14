//**********ROUTES DB CRUD OPs*************************************************************************/
let db = require("../models");

module.exports = function (app) {

  //GET ALL RECIPES VIEW
  app.get('/recipes', function (req, res) {
    db.Recipe.findAll({}).then((data)=>{
      let formattedData = data;
      // res.render('recipes', {recipes: formattedData[0].dataValues.name})
      res.render('recipes', {recipes: formattedData})
    })
  });
 
  // GET SPECIFIC RECIPE
  app.get('/api/recipes/:main_alc', function (req, res) {
    res.render("recipes");
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