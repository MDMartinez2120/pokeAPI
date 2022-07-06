const pokedex = document.getElementById('pokedex');
const searchBar = document.getElementById('searchBar');
let pokemon = [];

//SEARCHBAR\\
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;
    const filteredPoke = pokemon.filter((poke) => {
        return poke.name.toLowerCase().includes(searchString);
    });
    displayPokemon(filteredPoke);
});

//GRABS POKEMON INFO AND DISPLAYS INFO\\
function fetchPokemon(e) {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
        const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${i}`
        promises.push(fetch(pokeUrl).then((response) => response.json()));
    }

    Promise.all(promises).then(results => {
        pokemon = results.map(data => ({
            name: data.name.toUpperCase(),
            image: data.sprites.other.dream_world['front_default'],
            type: data.types.map((type) => type.type.name.toUpperCase()).join(', ')
        }))
        displayPokemon(pokemon);
    });
}

//POKEMON DISPLAY FORMAT\\
    const displayPokemon = (pokemon) => {
        const pokemonHTMLString =  pokemon.map((pokeman) => `
        <li class="card">
        <div id="imgBg"><img class="card-img" src = "${pokeman.image}"/>
        </div>
            <hr>
            <h2 class="card-title">${pokeman.name}</h2>
            <hr>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `).join('')
        pokedex.innerHTML = pokemonHTMLString;
}

fetchPokemon();
