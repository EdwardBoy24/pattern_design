//CAPA PRESENTACIÓN

//Almacena el formulario para manipularlo
const formulario = document.querySelector('#miFormulario');

//----------------------------------------------------------------------------
//--- 0. Logica del evento submit (presionar boton enviar del formulario) ----
//----------------------------------------------------------------------------
//
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// async: viene de asincronico, significa algo que ocurre sin coincidir en el tiempo (contrario de sincronico, mismo tiempo).
//        Con este async le estamos diciendo al codigo, aquí dentro voy a usar cosas que tardan tiempo (como fetch)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
formulario.addEventListener('submit', async (event) => {
  //----------------------------------------------------------------
  //------------ 1. Evitamos que la página se recargue -------------
  //----------------------------------------------------------------
  event.preventDefault();

  //-----------------------------------------------------------------
  //-- 2. Capturamos cada input del formulario de forma individual --
  //-----------------------------------------------------------------
  const nombreInput   = document.querySelector('#nombre').value;
  const apellidoInput = document.querySelector('#apellido').value;

  //----------------------------------------------------------------
  //---- 3. Construimos el objeto JSON para enviarlo al backend ----
  //----------------------------------------------------------------
  const objetoJson = {
      nombre:   nombreInput,
      apellido: apellidoInput
  };


  //----------------------------------------------------------------
  //--- 4. Envio de datos al servidor (Hacemos un HTTP Request) ----
  //----------------------------------------------------------------
  //
  // await: hace que el código espere la respuesta del servidor antes de continuar.
  //        Gracias al async de arriba podemos usar este await.
  //
  // En resumen: async/await  sirve para trabajar con peticiones al servidor, esperando el 
  //             resultado antes de continuar la siguiente linea de codigo.
  //             Si no pusiéramos await: el backend intentaría enviarnos la respuesta
  //             antes de que el backend haga su trabajo. Tendriamos un error o un dato vacío.
  try {
    const response = await fetch('/registro-usuario', { //endpoint registro usuario (request)
      method:   'POST',  //metodo HTTP
      headers:  { 'Content-Type': 'application/json' },  //los datos que envío están en formato JSON”
      body:     JSON.stringify({ objetoJson }) // convierte un objeto de JavaScript en texto JSON para enviarlo al servidor
    });

    //-------------------------------------------------------------------
    //--- 5. Recibimos la respuesta desde el backend (HTTP Response) ----
    //-------------------------------------------------------------------
    //Almacenamos el responde que viene desde el backend
    const jsonResponse = await response.json(); //espera la respuesta del servidor y lo convierte a un objeto JavaScript

    //Si el backend responde exitoso, se carga una vista de exito o fallido
    if (jsonResponse.exito) {
      window.location.href = '/exito.html';
    }else{
      window.location.href = '/fallido.html';
    }
    

  } catch (error) {
    console.log(error);
  }

});