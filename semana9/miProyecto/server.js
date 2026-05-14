//Configurar Express para servir el frontend
const express = require('express'); //importaciones
const cors = require('cors'); 
const path = require('path');
const app = express(); 
const PORT = 3000;
app.use(cors());
app.use(express.json());

// Servir archivos estáticos
// Indica que solo estos archivos son publicos o del lado del "Cliente"
app.use(express.static(path.join(__dirname, 'public'))); 

// Rutas
const usuariosRoutes = require('./routes/usuarios');
const loginRoutes = require('./routes/loginUsuarios');
app.use(usuariosRoutes);
app.use(loginRoutes);

//Muestra la ruta y el puerto escuchando
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});