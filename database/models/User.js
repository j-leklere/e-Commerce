module.exports = (sequelize, dataTypes) => {
  let alias = "User";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: dataTypes.VARCHAR(45),
    },
    apellido: {
      type: dataTypes.VARCHAR(45),
    },
    fechaDeNacimiento: {
      type: dataTypes.DATE,
    },
    email: {
      type: dataTypes.VARCHAR(45),
    },
    password: {
      type: dataTypes.VARCHAR(45),
    },
    telefono: {
      type: dataTypes.VARCHAR(45),
    },
    category_id: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
    image: {
      type: dataTypes.VARCHAR(45),
    },
    createdAt: { type: dataTypes.INTEGER, field: "created_at" },
    updatedAt: { type: dataTypes.INTEGER, field: "updated_at" },
    deletedAt: { type: dataTypes.INTEGER, field: "deleted_at" },
  };

  let config = {
    tableName: "users",
    timestamps: true,
  };

  const User = sequelize.define(alias, cols, config);

  return User;
};
