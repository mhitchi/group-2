
//Create Recipe Model for DB
module.exports = function(sequelize, Datatypes){
  var Recipe = sequelize.define("Recipe", {
    name: Datatypes.STRING,
    main_alc: Datatypes.STRING,
    main_oz: Datatypes.INTEGER,
    ing1: Datatypes.STRING,
    ing2: Datatypes.STRING,
    ing3: Datatypes.STRING,
    ing4: Datatypes.STRING,
    ing5: Datatypes.STRING,
    ing6: Datatypes.STRING,
    instructions: Datatypes.STRING
  });
  return Recipe;
}
