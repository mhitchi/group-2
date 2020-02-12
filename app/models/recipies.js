//=======================Dependencies===============================//

let Sequelize = require("sequelize");   //package reference
let sequelize = require("../config/connection.js"); //DB connection


//Create Recipe Model for DB
let Recipe = sequelize.define("recipe", {
    name: Sequelize.STRING,
    main_alc: Sequelize.STRING,
    main_oz: Sequelize.INTEGER,
    ing1: sequelize.STRING,
    ing2: sequelize.STRING,
    ing3: sequelize.STRING,
    ing4: sequelize.STRING,
    ing5: sequelize.STRING,
    ing6: sequelize.STRING,
    instructions: sequelize.STRING
})

Recipe.sync() // passes "recipe" table to the DB

module.exports = Recipe //