



const MOCKAPI_APPTS_URL = 'http://localhost:3000/productos'





function renderData(data){

    let sectionData = document.getElementById('showProductsInDB')

    for(const d of data){

        sectionData.innerHTML += `<div class="bg-red-200 p-4 rounded">${d.nombre}</div>`
    }

    

}



async function obtenerDatos() {
  try {
    const respuesta = await fetch(MOCKAPI_APPTS_URL);
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }
    const datos = await respuesta.json();


  
    //console.log('Datos recibidos:', datos);

    let porcentajeDatos = Math.round((1/100)*datos.length)
    let dataShow = []
     
    for (let i = 0; i < porcentajeDatos; i++) {
      console.log('_______________________');
      console.log(datos[i]);
      dataShow.push(datos[i])
    }


    console.log(porcentajeDatos)
    renderData(dataShow)



  } catch (error) {

    console.log("FALLE")
    console.error('Error:', error.message);
  }
}

obtenerDatos();





