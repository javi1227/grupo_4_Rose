-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: rose_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `street` varchar(50) NOT NULL,
  `number` varchar(100) NOT NULL,
  `province` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `NewTable_FK` (`user_id`),
  CONSTRAINT `NewTable_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (18,7,'Brandsen805','2011','',''),(21,8,'Los Simpsons','555','',''),(22,8,'asda','asdas','Buenos Aires','CABA'),(23,5,'Australia','444','Buenos Aires','CABA'),(45,5,'Brandsen','805','Ciudad Autónoma de Buenos Aires','BOCA');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (13,'Vino Tinto'),(14,'Vino dulce'),(15,'Vino Blanco'),(16,'Vino DigitalHouse'),(17,'Vino Rosado');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `category_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `stock` tinyint(4) NOT NULL,
  `discount` int(100) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_61` (`category_id`),
  CONSTRAINT `products_FK` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (42,'Pielihueso Malbec Primero 2021',13,2000,0,0,'Malbec Primero nace en la parte alta de Chacayes, al pie de los Andes. Fermentado con levaduras nativas en huevos de cemento, con una parte de racimos enteros y embotellado sin filtrar.'),(43,'Rosso D’ Uco 2019',13,2500,1,0,'Es un vino de corte clásico con base Sangiovese y otras variedades internacionales complementarias como Syrah y Merlot. En su crianza se utilizan barricas usadas con el fin de preservar la fruta y la expresión de lugar.'),(44,'Paso a Paso Bonarda 2019',13,1990,1,0,'Esta cofermentación de Malbec, Cabernet Sauvignon y Bonarda proviene de un parral de 50 años en Anchoris. Fermentado en huevos de hormigón y criado en barricas de roble usadas, el resultado es un vino equilibrado, con muy buena estructura, con un perfil especiado y herbal.'),(45,'RD Malbec Cabernet 2020',13,2750,1,0,'Las características climáticas y las bondades de su tierra convierten a la Bodega Tacuil en un lugar óptimo, y uno de los más altos del mundo para el cultivo de vides de alta calidad.'),(46,'Tutu Malbec 2021',13,3100,1,0,'El punto de partida del proyecto es la mínima extracción, vinificar por gravedad, con grano entero, y levaduras indígenas. Con el fin de crear vinos originales y auténticos, que se centran en trasmitir pureza y tipicidad en cada botella.'),(47,'2KM Malbec – Cabernet Franc 2018',13,3000,1,0,'En el extremo sudoeste de Paraje Altamira al pie de la precordillera, las 60 hectáreas de Finca Beth se parten en 7 cuarteles. 2KM es uno de los proyectos de Enrique Sack, uno de los propietarios del viñedo, bajo el asesoramiento de Matías Michelini.'),(48,'Ver Sacrum GSM 2020',13,3000,1,0,'Un vino fresco, frutado, floral, delicado, de marcada acidez y muy fluído en boca.'),(49,'Alfil Tinto 2019',13,3520,0,0,'Los Dragones es un proyecto de 3 hermanos que apostaron por Barreal, en el Valle de Calingasta. Andrés Biscaisaque, a cargo de la viticultura y enología, es un andinista que unió su pasión por las montañas con la agricultura sustentable y el vino.'),(50,'Vuela Sauvignon Blancp',15,1520,0,0,'Excelente vino Sauvignon 100%, con una composición del suelo pedroso, calcáreo, con una graduación alcohólica de 13°, directo de la bodega Priedra Negra Thibault Lepoutre'),(51,'Fuego Blanco Gewurztraminer 2021',15,1400,0,0,'Pedernal, o valle del Silex como lo llaman en Fuego Blanco, destaca por sus suelos calcáreos y su viticultura de montaña, que lleva a algunos a comparar la zona con Gualtallary en el valle de Uco. Es una gran expresión del Sauvignon Blanc, con una impronta que rememora a los vinos de la Loire, en Francia. Lineal, fresco y liviano.'),(52,'Mendel Semillón 2020',15,1700,0,0,'Uno de los referentes de la puesta en valor del varietal en Argentina, vinificandolo desde 2009, un semillón de viñedos viejos fermentado en acero y 20% en barrica y criado en contacto con las lías, un vino amplio, con gran peso en boca, buena frescura y las características notas a miel de la variedad.'),(53,'Bajo Criollas Blancas 2021',15,1800,0,0,'Un nuevo proyecto de Leo Erazo que busca rescatar las raíces del vino, a través de variedades autóctonas elaboradas con levaduras indígenas, fermentadas con pieles y criadas en ánforas de arcilla.'),(54,'Pielihueso Blanco 2021',15,2900,0,0,'Pielihueso es un proyecto de vinos joven de la familia Bartolomé, que nace en Los Chacayes, con el objetivo de hacer vinos de mínima intervención, vinos que hagan sentir y que sorprendan. El nombre hace referencia a esta búsqueda de mostrar el lugar y la uva lo más francamente posible, mostrar el hueso.'),(55,'Tutu Chardonnay 2021',15,3100,0,0,'El punto de partida del proyecto es la mínima extracción, vinificar por gravedad, con grano entero, y levaduras indígenas. Con el fin de crear vinos originales y auténticos, que se centran en trasmitir pureza y tipicidad en cada botella.'),(56,'El Porvenir Naranjo 2021',15,3600,0,0,'Pequeñas fermentaciones, la búsqueda de vinos diferentes, que puedan expresar otro relato de la región. Se busca innovar aprendiendo y explorando los límites y a la vez mostrando todo el potencial de Cafayate.'),(57,'Riccitelli Vintage Malbec 2018',14,15000,0,0,'VINTAGE es un vino estilo Porto. Un fortificado con mucha estructura de Malbec, de los mejores lotes de Gualtallary. Es un vino para disfrutar ahora, o guardar muchísimo tiempo.'),(58,'Le Rosé des Astronautes 2021',17,3850,0,0,'Le Rose 2021 es un vino de maceración carbónica compuesto por Cereza y Criolla Chica con un mínimo agregado de Torrontés que completa la fermentación en barricas usadas, de uva proveniente de viejos parrales de Los Chacayes.'),(59,'Livvera Rose Sangiovese 2020',17,4400,0,0,'Escala Humana es el proyecto personal de Germán Masera (Noemia, Sophenia, Passionate Wine), buscador incansable de viñedos olvidados y variedades desconocidas, como Malvasía y Bequignol por ejemplo, que busca trabajar los vinos con la mínima intervención posible.'),(60,'Pintom Rosado Subversivo Pinot Noir 2021',17,4750,0,0,'Sin ser un rosado clásico, la cosecha 2019 del Subversivo es un Pinot Noir de la parcela con mayor textura y fineza de la finca. Es cosechado y molido a mano en la viña y vinificado en vasijas separadas como rosado (parte infusionado con pieles)'),(61,'Susana Balbo Signature Rosé 2021',17,5200,0,0,'Este White Blend es un corte de Torrontés, Semillón y Sauvignon Blanc de un viñedo en el extremo Sur de Altamira. Viene de una finca casi en el límite sur de Altamira, un lugar frío, de suelos arenosos con mucha piedra grande, piedra blanca, el viñedo preferido de Susana, nombrado en homenaje a su madre.'),(62,'Miraval Rosé Côtes de Provence 2020',17,6500,0,0,'Habitualmente, los vinos rosados y los tintos se elaboran con las variedades del sur, la Garnacha, la Cinsaut y la Carignan. La Mourvèdre hace una gran aportación a Bandol. La Syrah y la Carbenet Sauvignon son vitales en el interior, sobre todo en los aledaños de Aix.'),(63,'Nacha Pinot Noir Rosé 2021',17,5900,0,0,'Bodega Chacra es el proyecto, en el Alto Valle del Rio Negro, de Piero Inciso della Rochetta, de familia productora en la Toscana, Italia. Es un proyecto que se enfocó desde sus inicios en el Pinot Noir, trabajando con viñedos viejos de hasta 90 años, siguiendo prácticas biodinámicas y logrando muy tempranamente vinos de clase mundial.'),(64,'Rocamadre Rosado 2021',17,2400,0,0,'Rocamadre es el proyecto más personal de JuanFa Suárez (Finca Suarez y Traslapiedra) ubicado en Paraje Altamira, a partir de uva de los viñedos de la bodega familiar. La búsqueda en este caso son vinos de mínima intervención, de partidas chicas y que reflejen el carácter del lugar.');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_images`
