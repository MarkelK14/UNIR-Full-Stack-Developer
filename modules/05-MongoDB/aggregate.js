conn = new Mongo();
db = conn.getDB('pruebaDB');

// result = db.prueba.aggregate([
//     {
//         // $match: {
//         //     'imdb.rating': { $gt: 9.5 }
//         // },
//         $group: {
//             _id: 'year', // Group by year
//             total: { $sum: 1 }, // Count the number of movies per year
//             maxRating: { $max: '$imdb.rating' }, // Get the highest rating in each year
//             // $sum, $count, $max, $min, $avg
//         },
//         $match: {
//             total: { $gt: 200 } // Filter years with more than 200 movie
//         },
//         $sort: {
//             total: -1 // Sort by total movies in descending order
//         },
//     }
// ])

// result = db.movies.aggregate([
//     {
//         $project: {
//             _id: 0, // el 0 es para excluir el campo, 1 para incluirlo
//             title: 1,
//             year: 1,
//             rating: '$imdb.rating', // renombrar el campo imdb.rating a rating
//             wins: '$awards.wins', // renombrar el campo awards.wins a wins
//         }
    
//     },
//     {
//         $sort: {
//             wins: -1, // Ordenar por wins en orden descendente
//         }
//     },
//     {
//         $limit: 10, // Limitar a los primeros 10 resultados
//     },
//     {
//         $addFields: {
//             author: 'Michael Jordan'
//         }
//     }
// ])

result = db.movies.aggregate([
    {
        $match: {
            title: 'Slumdog Millionaire'
        }
    },
    {
        $unwind: '$cast' // Descomponer el array cast en documentos individuales
    },
    {
        $count: 'total'
    }
])

printjson(result)