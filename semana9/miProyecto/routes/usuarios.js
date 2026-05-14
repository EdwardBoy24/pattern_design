//CAPA NEGOCIO
const express = require('express');
const router = express.Router();

const db = require('../db'); //importar


//----------------------------------------------------------------
//------------------ Registra un usuario -------------------------
//----------------------------------------------------------------
router.post('/registro-usuario', (request, response) => {
  
  //Revisa todo el request
  console.log("Request desde el formulario:", request.body); 

  //Obtengo los datos que llegan desde la capa de presentacion
  const nombre   = request.body.objetoDatos.nombre;
  const genero = request.body.objetoDatos.genero;
  const email = request.body.objetoDatos.email;
  const clave = request.body.objetoDatos.contrasena;


  //En este espacio va el envío de datos para guardar a la base de datos (capa datos)
  console.log('Almacenando información en la base de datos....', nombre, genero, email, clave);

  //Query INSERT
  const sql = 'INSERT INTO registro (genero, nombre, clave, correo) VALUES (?, ?, ?, ?)';

  //Setea los valores (nombre , apellido) como par ordenado a values (?,?) y ejecuta
  db.query(sql, [genero, nombre, clave, email], (err) => {
    if (err) { //si existe error
      console.log('Error conexión:', err);
      response.status(500).json({ exito: false }); //HTTP Response fallido
    }})

    //HTTP Response exitoso
  response.status(201).json({ 
    statusHTTP: 'OK',
    exito: true, 
    message: 'Datos creados exitosamente'
  });

});


// ------------------ LISTA TODOS LOS USUARIOS -------------------
//----------------------------------------------------------------
router.get('/obtener-usuarios', (request, response) => {

  //Query SELECT
  const sql = 'SELECT * FROM registro';

  //Ejecuta la query
  db.query(sql, (err, resultados) => {
    if (err) { //si existe error
      console.log('Error conexión:', err);
      response.status(500).json({ exito: false }); //HTTP Response fallido
    }

    //HTTP Response exitoso
    response.status(200).json({ 
      statusHTTP: 'OK',
      exito: true, 
      data: resultados
    });

  });
});

//----------------------------------------------------------------
//------------------ Muestra un usuario por id ------------------
//----------------------------------------------------------------
router.get('muestra-usuario/:id', (req, res) => {
  //logica
});


module.exports = router; // exporta este router para poder usarlo en server.js