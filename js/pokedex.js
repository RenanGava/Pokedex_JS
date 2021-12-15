

function pegaPokemons(quantidade){
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+ quantidade)
    .then(response => response.json())
    .then(allpokemon => {
        const pokemons = []
        allpokemon.results.map((val)=>{

            fetch(val.url)
            .then(response => response.json())
            .then(pokemonSingle => {
                pokemons.push({
                    nome: val.name,
                    imagem: pokemonSingle.sprites.front_default
                })

                if(pokemons.length == quantidade){
                    console.log(pokemons);
                    const pokemonBoxes = document.querySelector('.pokemon-boxes')
                    pokemonBoxes.innerHTML = ``
                    pokemons.map((val)=>{
                        pokemonBoxes.innerHTML += `
                        <div class="pokemon-box">
                            <img src="${val.imagem}" alt="" srcset="">
                            <p>${val.nome}</p>
                        </div>
                        `
                    })
                }
            })

        })
        pokemons.map((val)=>{
            console.log(val.nome);
        })
    })
}

var Total = 12
pegaPokemons(Total)

document.querySelector('.add10')
.addEventListener('click', ()=>{
    
    Total += 10
    pegaPokemons(Total)
})