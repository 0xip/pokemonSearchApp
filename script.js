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

const pokeApi = async (info) => {
    try{
    const res = await fetch (`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${info}`);
    const data = await res.json()

    // Clear Previous Content
    types.textContent = "";
    spriteContainer.innerHTML = "";
    pokemonName.textContent = "";
    pokemonId.textContent = "";
    weight.textContent = "";
    height.textContent = "";
    hp.textContent = "";
    attack.textContent = "";
    defense.textContent = "";
    specialAttack.textContent = "";
    specialDefense.textContent = "";
    speed.textContent = "";


    //DOM
    pokemonName.textContent = data.name.toUpperCase();
    pokemonId.textContent = `#${data.id}`;
    weight.textContent = data.weight;
    height.textContent = data.height;

    //Stats
    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;

    //Types
    data.types.forEach(typeInfo => {
        const typeName = typeInfo.type.name.toUpperCase();
        const typeSpan = document.createElement("span");
        typeSpan.textContent = typeName;
        types.appendChild(typeSpan);
      });

    const img = document.createElement('img');
    img.src = data.sprites.front_default; // Use the front default sprite
    img.id = "sprite"; // Optional
    spriteContainer.appendChild(img);
    }
    catch(err){
      alert("Pokémon not found")
    }
    }
    

searchForm.addEventListener("submit", e=>{e.preventDefault();
    pokeApi(searchInput.value.toLowerCase())
});