-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema spotifly
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `spotifly`;
-- -----------------------------------------------------
-- Schema spotifly
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `spotifly` DEFAULT CHARACTER SET utf8mb3 ;
USE `spotifly` ;

-- -----------------------------------------------------
-- Table `spotifly`.`artistas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotifly`.`artistas` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `foto` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `spotifly`.`discograficas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotifly`.`discograficas` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `spotifly`.`albumes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotifly`.`albumes` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `ano` INT NOT NULL,
  `artistas_id` INT UNSIGNED NOT NULL,
  `discograficas_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_albumes_artistas_idx` (`artistas_id` ASC) VISIBLE,
  INDEX `fk_albumes_discograficas1_idx` (`discograficas_id` ASC) VISIBLE,
  CONSTRAINT `fk_albumes_artistas`
    FOREIGN KEY (`artistas_id`)
    REFERENCES `spotifly`.`artistas` (`id`),
  CONSTRAINT `fk_albumes_discograficas1`
    FOREIGN KEY (`discograficas_id`)
    REFERENCES `spotifly`.`discograficas` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `spotifly`.`generos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotifly`.`generos` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `spotifly`.`canciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotifly`.`canciones` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `ano` INT NOT NULL,
  `albumes_id` INT UNSIGNED NOT NULL,
  `generos_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_canciones_albumes1_idx` (`albumes_id` ASC) VISIBLE,
  INDEX `fk_canciones_generos1_idx` (`generos_id` ASC) VISIBLE,
  CONSTRAINT `fk_canciones_albumes1`
    FOREIGN KEY (`albumes_id`)
    REFERENCES `spotifly`.`albumes` (`id`),
  CONSTRAINT `fk_canciones_generos1`
    FOREIGN KEY (`generos_id`)
    REFERENCES `spotifly`.`generos` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `spotifly`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotifly`.`usuarios` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `contrasena` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `spotifly`.`listas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotifly`.`listas` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `usuarios_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_listas_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_listas_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `spotifly`.`usuarios` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `spotifly`.`escuchas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotifly`.`escuchas` (
  `usuarios_id` INT UNSIGNED NOT NULL,
  `canciones_id` INT UNSIGNED NOT NULL,
  `fecha` DATETIME NOT NULL,
  PRIMARY KEY (`usuarios_id`, `canciones_id`),
  INDEX `fk_usuarios_has_canciones_canciones1_idx` (`canciones_id` ASC) VISIBLE,
  INDEX `fk_usuarios_has_canciones_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuarios_has_canciones_canciones1`
    FOREIGN KEY (`canciones_id`)
    REFERENCES `spotifly`.`canciones` (`id`),
  CONSTRAINT `fk_usuarios_has_canciones_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `spotifly`.`usuarios` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `spotifly`.`listas_canciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotifly`.`listas_canciones` (
  `listas_id` INT UNSIGNED NOT NULL,
  `canciones_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`listas_id`, `canciones_id`),
  INDEX `fk_listas_has_canciones_canciones1_idx` (`canciones_id` ASC) VISIBLE,
  INDEX `fk_listas_has_canciones_listas1_idx` (`listas_id` ASC) VISIBLE,
  CONSTRAINT `fk_listas_has_canciones_canciones1`
    FOREIGN KEY (`canciones_id`)
    REFERENCES `spotifly`.`canciones` (`id`),
  CONSTRAINT `fk_listas_has_canciones_listas1`
    FOREIGN KEY (`listas_id`)
    REFERENCES `spotifly`.`listas` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
