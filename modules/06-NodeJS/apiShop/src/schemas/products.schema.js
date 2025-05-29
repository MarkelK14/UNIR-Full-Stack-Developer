const yup = require('yup');

const productSchema = yup.object({
    name: yup.string().required("El nombre es obligatorio")
});

module.exports = productSchema;