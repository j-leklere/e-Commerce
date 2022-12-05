module.exports = (sequelize, dataTypes) => {
  let alias = "Cart";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: dataTypes.INTEGER,
    },
    user_id: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
    product_id: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
    createdAt: { type: dataTypes.INTEGER, field: "created_at" },
    updatedAt: { type: dataTypes.INTEGER, field: "updated_at" },
  };

  let config = {
    timestamps: true,
  };

  const Cart = sequelize.define(alias, cols, config);

  Cart.associate = (models) => {
    Cart.belongsTo(models.Product, {
      as: "products",
      foreignKey: "category_id",
    });
    Cart.belongsTo(models.User, {
      as: "users",
      foreignKey: "category_id",
    });
  };

  return Cart;
};
