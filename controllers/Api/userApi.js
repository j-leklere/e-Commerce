const db = require("../../database/models");
const Users = db.User;

const userApi = {
  allUsers: (req, res) => {
    Users.findAll({
      attributes: ["id", "nombre", "apellido", "email"],
    })
      .then((users) => {
        for (let i = 0; i < users.length; i++) {
          users[i].setDataValue(
            "detail",
            `http://localhost:3000/api/users/${users[i].id}`
          );
        }

        let response = {
          count: users.length,
          users: users,
          status: 200,
        };

        res.status(200).json(response);
      })
      .catch((error) => res.json(error));
  },

  profile: (req, res) => {
    Users.findByPk(parseInt(req.params.id, 10))
      .then((user) => {
        let response = {
          id: user.id,
          nombre: user.nombre,
          apellido: user.apellido,
          email: user.email,
          genero: user.genero,
          image: `http://localhost:3000/images/avatars/${user.image}`,
        };
        res.status(200).json(response);
      })
      .catch((error) => console.error(error));
  },
};
module.exports = userApi;