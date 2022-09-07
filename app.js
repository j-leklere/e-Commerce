const express = require("express");

const path = require("path");

const app = express();

const mainRouters = require('./routers/indexRouter');

const usersRouters = require('./routers/usersRouter');

const productsRouters = require('./routers/productsRouter');

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.use(mainRouters);

app.use(usersRouters);

app.use(productsRouters);

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});


app.get("/product", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/product.html"));
});

app.get("/productDetail", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productDetail.html"));
});

app.get("/productFutbol", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productFutbol.html"));
});

/*app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
*/
app.get("/productCart", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"));
});

// Para Heroku
app.listen(process.env.PORT || 3030, function() {
    console.log("Puerto funcionando en el 3030!");
});