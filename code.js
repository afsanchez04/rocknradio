
//Carga mosaico de artistas destacados

const cargarArtistas = async (id = '11200') => {

    try{
        const respuesta = await fetch(`https://theaudiodb.com/api/v1/json/2/artist.php?i=${id}`);
        const datos = await respuesta.json();
        
        document.getElementById('cards-container').innerHTML += `
    
            <div class="col-12 mb-3 mb-xs-0 col-sm-6 col-lg-3">
                <div class="card text-light shadow">
                    <div class="card-body text-light text-center">
                        <img src="${datos.artists[0].strArtistWideThumb}" alt="" width="100" class="pb-3 w-100 rounded-3">
                        <h6 class="card-subtitle mb-2 ">${datos.artists[0].strArtist}</h6>
                        <p class="card-text">${datos.artists[0].strCountry}</p>
                    </div>
                </div>
            </div>
        `;
    }catch(error){
        console.log(error);
    }
}




//Guarda en array ID de artistas y envía parámetro a función cargarArtistas

const getAllArtist = async () => {

    const limit = [];

    //Rango de artistas que serán añadidos al array
    for(let i = 112024; i<=112036; i++){   
        if(i === 112032){continue}
        limit.push(`${i}`);
    }

    let artistArray = [];

    for (let index = 0; index < limit.length; index++) {
      artistArray.push(await cargarArtistas(limit[index]));
    }

    return artistArray;
    
  };
  getAllArtist();



//Carga información del artista en sección 1

  const cargarImgBanner = async (id = '112044') => {

    try{
        const respuesta = await fetch(`https://theaudiodb.com/api/v1/json/2/artist.php?i=${id}`);
        const datos = await respuesta.json();
    
        document.getElementById('col-imagen').innerHTML = `
            <div class="d-flex align-items-center h-100">
                <img src="${datos.artists[0].strArtistWideThumb}" class="img-fluid" alt="">
            </div>  
        `;
    
        document.getElementById('info-banner').innerHTML = `
            <h1 class="text-center text-md-start ">${datos.artists[0].strArtist}</h1>
            <p>${datos.artists[0].strCountry}</p> 
        `;
    }catch(error){
        console.log(error);
    }

}
cargarImgBanner();

//${datos.artists[0].strBiographyES}