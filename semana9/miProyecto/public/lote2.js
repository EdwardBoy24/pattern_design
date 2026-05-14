const formulario = document.querySelector('#miRegistro');

formulario.addEventListener('submit', async (event) => {
    // 1. Evitamos que la página se recargue
    event.preventDefault();

    // 2. Capturamos cada valor de forma individual
    // Usamos .value para obtener el texto/valor que el usuario escribió
    const nombreValor  = document.querySelector('[name="nombre_usuario"]').value;

    // Esto busca específicamente cuál de los botones con name="genero" está seleccionado
    const generoValor = document.querySelector('input[name="genero_usuario"]:checked').value;
    const correoValor  = document.querySelector('[name="correo_usuario"]').value;
    const contrasenaValor = document.querySelector('[name="clave_usuario"]').value;

    // 3. Construimos el objeto JSON a mano
    // Tenemos que "emparejar" cada llave con su variable
    const objetoDatos = {
        nombre: nombreValor,
        genero: generoValor,
        email: correoValor,
        contrasena: contrasenaValor
    };

    // 4. Mostrar el resultado (Lo que viajaría al servidor)
    console.log("Objeto listo para el backend:", objetoDatos);
    
    // Aquí es donde iría el envío de datos (del cliente al servidor)...
    // ... en esta zona nos comunicaremos con el backend.
    // ... en esta zona se envia la request
    // ... luego en esta zona se recibe el response
    
    alert(`¡Listo! Hemos registrado a: ${objetoDatos.nombre}`);

    try {
    const response = await fetch('/registro-usuario', { //endpoint registro usuario (request)
      method:   'POST',  //metodo HTTP
      headers:  { 'Content-Type': 'application/json' },  //los datos que envío están en formato JSON”
      body:     JSON.stringify({ objetoDatos }) // convierte un objeto de JavaScript en texto JSON para enviarlo al servidor
    });

    //-------------------------------------------------------------------
    //--- 5. Recibimos la respuesta desde el backend (HTTP Response) ----
    //-------------------------------------------------------------------
    //Almacenamos el responde que viene desde el backend
    const jsonResponse = await response.json(); //espera la respuesta del servidor y lo convierte a un objeto JavaScript

    //Si el backend responde exitoso, se carga una vista de exito o fallido
    if (jsonResponse.exito) {
      window.location.href = 'index.html';
    }else{
      alert(`¡ERROR! CREDENCIALES INVALIDAS, POR FAVOR VUELVA A INTENTARLO`);
    }
    

  } catch (error) {
    console.log(error);
  }
    
});
