const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns and rules for ProductTag model
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,

    // below shows the code for the ProductTag model
    // that will be used to create the product_tag table in the database.
    //  The ProductTag model should have the following columns: and the following rules: being the primary key,
    //  an integer, no null values, and uses the auto increment.
    //  The product_id column references the product model's id, and the tag_id column references the tag model's id.
    //  The product_id and tag_id columns should be defined as foreign keys.
    //

    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tag",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;

//     freezeTableName: true,
//     underscored: true,
//     modelName: 'product',
//   }
// );

// module.exports = Product;

// set up fields and rules for ProductTag model
