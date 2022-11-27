-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-11-2022 a las 01:35:27
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sportswear_db`
--
DROP DATABASE IF EXISTS Sportswear_db;
CREATE DATABASE Sportswear_db;
USE Sportswear_db;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart`
--

CREATE TABLE `cart` (
  `id` int(10) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_id` int(10) NOT NULL,
  `product_id` int(10) NOT NULL,
  `quantity` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(10) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Mujer', NULL, NULL),
(2, 'Niños', NULL, NULL),
(3, 'Hombre', NULL, NULL),
(4, 'Futbol', NULL, NULL),
(5, 'Tenis', NULL, NULL),
(6, 'Running', NULL, NULL),
(7, 'Basquet', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `year` varchar(45) NOT NULL,
  `image` varchar(45) NOT NULL,
  `brand` varchar(45) NOT NULL,
  `size` varchar(45) NOT NULL,
  `price` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `category_id` int(10) UNSIGNED DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `created_at`, `updated_at`, `name`, `description`, `year`, `image`, `brand`, `size`, `price`, `status`, `category_id`, `deleted_at`) VALUES
(1, NULL, NULL, 'Nike Lebron', 'Zapatillas Basquet', '2022', 'usama-akram-kP6knT7tjn4-unsplash.jpg', 'NIKE', '11', '152', '1', 7, NULL),
(2, NULL, NULL, 'Nike Jordan', 'Zapatillas Basquet', '2021', 'hunter-johnson-0UCGfN2qtrs-unsplash.jpg', 'NIKE', '10.5', '100', '1', 7, NULL),
(3, NULL, NULL, 'UnderArmourX', 'Zapatillas Curry', '2020', 'jakob-owens-j5kEQ1JLqZk-unsplash.jpg', 'UNDER ARMOUR', '9', '85', '1', 7, NULL),
(4, NULL, NULL, 'UnderArmour+', 'Zapatillas Basquet femenino', '2022', 'hermes-rivera-w83s82yd3Fk-unsplash.jpg', 'UNDER ARMOUR', '7', '110', '1', 3, NULL),
(5, NULL, NULL, 'Camiseta cuello V', 'Camiseta cuello V Tennis mujer', '2020', 'H92e94eebd32f4e858ece8cd24a649f79H.png', 'WILSON', 'L', '35', '1', 1, NULL),
(6, NULL, NULL, 'Wilson Pack', 'Raqueta y tubo de pelotitas', '2021', 'wilson-pack.jpg', 'WILSON', '', '28', '1', 5, NULL),
(7, NULL, NULL, 'Camiseta niños', 'Camiseta niños Nike futbol', '2022', 'md-mahdi-Icytk30Iko8-unsplash.jpg', 'NIKE', '8', '25', '1', 2, NULL),
(8, NULL, NULL, 'Pack Futbol', 'Botines y pelota de futbol', '2022', 'connor-coyne-OgqWLzWRSaI-unsplash.jpg', 'ADIDAS', '35', '36', '1', 1, NULL),
(9, NULL, NULL, 'Camiseta de futbol', 'Camiseta de futbol Hombre', '2022', 'ben-weber-r-krWscXjvQ-unsplash.jpg', 'ADIDAS', 'L', '40', '1', 3, NULL),
(10, NULL, NULL, 'Camiseta Futbol', 'Camiseta de Futbol River Plate', '2022', 'river-plate-adidas-2021-2022-camiseta-suplent', 'ADIDAS', 'S', '45', '1', 2, NULL),
(11, NULL, NULL, 'Zapatillas Running', 'Zapatillas Running Nike', '2022', 'kristian-egelund-wmdcUQ0CJ4c-unsplash.jpg', 'NIKE', '10', '120', '1', 6, NULL),
(12, NULL, NULL, 'Botines mujer', 'Botines New Balance azules', '2022', 'botines-azules.jpg', 'NEW BALANCE', '6', '125', '1', 2, NULL),
(13, NULL, NULL, 'Camiseta Nike Blanca', 'Camiseta Blanca Nike GYM', '2022', 'nike-camiseta-blanca-dry-cw6101-100-hombre.jp', 'NIKE', 'S', '20', '1', 3, NULL),
(14, NULL, NULL, 'Camiseta UnderArmour', 'Camiseta UnderArmour Tennis', '2022', 'underarmour-leadjpg.jpg', 'UNDER ARMOUR', 'M', '35', '1', 1, NULL),
(15, NULL, NULL, 'Camiseta Asics', 'Camiseta Azul Running', '2021', 'gallery_4550330598853_1.jpeg', 'ASICS', 'S', '40', '1', 1, NULL),
(16, NULL, NULL, 'Adidas Z32', 'Zapatillas Adidas Running', '2022', 'image-1664409090056.jpg', 'ADIDAS', '9.5', '30', '1', 3, NULL),
(17, NULL, NULL, 'Pelota Futbol UCL', 'Pelota Champions League', '2017', 'image-1664409272393.jpg', 'NIKE', '', '25', '1', 4, NULL),
(18, NULL, NULL, 'Esquíes', 'Par de esquies para la nieve', '2021', 'image-1664409335045.jpg', 'XSPORTS', 'L', '70', '1', 0, NULL),
(19, NULL, NULL, 'Pelotitas de Tennis', 'Tubo de 3 pelotitas de Tennis', '2019', 'pelotadetenis.jpg', 'PENN', '', '10', '1', 5, NULL),
(20, NULL, NULL, 'Remera Adidas', 'Remera Adidas Deportiva', '2021', 'image-1664416735818.jpg', 'ADIDAS', 'L', '18', '1', 3, NULL),
(21, NULL, NULL, 'Asics GT-1000', 'Zapatillas Asics Running', '2022', 'image-1665689423659.jpg', 'ASICS', '10', '75', '1', 6, NULL),
(22, NULL, NULL, 'Camiseta Adidas AFA', 'Camiseta Selección Argentina de futbol', '2022', 'image-1665689703902.jpg', 'ADIDAS', 'L', '89', '1', 4, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `genero` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `fechaDeNacimiento` datetime NOT NULL,
  `category_id` int(10) UNSIGNED DEFAULT NULL,
  `image` varchar(45) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `created_at`, `updated_at`, `nombre`, `apellido`, `genero`, `email`, `password`, `telefono`, `fechaDeNacimiento`, `category_id`, `image`, `deleted_at`) VALUES
(1, NULL, NULL, 'Valentina', 'Adle', 'Mujer', 'valentinaadle1@gmail.com', '$2a$10$rM0AUn7GVPSLI6UFSxzZm.1OKBSscyoBdVyhuVQiZBca7ZWGqBNja', '3816976925', '2002-01-25 00:00:00', 6, 'image-1667616600265.jpg', NULL),
(2, NULL, NULL, 'javier', 'jazmin', 'Hombre', 'javjazmin@yahoo.com.ar', '$2a$10$Jywhn938Zono66UQ7FIkoeSwK0QY8W6ai12ZPzX4ekrNs3jLyiv0K', '12345667878', '1981-01-16 00:00:00', 5, 'image-1667856493627.jpg', NULL),
(3, NULL, NULL, 'Joaquin', 'Leklere', 'Hombre', 'jleklere@yahoo.com.ar', '$2a$10$HTqQZEqYN.uD7CP7U7xcu.YL86BOfHyhHSPjRvyY8QINZ6q/QLUB2', '1134222910', '2003-10-29 00:00:00', 5, 'image-1667226565208.png', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
