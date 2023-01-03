let db = require("../../database/models");
const Op = db.Sequelize.Op;
const Products = db.Product;
const Categories = db.Category;

const productApi = {
  products: (req, res) => {
    Products.findAll()
      .then((products) => {
        for (let i = 0; i < products.length; i++) {
          products[i].setDataValue(
            "detail",
            `http://localhost:3000/api/products/${products[i].id}`
          );
        }

        /* Imprime url de la foto para consumir */
        for (let i = 0; i < products.length; i++) {
          products[i].setDataValue(
            "image_url",
            `http://localhost:3000/images/${products[i].image}`
          );
        }

        let response = {
          count: products.length,
          data: products,
          status: 200,
        };

        res.status(200).json(response);
      })
      .catch((error) => res.json(error));
  },

  productDetail: (req, res) => {
    Products.findByPk(req.params.id)
      .then(function (product) {
        let response = {
          id: product.id,
          name: product.productName,
          brand: product.brand,
          description: product.description,
          year: product.color,
          price: product.price,
          size: product.size,
          image: `http://localhost:3000/images/${product.image}`,
          status: 200,
        };

        res.status(200).json(response);
      })
      .catch((error) => res.json(error));
  },
  categoriesList: (req, res) => {
    Categories.findAll()
      .then(categories => {
        let respuesta = {
                data: categories,
                status: 200,
                count: categories.length,
                url: 'api/categories'


        }
        res.json(respuesta);
      })
  },

  search: (req, res) => {
    Products.findAll({
      where: {
        productName: { [Op.like]: "%" + req.query.keyword + "%" },
      },
    })
      .then((products) => {
        if (products.length > 0) {
          /* Imprime url de la foto para consumir */
          for (let i = 0; i < products.length; i++) {
            products[i].setDataValue(
              "image_url",
              `http://localhost:3000/images/${products[i].image}`
            );
          }
          res.status(200).json({
            data: products,
            status: 200,
          });
        } else {
          res.status(200).json({
            data: "No existen productos con ese nombre",
            status: 200,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

module.exports = productApi;
