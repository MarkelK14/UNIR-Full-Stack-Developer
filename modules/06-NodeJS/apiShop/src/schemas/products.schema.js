const yup = require('yup');

const productSchema = yup.object({
    name: yup
        .string()
        .required("El nombre es obligatorio")
        .min(3, "El nombre debe tener al menos 3 caracteres"),
    price: yup
        .number()
        .required("El precio es obligatorio")
        .positive("El precio debe ser un número positivo")
        .min(0.01, "El precio debe ser al menos 0.01"),
    stock: yup
        .number()
        .required("El stock es obligatorio")
        .integer("El stock debe ser un número entero")
        .min(0, "El stock no puede ser negativo"),
    department: yup
        .string()
        .required("El departamento es obligatorio")
        .oneOf(
            ["Electrónica", "Moda", "Hogar", "Office"],
            "El departamento no es válido"
        ),
});

module.exports = productSchema;