--

DROP TABLE IF EXISTS `products_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imageName` varchar(45) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_79` (`product_id`),
  CONSTRAINT `products_images_FK` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_images`
--

LOCK TABLES `products_images` WRITE;
/*!40000 ALTER TABLE `products_images` DISABLE KEYS */;
INSERT INTO `products_images` VALUES (10,'1657635654030_img_.png',42),(11,'1657635983460_img_.png',43),(12,'1657636082287_img_.png',44),(13,'1657636254660_img_.png',45),(14,'1657636341673_img_.png',46),(15,'1657636466861_img_.png',47),(16,'1657636744497_img_.png',48),(17,'1657636787701_img_.png',49),(18,'1658709435859_img_.png',50),(19,'1658709533720_img_.png',51),(20,'1658709586114_img_.png',52),(21,'1658709651905_img_.png',53),(22,'1658709682028_img_.png',54),(23,'1658709723558_img_.png',55),(24,'1658709778612_img_.png',56),(25,'1658709888241_img_.png',57),(26,'1658710200195_img_.png',58),(27,'1658710485580_img_.png',59),(28,'1658710596601_img_.png',60),(29,'1658710642192_img_.png',61),(30,'1658710697963_img_.png',62),(31,'1658710766133_img_.png',63),(32,'1658710836433_img_.png',64);
/*!40000 ALTER TABLE `products_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `rol_id` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(70) NOT NULL,
  `avatar` varchar(45) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_86` (`rol_id`),
  CONSTRAINT `users_FK` FOREIGN KEY (`rol_id`) REFERENCES `users_rols` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'Grupo 4',5,'grupo4@hotmail.com','$2a$10$W051bnm29dNolIk6drmASuNVxMlWEdKbbRRHvvN1IfF4yXt0y5uLm','1657766119497_img_.jpg','20212022'),(6,'Javier',5,'javi12@hotmail.com','$2a$10$D/YRl7.rED3uE746EWvMreFCQ2047lF/wFgUz6f90cRlBTy./H1Yi','1655068071059_img_.jpg','1227'),(7,'prueba',4,'prueba@gmail.com','$2a$10$bVUbx3X4rpje12IRadmJC.YJRe1/stbl2z8KX8E2AIhzLy67jdPP6','1655068442414_img_.jpg',NULL),(8,'javier2',4,'javier2@hotmail.com','$2a$10$lBsb4C0GPjGuDH/5JL6XZuaLrlrFdHX9mVc76/Oh0UAIie4W/1Tr.','1655084190406_img_.jpg','123456789'),(9,'asd2',4,'asd2@hotmail.com','$2a$10$oCbVYjoM9bgwUQfWKn/d3.2y/BKJD7pVQCMrqfmKIWrjgnKW6ybXS','1655151830639_img_.jpg',NULL),(10,'roman',4,'roman@gmail.com','$2a$10$gGrkXw29tM9HBmMPzVke/.Aus38yMjunYB2H0NC224wHFjd4c2IH2','1655154262993_img_.jpg',NULL),(11,'text10',4,'prueba10@gmail.com','$2a$10$fyGKnKcI1/DzpTX5M//IIOaB8LgHb1oJm60//JZst7CoLVU82P23y','1656707110365_img_.jpg',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_rols`
--

DROP TABLE IF EXISTS `users_rols`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_rols` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rol_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_rols`
--

LOCK TABLES `users_rols` WRITE;
/*!40000 ALTER TABLE `users_rols` DISABLE KEYS */;
INSERT INTO `users_rols` VALUES (4,'USER'),(5,'ADMIN'),(6,'EMPRENDEDOR');
/*!40000 ALTER TABLE `users_rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'rose_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-24 22:06:11
