const express = require('express');

require('dotenv').config();

const app = express();

//Handlers
// GET /api/employees
app.get('/api/employees', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ]);
});

// PUT /api/employees/edit
app.put('/api/employees/edit', (req, res) => {
  res.send('Employee updated successfully!');
});

const PORT = process.env.PORT || 3000; // Si no se define el puerto en el archivo .env, se usará el 3000 por defecto. Se coge el primer valor no falso.

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});