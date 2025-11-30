


import app from './app.js'

import{getConnection} from './database/connection.js'

//getConnection()

app.listen(3000)


const MOCKAPI_APPTS_URL = 'http://localhost:3000/productos'





 async function obtenerDatos() {


  try {
    const respuesta = await fetch(MOCKAPI_APPTS_URL);
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }
    const datos = await respuesta.json();


  
    //console.log('Datos recibidos:', datos);

    let porcentajeDatos = Math.round((100/100)*datos.length)
    let dataShow = []
     
    for (let i = 0; i < porcentajeDatos; i++) {
      console.log('_______________________');
      console.log(datos[i]);
      dataShow.push(datos[i])
    }


    console.log(porcentajeDatos)
 


  } catch (error) {

    console.log("FALLE")
    console.error('Error:', error.message);
  }

  return datos
}

obtenerDatos();


console.log('holi2')

