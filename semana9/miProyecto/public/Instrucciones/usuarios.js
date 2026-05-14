//CAPA NEGOCIO
const express = require('express');
const router = express.Router();


//----------------------------------------------------------------
//------------------ Registra un usuario -------------------------
//----------------------------------------------------------------
router.post('/registro-usuario', (request, response) => {
  
  //Revisa todo el request
  console.log("Request desde el formulario:", request.body); 

  //Obtengo los datos que llegan desde la capa de presentacion
  const nombre   = request.body.objetoJson.nombre;
  const apellido = request.body.objetoJson.apellido;

  //Lógica, validaciones, operaciones en backend, inteligencia
  //.....
  //.....


  //En este espacio va el envío de datos para guardar a la base de datos (capa datos)
  console.log('Almacenando información en la base de datos....', nombre, apellido);

  //HTTP Response desde el backend
  response.status(200).json({ exito: false });

});


//----------------------------------------------------------------
// ------------------ Lista todos los usuarios -------------------
//----------------------------------------------------------------
router.get('/listar-usuarios', (req, res) => {
  //logica
});


//----------------------------------------------------------------
//------------------ Muestra un usuario por id ------------------
//----------------------------------------------------------------
router.get('muestra-usuario/:id', (req, res) => {
  //logica
});


module.exports = router; // exporta este router para poder usarlo en server.js