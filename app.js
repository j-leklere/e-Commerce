const express = require("express");

const path = require("path");

const createError = require('http-errors');

const app = express();

const mainRouters = require('./routers/indexRouter');

const usersRouters = require('./routers/usersRouter');

const productsRouters = require('./routers/productsRouter');

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.use(mainRouters);

app.use(usersRouters);

app.use(productsRouters);

// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

// Para Heroku
app.listen(process.env.PORT || 3030, function() {
    console.log("Puerto funcionando en el 3030!");
});