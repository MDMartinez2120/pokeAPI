const pokedex = document.getElementById('pokedex');
const searchBar = document.getElementById('searchBar');
let pokemon = [];

//SEARCHBAR\\
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;
    const filteredPoke = pokemon.filter((poke) => {
        return poke.name.includes(searchString);
    });
    displayPokemon(filteredPoke);
    console.log(filteredPoke)
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
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types.map((type) => type.type.name).join(', ')
        }))
        displayPokemon(pokemon);
    });
}

//POKEMON DISPLAY FORMAT\\
    const displayPokemon = (pokemon) => {
        const pokemonHTMLString =  pokemon.map((pokeman) => `
        <li class="card">
            <img class="card-img" src = "${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `).join('')
        pokedex.innerHTML = pokemonHTMLString;
}

fetchPokemon();
