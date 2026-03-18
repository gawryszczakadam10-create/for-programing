let allPokemons = []
const pokemonsDiv = document.getElementById("pokemons")

function printPokemon () {
    pokemonsDiv.innerHTML += "<ul>"
    allPokemons.forEach(singlePokemon =>{
        pokemonsDiv.innerHTML += "<li>" + singlePokemon.name + "</li>"
    })
    pokemonsDiv.innerHTML += "</ul>"
}



window.onload = async() => {
    for(let i = 0; i < 100; i++) {
    fetchAPI() 
}
}

async function fetchAPI() {
     try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=30")
    const result = await response.json()
    result.results.forEach(singlePokemon => {
        allPokemons.push(singlePokemon)
    })
    console.log(allPokemons)
    printPokemon()
    } catch(error){
        console.log(errror)
    }
}