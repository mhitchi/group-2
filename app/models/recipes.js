
//Create Recipe Model for DB
module.exports = function(sequelize, Datatypes){
  var Recipe = sequelize.define("Recipe", {
    id: {
      type: Datatypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Datatypes.STRING,
      allowNull: false
    },
    main_alc: {
      type: Datatypes.STRING,
      allowNull: false
    },
    main_oz: Datatypes.DECIMAL,
    ing1: {
      type: Datatypes.STRING,
      allowNull: false
    },
    ing2: Datatypes.STRING,
    ing3: Datatypes.STRING,
    ing4: Datatypes.STRING,
    ing5: Datatypes.STRING,
    ing6: Datatypes.STRING,
    instructions: {
      type: Datatypes.STRING,
      allowNull: false
    }
  },{
    timestamps:false
  });
  return Recipe;
}
