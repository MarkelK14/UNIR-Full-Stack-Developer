// Creation and configuration of the Express APP
const express = require("express");
const cors = require("cors");
const dayjs = require("dayjs");

const app = express();
app.use(express.json());
app.use(cors());

// Middleware
app.use( (req, rest, next) => {
    console.log(dayjs().format('DD/MM/YYYY HH:mm:ss'));
    next(); // Sigue con la ejecución
});

// Route configuration
app.use('/api', require('./routes/api.routes'));

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({
        message: "Not found"
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

module.exports = app;
