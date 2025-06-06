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

-- Insertar autores con imágenes reales
INSERT INTO autores (nombre, email, imagen) VALUES
('Ana Martínez', 'ana.martinez@email.com', 'https://randomuser.me/api/portraits/women/1.jpg'),
('Carlos López', 'carlos.lopez@email.com', 'https://randomuser.me/api/portraits/men/2.jpg'),
('Lucía Fernández', 'lucia.fernandez@email.com', 'https://randomuser.me/api/portraits/women/3.jpg'),
('Pedro Gómez', 'pedro.gomez@email.com', 'https://randomuser.me/api/portraits/men/4.jpg'),
('Marta Ruiz', 'marta.ruiz@email.com', 'https://randomuser.me/api/portraits/women/5.jpg'),
('Javier Díaz', 'javier.diaz@email.com', 'https://randomuser.me/api/portraits/men/6.jpg'),
('Laura Torres', 'laura.torres@email.com', 'https://randomuser.me/api/portraits/women/7.jpg'),
('Andrés Morales', 'andres.morales@email.com', 'https://randomuser.me/api/portraits/men/8.jpg'),
('Isabel Romero', 'isabel.romero@email.com', 'https://randomuser.me/api/portraits/women/9.jpg'),
('Diego Navarro', 'diego.navarro@email.com', 'https://randomuser.me/api/portraits/men/10.jpg');

-- Insertar posts
INSERT INTO posts (titulo, descripcion, categoria, autor_id) VALUES
('Introducción a MySQL', 'Una guía básica para comenzar con MySQL.', 'Base de datos', 1),
('Diseño de bases de datos', 'Principios para diseñar bases de datos eficientes.', 'Base de datos', 2),
('Primeros pasos con HTML', 'Cómo crear tu primera página web.', 'Desarrollo Web', 3),
('CSS Avanzado', 'Trucos y técnicas para mejorar el estilo de tu web.', 'Desarrollo Web', 4),
('JavaScript para principiantes', 'Aprende a programar en JavaScript desde cero.', 'Programación', 5),
('Node.js básico', 'Creando servidores con Node.js.', 'Back-End', 6),
('React en 10 pasos', 'Tutorial paso a paso para empezar con React.', 'Front-End', 7),
('API RESTful con Express', 'Cómo construir APIs usando Express.js.', 'Back-End', 8),
('Diseño responsive', 'Haz que tu web se vea bien en todos los dispositivos.', 'Diseño Web', 9),
('SQL avanzado', 'Consultas complejas y subconsultas.', 'Base de datos', 10),
('Manejo de errores en JavaScript', 'Buenas prácticas para el manejo de errores.', 'Programación', 1),
('Optimización de bases de datos', 'Mejora el rendimiento de tus consultas.', 'Base de datos', 2),
('Flexbox y Grid', 'Diseño moderno con CSS.', 'Front-End', 3),
('Git y GitHub', 'Control de versiones en proyectos reales.', 'Herramientas', 4),
('Testing en JavaScript', 'Introducción a pruebas unitarias.', 'Programación', 5),
('Autenticación con JWT', 'Implementación de seguridad en APIs.', 'Back-End', 6),
('Hooks en React', 'Uso de useState y useEffect.', 'Front-End', 7),
('Deploy en Vercel', 'Publica tu proyecto fácilmente.', 'DevOps', 8),
('Diseño centrado en el usuario', 'Principios de UX/UI.', 'Diseño Web', 9),
('Stored Procedures en MySQL', 'Automatiza procesos en la base de datos.', 'Base de datos', 10);