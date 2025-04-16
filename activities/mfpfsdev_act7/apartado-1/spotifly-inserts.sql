INSERT INTO generos (nombre) VALUES 
('Pop'), 
('Reggaeton'), 
('Rock'), 
('Electronica');

INSERT INTO discograficas (nombre) VALUES 
('Sony Music'), 
('Universal Music'), 
('Warner Music');

INSERT INTO artistas (nombre, foto) VALUES 
('Taylor Swift', 'https://tinyurl.com/2mcf9fphg'),
('Bad Bunny', 'https://tinyurl.com/5abnuj6y'),
('Linkin Park', 'https://tinyurl.com/yc68sk8m'),
('David Guetta', 'https://tinyurl.com/9jnpbxbf');

INSERT INTO albumes (titulo, ano, artistas_id, discograficas_id) VALUES 
('Midnights', 2022, 1, 1), -- Taylor Swift
('Un Verano Sin Ti', 2022, 2, 2), -- Bad Bunny
('Meteora', 2003, 3, 3), -- Linkin Park
('Listen Again', 2023, 4, 1); -- David Guetta


INSERT INTO canciones (titulo, ano, albumes_id, generos_id) VALUES
-- Taylor Swift
('Anti-Hero', 2022, 1, 1),
('Lavender Haze', 2022, 1, 1),
('Bejeweled', 2022, 1, 1),
('Karma', 2022, 1, 1),
-- Bad Bunny
('Tití Me Preguntó', 2022, 2, 2),
('Me Porto Bonito', 2022, 2, 2),
('Efecto', 2022, 2, 2),
('Ojitos Lindos', 2022, 2, 2),
-- Linkin Park
('Numb', 2003, 3, 3),
('Faint', 2003, 3, 3),
('Somewhere I Belong', 2003, 3, 3),
('Breaking the Habit', 2003, 3, 3),
-- David Guetta
('I’m Good (Blue)', 2023, 4, 4),
('Baby Don’t Hurt Me', 2023, 4, 4),
('Crazy What Love Can Do', 2023, 4, 4),
('Family Affair (Dance for Me)', 2023, 4, 4);

INSERT INTO usuarios (nombre, email, contrasena) VALUES 
('Elvis Nieto', 'elvis.nieto@example.com', '1234*password*5678'),
('Susana Oria', 'susana.oria@example.com', '987.password.654');

INSERT INTO listas (nombre, usuarios_id) VALUES 
('Pop-Rock', 1),
('Reggaeton-Electro', 2);

INSERT INTO listas_canciones (listas_id, canciones_id) VALUES 
 -- Pop-Rock
 (1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
 -- Reggaeton-Electro
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 13),
(2, 14),
(2, 15),
(2, 16);

INSERT INTO escuchas (usuarios_id, canciones_id, fecha) VALUES 
(1, 2, NOW()), -- Elvis Nieto - Lavender Haze
(1, 3, NOW()), -- Elvis Nieto - Bejeweled
(2, 6, NOW()), -- Susana Oria - Me Porto Bonito
(2, 5, NOW()), -- Susana Oria - Tití Me Preguntó
(2, 15, NOW()); -- Susana Oria - Crazy What Love Can Do