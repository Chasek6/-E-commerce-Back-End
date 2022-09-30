const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Tag extends Model {}

Tag.init(
  // define columns
  // define columns and their data types which will be used in the Tag model and table in the database
  // and the rules for each column thst will be used in the Tag model and table in the database and the rules for each column
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;

// above shows the code for the Tag model that will be used to create the tag table in the database.
//  The Tag model should have the following columns: and the following rules: being the primary key,
//  an integer, no null values, and uses the auto increment.
//  The tag_name column should be a string, and it should not be able to be null.
//
