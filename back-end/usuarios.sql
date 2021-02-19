-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: Feb 19, 2021 at 06:22 PM
-- Server version: 8.0.22
-- PHP Version: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `passport`
--

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `cep` int NOT NULL,
  `numero_usuario` int NOT NULL,
  `cidade_usuario` varchar(255) NOT NULL,
  `endereco_usuario` varchar(255) NOT NULL,
  `complemento_usuario` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `password`, `cep`, `numero_usuario`, `cidade_usuario`, `endereco_usuario`, `complemento_usuario`) VALUES
(2, 'jasmine', '$2a$10$TMKbPsCherAnsmnPcAtUCeP5jMj6pcES3rg7RdAajbMNpZTMHApfG', 16370000, 123, 'Promi', 'Av M. G', 4),
(3, 'jasmon', '$2a$10$0nNpPt8200wt2JqQnTPHgevzUh5mA1u/XSMDk.8R5d1yjISAgJ6nm', 2, 123, 'Promi', 'Av', 23),
(4, 'coisinha', '$2a$10$R/3O9YO0Hg9cAMgowYH0yuLaNsSwwjEfDwRVvez134XqLJgWWJ9Qe', 16370000, 123, 'Promi', 'Av M. Ggg', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
