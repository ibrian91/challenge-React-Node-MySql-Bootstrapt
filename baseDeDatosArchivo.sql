-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.30 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para usuarioscrud
CREATE DATABASE IF NOT EXISTS `usuarioscrud` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `usuarioscrud`;

-- Volcando estructura para tabla usuarioscrud.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `dni` int NOT NULL,
  `sexo` varchar(50) NOT NULL,
  `numTelef` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla usuarioscrud.usuarios: ~0 rows (aproximadamente)
INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `dni`, `sexo`, `numTelef`) VALUES
	(1, 'Ibrian', 'Giorgio', 35944424, 'Masculino', '1164414191'),
	(2, 'Cecilia', 'Fernandez', 29571710, 'Femenino', '1166141414'),
	(3, 'Danel', 'Giorgio', 20304587, 'Masculino', '1145623876'),
	(4, 'Susana', 'Amato', 16987675, 'Femenino', '1145698745'),
	(5, 'Jorge', 'Giorgio', 19765122, 'Masculino', ''),
	(6, 'Roberto', 'Fernandez', 12454678, 'Masculino', '1234523948'),
	(7, 'Elena', 'Jimenez', 33987569, 'Femenino', '1165758695'),
	(8, 'Ciro', 'Quique', 32456589, 'Masculino', '1134544409');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
