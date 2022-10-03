const fs = require("fs");
const path = require("path");

function findAll() {
  const jsonData = fs.readFileSync(
    path.join(__dirname, "../data/products.json")
  );
  const data = JSON.parse(jsonData);
  return data;
}

function writeFile(data) {
  const dataString = JSON.stringify(data, null, 10);
  fs.writeFileSync(path.join(__dirname, "../data/products.json"), dataString);
}

const productsController = {
  list: (req, res) => {
    const data = findAll();
    res.render("../views/products/products", { products: data });
  },

  detail: (req, res) => {
    const data = findAll();
    const productFound = data.find(function (product) {
      return product.id == req.params.id;
    });
    res.render("../views/products/productDetail", { product: productFound });
  },

  create: (req, res) => {
    res.render("../views/products/product-create-form");
  },

  store: (req, res) => {
    const data = findAll();
    const newProduct = {
        id: data.length + 1,
        codigo: req.body.code,
        nombre: req.body.name,
        descripcion: req.body.description,
        anio: Number(req.body.year),
        categoria: req.body.category,
        talla: req.body.size,
        precio: Number(req.body.price),
        estado: true,
        image: req.file.filename
    };
    data.push(newProduct);
    writeFile(data);

    res.redirect("/products");
    },

  edit: (req, res) => {
    const data = findAll();
    const productFound = data.find(function (product) {
      return product.id == req.params.id;
    });
    res.render("../views/products/product-update-form", {
      product: productFound,
    });
  },

  update: (req, res) => {
    const data = findAll();
    const productFound = data.find(function (product) {
      return product.id == req.params.id;
    });
    productFound.nombre = req.body.name;
    productFound.codigo = req.body.code;
    productFound.descripcion = req.body.description;
    productFound.anio = req.body.year;
    productFound.categoria = req.body.category;
    productFound.talla = req.body.size;
    productFound.precio = req.body.price;
    productFound = req.file ?  req.file.params : productFound.image

    writeFile(data);

    res.redirect("../views/products/products");
  },

  destroy: (req, res) => {
    const data = findAll();
    const productFound = data.find(function (product) {
      return product.id == req.params.id;
    });
    data.splice(productFound, 1);
    writeFile(data);
    res.redirect("../views/products/products");
  },

  categories: (req, res) => {
    res.render("../views/products/categories");
  },
  productCart: (req, res) => {
    res.render("../views/products/productCart");
  },
 /* productDetail: (req, res) => {
    res.render("../views/products/productDetail");
  },*/
  productFutbol: (req, res) => {
    res.render("../views/products/productFutbol");
  },
};

module.exports = productsController;
