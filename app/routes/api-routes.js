//**********ROUTES DB CRUD OPs*************************************************************************/
let db = require("../models");

module.exports = function (app) {

  //GET ALL RECIPES VIEW
  app.get('/recipes', function (req, res) {
    db.Recipe.findAll({}).then((data)=>{
      let formattedData = data;
      res.render('recipes', {recipes: formattedData})
    })
  });
 
  // GET SPECIFIC RECIPE
  app.get('/recipes/:main_alc', function (req, res) {
    let alcohol= req.params.main_alc;
    db.Recipe.findAll({where:{main_alc:alcohol}}).then((data)=>{
      let formattedData = data;
      res.render('recipes', {recipes: formattedData})
    })
    // res.render("recipes");
  });
  
  //POST NEW RECIPE
  app.post("/api/recipes", (req, res) => {
    console.log(req.body);
    db.Recipe.create({
      name: req.body.newRecipe.name,
      main_alc: req.body.newRecipe.main_alc,
      main_oz: req.body.newRecipe.main_oz,
      ing1: req.body.newRecipe.ing1,
      ing2: req.body.newRecipe.ing2,
      ing3: req.body.newRecipe.ing3,
      ing4: req.body.newRecipe.ing4,
      ing5: req.body.newRecipe.ing5,
      ing6: req.body.newRecipe.ing6,
      instructions: req.body.newRecipe.instructions

    }).then((newDrink) => {
      console.log(newDrink);
      // res.json(dbTodo);
    });
  });
}