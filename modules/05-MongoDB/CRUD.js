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


result = db.empleados.find( { 
    disponible: true,
    edad: { $gte: 30, $lte: 40 } // mayor que 30 y menor que 35
} ); // select * from empleados where disponible = true and edad > 30

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

printjson(result); // imprime el resultado en formato JSON