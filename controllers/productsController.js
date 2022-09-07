const productsController = {

    product: (req,res) => {
        res.render('../views/products/product')
    },
    productCart: (req,res) => {
        res.render('../views/products/productCart')
    },
    productDetail: (req,res) => {
        res.render('../views/products/productDetail')
    },
    productFutbol: (req,res) => {
        res.render('../views/products/productFutbol')
    }
};

module.exports = productsController;