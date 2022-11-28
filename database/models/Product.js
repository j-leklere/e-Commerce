module.exports = (sequelize, dataTypes) => {
  let alias = "Product";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING
    },
    description: {
      type: dataTypes.STRING,
      foreignKey: true,
    },
    year: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
    price: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
    status: {
      type: dataTypes.STRING,
      foreignKey: true,
    },
    brand: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
    category_id: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
    size: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
    image: {
      type: dataTypes.STRING,
      foreignKey: true,
    },
    createdAt: { type: dataTypes.INTEGER, field: "created_at" },
    updatedAt: { type: dataTypes.INTEGER, field: "updated_at" },
    deletedAt: { type: dataTypes.INTEGER, field: "deleted_at" },
  };

  let config = {
    tableName: "products",
    timestamps: true,
  };

  const Product = sequelize.define(alias, cols, config);

  return Product;
};
