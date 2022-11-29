module.exports = (sequelize, dataTypes) => {
  let alias = "Category";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING
    },
    createdAt: { type: dataTypes.INTEGER, field: "created_at" },
    updatedAt: { type: dataTypes.INTEGER, field: "updated_at" }
    
  };

  let config = {
    timestamps: true,
  };

  const Category = sequelize.define(alias, cols, config);

  Category.associate = models => {
    Category.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'category_id'
    });
    Category.hasMany(models.User, {
      as: 'users',
      foreignKey: 'category_id'
    });
  }

  return Category;
};
