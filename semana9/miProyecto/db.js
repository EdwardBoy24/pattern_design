// CODIGO MIOOOOOOOOOOOOOOOOOOOOO

const mysql = require('mysql2');

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'mi_pagina_web',
  port: 3307 // <--- Verifica si es este o el 3307
});

db.connect((err) => {
  if (err) {
    console.log('Error conexión', err.stack);
  } else {
    console.log('Conectado a MySQL');
  }
});

module.exports = db;