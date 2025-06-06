-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS blog;
USE blog;

-- Crear la tabla de autores
CREATE TABLE autores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    imagen VARCHAR(255) -- URL o nombre de archivo de la imagen
);

-- Crear la tabla de posts
CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    categoria VARCHAR(100),
    autor_id INT,
    FOREIGN KEY (autor_id) REFERENCES autores(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);
