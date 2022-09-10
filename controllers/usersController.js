let categorias = [
    {
        id : 1,
        nombre: "Hombres"
    },
    {
        id: 2,
        nombre: "Mujer"
    },
    {
        id: 3,
        nombre: "niños"
    },
    {
        id: 4,
        nombre: "Otros"
    }
];

const usersController = {

    login: (req,res) => {
        res.render('../views/users/login')
    },
    register: (req,res) => {
        res.render('../views/users/register')
    },
    crearEditar: (req,res) => {
        res.render('../views/users/crearEditar.ejs',{categorias: categorias})
    }
};

module.exports = usersController;