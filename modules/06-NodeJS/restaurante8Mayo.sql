-- MySQL dump 10.13  Distrib 8.0.38, for macos14 (arm64)
--
-- Host: localhost    Database: restaurante
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,'Maria Garcia','Madrid','mg@gmail.com','12345','1990-04-02'),(2,'Ana Gonzales','Madrid','ag@gmail.com','12347','1994-05-04'),(3,'Maria Garcia','Madrid','mg@gmail.com','12345','1990-04-02'),(4,'Ana Gonzales','Madrid','ag@gmail.com','12347','1994-05-04'),(5,'anacleta garcia','Madrid','ag@gmail.com','12345','1990-04-02'),(6,'Stephany Smith','Berlin','st@mail.ru','54776353','1995-03-05'),(7,'Pat Brown','Melburn','PB@gmail.com','736563673','1994-04-07'),(8,'Peter Smith','London','PETER@gmail.com','66574764','1985-03-12'),(9,'Ana Garcia','Badajoz','Ana@gmail.com','77453673','1997-01-02'),(10,'Ariana Akhter','Manchester','arianaA@gmail.com','64656444','1998-01-12'),(11,'Sierra Brown','Florida','siErra@gmail.com','76454764','2000-05-04'),(12,'Thijs Mito','Amsterdam','TjI@mail.ru','9464674','1979-04-04'),(13,'Jakob Maximovich','Badajoz','Ana@gmail.com','77453673','1997-01-02'),(14,'Mateuzs Meyachnich','Krakow','MateuZS@gmail.com','8765364','1999-07-05');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mesa`
--

DROP TABLE IF EXISTS `mesa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mesa` (
  `id` int NOT NULL AUTO_INCREMENT,
  `capacidad` tinyint unsigned DEFAULT NULL,
  `numero` tinyint unsigned DEFAULT NULL,
  `id_restaurante` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_restaurante` (`id_restaurante`),
  CONSTRAINT `mesa_ibfk_1` FOREIGN KEY (`id_restaurante`) REFERENCES `restaurante` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mesa`
--

LOCK TABLES `mesa` WRITE;
/*!40000 ALTER TABLE `mesa` DISABLE KEYS */;
INSERT INTO `mesa` VALUES (1,4,1,1),(2,6,2,1),(3,2,3,1),(4,8,4,1),(5,10,5,1),(6,4,1,2),(7,2,2,2),(8,6,3,2),(9,4,1,3),(10,4,2,3),(11,6,1,4),(12,8,2,4),(13,5,1,5),(14,2,2,5),(15,8,3,5);
/*!40000 ALTER TABLE `mesa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `platillo`
--

