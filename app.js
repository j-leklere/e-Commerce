// Módulos
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const createError = require("http-errors");
const session = require("express-session");
const cookieParser = require("cookie-parser");

//Middlewares
const localsMiddleware = require("./middlewares/localsMiddleware");
const rememberMiddleware = require("./middlewares/rememberMiddleware");

// Configuración
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(rememberMiddleware);
app.use(localsMiddleware);

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

// Routes
const mainRoutes = require("./routes/indexRouter");
const usersRoutes = require("./routes/usersRouter");
const productsRoutes = require("./routes/productsRouter");

// app.use("/products", productsRouter);
app.use("/", mainRoutes);
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);

// ************ Catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ Error handler ************
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

// Para Heroku
// app.listen(process.env.PORT || 3030, function () {
//   console.log("Puerto funcionando en el 3030!");
// });
