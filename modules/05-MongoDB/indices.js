conn = new Mongo();
db = conn.getDB('pruebaDB');


// result = db.movies.countDocuments({
//     'imdb.rating': { $gt: 9 }
// }); // select count(*) from movies where imdb.rating > 9

// result = db.movies.find({
//     'imdb.rating': { $gt: 9 }
// });

// result = db.movies.explain('executionStats').find({ // explain() muestra el plan de ejecución de la consulta y el rendimiento
//     'imdb.rating': { $gt: 9 }
// });

// result = db.movies.createIndex({ // createIndex() crea un índice en el campo especificado para mejorar el rendimiento de las consultas
//     'imdb.rating': 1 // Crea un índice en el campo imdb.rating
// }); // create index on imdb.rating

// result = db.movies.getIndexes(); // getIndexes() devuelve una lista de todos los índices en la colección
// result = db.movies.dropIndex('imdb.rating_1'); // dropIndex() elimina un índice específico de la colección



printjson(result)