DROP TABLE IF EXISTS `platillo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `platillo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `precio` decimal(4,2) DEFAULT NULL,
  `id_restaurante` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_restaurante` (`id_restaurante`),
  CONSTRAINT `platillo_ibfk_1` FOREIGN KEY (`id_restaurante`) REFERENCES `restaurante` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `platillo`
--

LOCK TABLES `platillo` WRITE;
/*!40000 ALTER TABLE `platillo` DISABLE KEYS */;
INSERT INTO `platillo` VALUES (10,'Sushi Variado',15.99,1),(11,'Ramen Especial',12.50,1),(12,'Pizza Margarita',10.00,2),(13,'Pasta Carbonara',13.75,2),(14,'Parrillada Mixta',25.99,4),(15,'Paella Valenciana',18.50,5),(16,'Tacos al Pastor',9.99,7),(17,'Entrecot Argentino',29.00,6),(18,'Dim Sum Variado',14.25,9),(19,'Coq au Vin',22.00,10);
/*!40000 ALTER TABLE `platillo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reserva`
--

DROP TABLE IF EXISTS `reserva`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reserva` (
  `fecha` datetime DEFAULT NULL,
  `personas` tinyint unsigned DEFAULT NULL,
  `id_mesa` int NOT NULL,
  `id_cliente` int NOT NULL,
  PRIMARY KEY (`id_mesa`,`id_cliente`),
  KEY `id_cliente` (`id_cliente`),
  CONSTRAINT `reserva_ibfk_1` FOREIGN KEY (`id_mesa`) REFERENCES `mesa` (`id`),
  CONSTRAINT `reserva_ibfk_2` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reserva`
--

LOCK TABLES `reserva` WRITE;
/*!40000 ALTER TABLE `reserva` DISABLE KEYS */;
INSERT INTO `reserva` VALUES ('2025-04-10 19:00:00',4,1,1),('2025-04-11 20:00:00',2,2,2),('2025-04-12 18:30:00',2,3,3),('2025-04-13 21:00:00',5,4,4),('2025-04-14 19:45:00',6,5,2),('2025-04-15 20:15:00',3,6,6),('2025-04-16 18:00:00',4,7,7),('2025-04-17 19:30:00',2,8,2),('2025-04-18 21:15:00',5,9,9),('2025-04-19 20:45:00',3,10,10);
/*!40000 ALTER TABLE `reserva` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurante`
--

DROP TABLE IF EXISTS `restaurante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurante` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `tipo_cocina` varchar(50) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `valoracion` decimal(3,1) DEFAULT NULL,
  `fecha_creacion` date DEFAULT NULL,
  `capacidad` tinyint unsigned DEFAULT NULL,
  `id_usuario` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_restaurate_usuario_idx` (`id_usuario`),
  CONSTRAINT `fk_restaurate_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurante`
--

LOCK TABLES `restaurante` WRITE;
/*!40000 ALTER TABLE `restaurante` DISABLE KEYS */;
INSERT INTO `restaurante` VALUES (1,'Diverso','hfhff','Americana',NULL,9.8,NULL,NULL,NULL),(2,'Vips','jfhfhf','Espanola',NULL,7.0,NULL,NULL,NULL),(3,'Asia','Madrid',NULL,NULL,5.4,NULL,NULL,NULL),(4,'Milano','Madrid',NULL,NULL,10.0,NULL,NULL,NULL),(5,'Pepe el Guarro','Madrid',NULL,NULL,6.5,NULL,NULL,NULL),(6,'Asia','Madrid','Italiana',NULL,7.8,NULL,NULL,NULL),(7,'Milano','Madrid','Italiana',NULL,9.1,NULL,NULL,NULL),(8,'Asia1','Madrid','Japonesa',NULL,4.5,NULL,NULL,NULL),(9,'Ginos','Madrid','Italiana',NULL,9.7,NULL,NULL,NULL),(10,'Pepe el Guarro','Madrid','Espanola',NULL,9.7,NULL,NULL,NULL),(11,'Casa Lucio','Calle Cava Baja 35, Madrid','Española','913-658-217',4.7,'2010-03-15',80,NULL),(12,'El Celler de Can Roca','Carrer de Can Sunyer 48, Girona','Catalana','972-222-157',4.9,'2009-05-10',60,NULL),(13,'Arzak','Av. del Alcalde José Elosegi 273, San Sebastián','Vasca','943-278-465',4.8,'2007-06-20',55,NULL),(14,'Tickets','Av. del Paral·lel 164, Barcelona','Creativa','934-433-040',4.6,'2011-02-01',45,NULL),(15,'DiverXO','Calle Padre Damián 23, Madrid','Fusión','915-700-766',4.9,'2014-10-12',70,NULL),(16,'Botín','Calle Cuchilleros 17, Madrid','Castellana','913-664-217',4.5,'1725-12-01',90,NULL),(17,'Aponiente','Puerto Escondido 6, El Puerto de Santa María','Marinera','956-851-870',4.8,'2015-09-18',50,NULL),(18,'Etxebarri','San Juan Plaza 1, Axpe, Bizkaia','Brasa','946-583-042',4.9,'2006-07-22',40,NULL),(19,'La Trainera','Calle Lagasca 60, Madrid','Mariscos','915-762-159',4.3,'1999-11-10',65,NULL),(20,'Can Majó','Calle Almirall Aixada 23, Barcelona','Mediterránea','932-215-546',4.4,'2001-04-19',75,NULL),(21,'La Mar Salada','Passeig Joan de Borbó 58, Barcelona','Mediterránea','932-212-127',4.2,'2002-08-09',60,NULL),(22,'Casa Mono','Calle Tutor 37, Madrid','Internacional','911-701-980',4.1,'2016-03-27',85,NULL),(23,'Rías de Galicia','Calle Lleida 7, Barcelona','Gallega','934-245-231',4.7,'1995-06-15',70,NULL),(24,'Asador Etxebarri','San Juan Plaza 1, Atxondo','Brasa','946-583-042',4.8,'2008-10-04',35,NULL),(25,'Zuberoa','Araneder Bidea, Oiartzun','Vasca','943-491-228',4.7,'2005-05-12',50,NULL),(26,'Kabuki Wellington','Calle Velázquez 6, Madrid','Japonesa','915-775-844',4.6,'2013-01-25',40,NULL),(27,'Sudestada','Calle Ponzano 85, Madrid','Asiática','914-457-720',4.3,'2017-07-08',60,NULL),(28,'La Vaca y La Huerta','Calle Recoletos 13, Madrid','Carnes','917-819-692',4.4,'2018-02-14',55,NULL),(29,'Casa Carmen','Calle de Alcalá 149, Madrid','Mediterránea','911-693-073',4.2,'2019-11-21',100,NULL),(30,'Sacha','Calle Juan Hurtado de Mendoza 11, Madrid','Autor','913-457-410',4.8,'2003-09-01',30,NULL),(33,'Restaurante Otro Nuevo','C Barco 32','Moderna','99819912',4.5,'2023-02-21',50,NULL),(34,'Restaurante Otro Nuevo','C Barco 32','Moderna','99819912',4.5,'2023-02-21',50,NULL),(35,'Restaurante Ultra Chachi','C Gran Vía 32','Moderna','99819912',4.5,'2023-02-21',50,NULL),(36,'Restaurante Mega Moderno','C Sevilla 32','Moderna','99819912',4.5,'2023-02-21',50,NULL),(37,'Restaurante Mega Moderno','C Sevilla 32','Moderna','99819912',4.5,'2023-02-21',50,6),(38,'Casa Paqui','Calle Mayor 45','artesanal','9919911',9.0,'2025-04-29',15,6);
/*!40000 ALTER TABLE `restaurante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('admin','moderador','general') DEFAULT 'general',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (4,'lourdes','lourditas@gmail.com','$2b$08$gijk5AuFMjuMivmJWTa6luR0XKIQ0yDK5n6Zfi5TUOFHFnQ2BuSJa','general'),(5,'luis','luisete@gmail.com','$2b$08$RWeBn.WCsu.Kjhr9EFenzu9Fx9BZX3O/sxk2mEMvgNcbmcKOBZNDq','general'),(6,'admin','admin@gmail.com','$2b$08$HWpiditANeQEKVdQPp0D5ubfWZpw7q/OT6tFuhHin2eCb7oXzI7zu','admin'),(7,'mario','mario@gmail.com','$2b$08$pPC1GIxl5sGEbWtNA5dqEuQQA6D62DbMEVJWUNlYEHK3UDZ9oaIaC','admin'),(8,'Prueba','prueba@gmail.com','$2b$08$hwNaL.CRMx8lcsuuJrxQFOHAbejokn6z7bcU4DEf14WiIXmGG2cha','moderador'),(9,'pedrito','pedri@gmail.com','$2b$08$F/bhwFA536j1c220qrCUHuB4ek9c0S.IH/pIY.RpCiiTXLJY.0fFG','admin'),(12,'pedrito1','pedri2@gmail.com','$2b$08$tmxrMauwOPZxy//0GCfvz.L0QOu3.WqhJaa9g8/Gb21/14.s5Ihem','admin'),(13,'pedrito3','pedri3@gmail.com','$2b$08$lIGdREsOhdLFP2i16W0H.e6poGSyDKLNhqHwMmh2Q5xjmlSa6/nBq','admin'),(14,'asdasd','asdasd','$2b$08$.JbDHLzW/mihsBIMpY/BR.d4ejSrDmZaRA1wep922zV/5SArl/40W','general'),(16,'sadasdsadasdasd','asdasdasdasd','$2b$08$pwQDK5.w5xFj.04FeoeNbOeZKyqxBW9Tw.VRILC11h9V3IUYNmMzO','general');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-08 19:24:36
