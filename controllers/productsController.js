const fs = require("fs");
const path = require("path");
const db = require('../database/models');
const sequelize = db.sequelize;

const Products = db.Product;
const Categories = db.Category;
const Cart = db.Cart;

// function findAll() {
//   const jsonData = fs.readFileSync(
//     path.join(__dirname, "../data/products.json")
//   );
//   const data = JSON.parse(jsonData);
//   return data;
// }

// function writeFile(data) {
//   const dataString = JSON.stringify(data, null, 10);
//   fs.writeFileSync(path.join(__dirname, "../data/products.json"), dataString);
// }

const productsController = {
  list: (req, res) => {
    // // const data = findAll();
    // res.render("../views/products/products", { products: data });
    Products.findAll()
    .then( products => {
      res.render('../views/products/products', {products})
    })
  },

  detail: (req, res) => {
    // const data = findAll();
    // const productFound = data.find(function (product) {
    //   return product.id == req.params.id;
    // });
    // res.render("../views/products/productDetail", { product: productFound });
    Products.findByPk(req.params.id , {include: [{association: 'categories'}
  ]})
    .then(product => {
        res.render('../views/products/productDetail.ejs', {product});
    });
  },



  create: (req, res) => {
      Categories.findAll()
      .then(function(categories){
        res.render("../views/products/product-create-form", {categories});
      })
  },

  store: (req, res) => {
    // const data = findAll();
    // const newProduct = {
    //   id: data.length + 1,
    //   brand: req.body.brand,
    //   name: req.body.name,
    //   description: req.body.description,
    //   year: Number(req.body.year),
    //   category: req.body.category,
    //   size: req.body.size,
    //   price: Number(req.body.price),
    //   status: true,
    //   image: req.file.filename,
    // };
    // data.push(newProduct);
    // writeFile(data);

    // res.redirect("/products");
    Products.create({
      brand: req.body.brand,
      name: req.body.name,
      description: req.body.description,
      year: Number(req.body.year),
      category_id: req.body.category,
      size: req.body.size,
      price: Number(req.body.price),
      status: true,
      image: req.file.filename,
  }) 
  .then(function(){
      res.redirect('/products');
  });
  },

  edit: (req, res) => {
    // const data = findAll();
    // const productFound = data.find(function (product) {
    //   return product.id == req.params.id;
    // });
    // res.render("../views/products/product-update-form", {
    //   product: productFound,
    // });
    Products.findByPk(req.params.id)
    let productRequest = Products.findByPk(req.params.id);
    let categoryRequest = Categories.findAll();

    Promise.all([productRequest, categoryRequest])
    .then(function([product, categories]){
        res.render("../views/products/product-update-form", {product, categories});

    })
  },

  update: (req, res) => {
    // console.log('llegue hasta aca')
    // const data = findAll();
    // const productFound = data.find(function (product) {
    //   return product.id == req.params.id;
    // });
    // productFound.name = req.body.name;
    // productFound.brand = req.body.brand;
    // productFound.description = req.body.description;
    // productFound.year = req.body.year;
    // productFound.category = req.body.category;
    // productFound.size = req.body.size;
    // productFound.price = req.body.price;
    // productFound.image = req.file ? req.file.filename : productFound.image

    // writeFile(data);

    // res.redirect('/products');
    let productId = req.params.id;
        Products.update({
          name: req.body.name,
          brand: req.body.brand,
          description: req.body.description,
          year: req.body.year,
          category_id: req.body.category,
          size :req.body.size,
          price: req.body.price,
          image: req.file ? req.file.filename : req.body.image
        },{
            where:{
            id: productId
            } 
        })
        .then(function(){
            res.redirect("/products")
        })
        .catch(error => res.send(error))
  },

  destroy: (req, res) => {
    // const data = findAll();
    // const productFound = data.findIndex(function (product) {
    //   return product.id == req.params.id;
    // });
    // data.splice(productFound, 1);
    // writeFile(data);
    // res.redirect("/products");

    let productId = req.params.id;
    Products.destroy({
            where: {id: productId},
            force: true
        })
        .then(function(){
            res.redirect('/products');
        })
  },

  categories: (req, res) => {
    res.render("./products/categories");
  },

  productCart: (req, res) => {
    res.render("./products/productCart");
  },
  // productDetail: (req, res) => {
  //   res.render("../views/products/productDetail");
  // },
  productFutbol: (req, res) => {
    res.render("./products/productFutbol");

  },
};

module.exports = productsController;
