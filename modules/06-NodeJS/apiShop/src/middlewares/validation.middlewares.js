const validateSchema = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validate(req.body, {
                abortEarly: false, // Collect all validation errors
                });
            next();
        } catch (err) {
            if(err.name === 'ValidationError'){
                return res.status(400).json(err.errors);
            }
        }
    };
}

module.exports = { validateSchema };