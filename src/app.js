const express = require('express');
const app = express();
const userRoutes = require('./routers/rutasdeusuario'); // Ruta relativa

// Middleware
app.use(express.json()); // Para analizar application/json

// Rutas
app.use('/api/users', userRoutes);

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
