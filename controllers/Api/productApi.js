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
        let response = {
                data: categories,
                status: 200,
                count: categories.length,
                url: 'api/categories'


        }
        res.json(response);
      })
  },

  lastProduct: (req, res) => {
    Products.findAll({
      limit: 1,
      order: [["id", "DESC"]]     
     
    })
    .then((product) => {
      let response = {
        meta: {
          status: 200,
          url: "/api/product/lastItem/",
        },
        data: product,
      };
      res.json(response);
    });
  },
};

module.exports = productApi;
