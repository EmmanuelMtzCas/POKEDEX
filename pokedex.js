const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./notfound.jpg")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let pokeName1=data.forms;
            let pokeName2=pokeName1[0].name;
            var pokeName3 = pokeName2;
            var objetivo = document.getElementById('name');
            objetivo.innerHTML = pokeName3;

            console.log(pokeName2);


            let pokeAlt=data.height;
            var objetivo2 = document.getElementById('altura');
            objetivo2.innerHTML = pokeAlt;

            let pokePeso=data.weight;
            var objetivo2 = document.getElementById('peso');
            objetivo2.innerHTML = pokePeso;

            let pokeTipo=data.types[0].type.name;
            var objetivo3 = document.getElementById('tipo');
            objetivo3.innerHTML = pokeTipo;
   
            let pokeEstadisticas=[];
            for(var i=0;i<data.stats.length;i++){
                pokeEstadisticas.push(data.stats[i].stat.name+"  "+data.stats[i].effort);
            }

            var objetivo4 = document.getElementById('estadisticas');
            objetivo4.innerHTML=pokeEstadisticas;
          
            let pokeAtaques=[];
            for(var i=0;i<10;i++){
                if(data.moves[i]!=null){
                    pokeAtaques.push(data.moves[i].move.name);
                }        
            }

            var objetivo5 = document.getElementById('ataques');
            objetivo5.innerHTML=pokeAtaques;

        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}