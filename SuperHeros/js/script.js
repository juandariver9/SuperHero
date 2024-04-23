function fetchSuperHero(){
    let xhr = new XMLHttpRequest();
    let heroID = document.getElementById('heroId').value;
    console.log(heroID);
    let apiKey = "32ecc1b54d56cfb18178482ffaaee1a9"
    let url = `https://www.superheroapi.com/api.php/${apiKey}/${heroID}`;
    xhr.open('GET',url,true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            displayHero(response);
        }
        else if( this.readyState == 4 ){
            console.log('Error:',this.statusText);
        }
    };
    xhr.send();
}

function displayHero(data){
    let heroInfo = document.getElementById("superHeroInfo");
    
    if (data.response === "error") {
        heroInfo.innerHTML = `<p>Error: ${data.error}</p>`;
    } else {
        heroInfo.innerHTML = `
        <h3>Información General</h3>
        <p>Nombre: ${data.name}</p>
        <br><img src="${data.image.url}"</br>
        
        <h3>Estadísticas de Poder</h3>
        <p>Combate: ${data.powerstats.combat}</p>
        <p>Durabilidad: ${data.powerstats.durability}</p>
        <p>Inteligencia: ${data.powerstats.intelligence}</p>
        <p>Poder: ${data.powerstats.power}</p>
        <p>Velocidad: ${data.powerstats.speed}</p>
        <p>Fuerza: ${data.powerstats.strength}</p>
        
        <h3>Trabajo</h3>
        <p>Ocupación: ${data.work.occupation}</p>
        <p>Base: ${data.work.base}</p>
        
        <h3>Conexiones</h3>
        <p>Grupo/Afiliación: ${data.connections["group-affiliation"]}</p>
        <p>Parientes: ${data.connections.relatives}</p>
        
        <h3>Apariencia</h3>
        <p>Color de ojos: ${data.appearance["eye-color"]}</p>
        <p>Género: ${data.appearance.gender}</p>
        <p>Color de cabello: ${data.appearance["hair-color"]}</p>
        <p>Raza: ${data.appearance.race}</p>
        <p>Altura: ${data.appearance.height[0]}, ${data.appearance.height[1]}</p>
        <p>Peso: ${data.appearance.weight[0]}, ${data.appearance.weight[1]}</p>
        
        <h3>Biografía</h3>
        <p>Nombre completo: ${data.biography["full-name"]}</p>
        <p>Alias: ${data.biography.aliases}</p>
        <p>Editorial: ${data.biography.publisher}</p>
        <p>Primera aparición: ${data.biography["first-appearance"]}</p>
        <p>Lugar de nacimiento: ${data.biography["place-of-birth"]}</p>
        <p>Alineación: ${data.biography.alignment}</p>
        <p>Alter ego: ${data.biography["alter-ego"]}</p>
        
        `;
    }
}
