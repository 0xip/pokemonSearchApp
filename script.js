const searchInput =document.getElementById("search-input");
const searchForm = document.getElementById("search-form");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const spriteContainer = document.getElementById('sprite-container');

pokeApi = async (info) => {
    try{
    const res = await fetch (`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${info}`);
    const data = await res.json()
    }
    catch(err){
      alert("Pokemon not found, please enter a valid ID or Name")
    }
    }
    

searchForm.addEventListener("submit", e=>{e.preventDefault();
    pokeApi(searchInput.value.toLowerCase())
});