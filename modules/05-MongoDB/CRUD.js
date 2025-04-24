conn = new Mongo();
db = conn.getDB('pruebaDB');

// CONSULTAR DOCUMENTOS
// result = db.empleados.find(); // select * from empleados

// INSERTAR UN DOCUMENTO
// result = db.empleados.insertOne({
//     nombre: 'Inés',
//     apellido : 'García',
//     email: 'ines@example.com',
//     edad: 30,
//     disponible: true,
// });

// INSERTAR VARIOS DOCUMENTOS
// result = db.empleados.insertMany([
//     {
//         nombre: 'Carlos',
//         apellido: 'Martínez',
//         email: 'carlos@example.com',
//         edad: 28,
//         disponible: true,
//     },
//     {
//         nombre: 'Laura',
//         apellido: 'Fernández',
//         email: 'laura@example.com',
//         edad: 35,
//         disponible: false,
//     },
//     {
//         nombre: 'Miguel',
//         apellido: 'López',
//         email: 'miguel@example.com',
//         edad: 40,
//         disponible: true,
//     }
// ]);


// result = db.empleados.find( { 
//     disponible: true,
//     edad: { $gte: 30, $lte: 40 } // mayor que 30 y menor que 35
// } ); // select * from empleados where disponible = true and edad > 30

// result = db.empleados.find( {
//     $or: [
//         { edad: { $gte: 30 } }, // mayor o igual que 30
//         { disponible: true } // disponible = true
//     ]
// } ); // select * from empleados where edad >= 30 or disponible = true

const arr = []
arr.push({disponible: true}); // disponible = true
arr.push({edad: { $gte: 30, $lte: 40 }}); // mayor que 30 y menor que 35
result = db.empleados.find({
    $or: arr
})

// $gt : mayor que -- greater than
// $lt : menor que -- less than
// $gte : mayor o igual que -- greater than equal
// $lte : menor o igual que -- less than equal
// $eq : igual que -- equal
// $ne : diferente de -- not equal
// $in : dentro de un array -- in
// $nin : no dentro de un array -- not in
// $and : y -- and
// $or : o -- or
// $not : no -- not

// ACTUALIZACIONES
// result = db.empleados.updateOne(
//     { email: 'ines@example.com' }, // criterio de búsqueda
//     { $set: 
//         {edad: 31 },
//         $currentDate: { lastModified: true } // actualiza la fecha de modificación
//     } // actualización
// ); // update empleados set edad = 31 where nombre = 'Inés'

// result = db.empleados.updateMany(
//     { edad: { $lt: 30 } }, // criterio de búsqueda
//     { $push: 
//         {
//             tags: 'vacaciones'// agrega un nuevo tag a la lista de tags
//         },
//         $currentDate: {
//             lastModified: true// actualiza la fecha de modificación
//         }
//     }
// ); // update empleados set edad = 31 where nombre = 'Inés'

// $set : actualiza un campo
// $push : sobre un valor que va a ser de tipo array, agrega un nuevo valor

// BORRADOS
result = db.empleados.deleteMany (
    { tags: { $in: ['vacaciones']} } // criterio de búsqueda
); // delete from empleados where tags in ('vacaciones')

printjson(result); // imprime el resultado en formato JSON