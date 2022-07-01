$("button").click(function (){
    searchPokemon();
})

const pokedex = document.getElementById('pokedex')

const userSearch = $("#input").val();

const pokeSearchUrl = `https://pokeapi.co/api/v2/pokemon/1`

function fetchPokemon(e){
    fetch(pokeSearchUrl).then((response) => response.json()).then((data) => {
        console.log(data);
        const pokemon = {
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types.map((type) => type.type.name).join(', ')
        };
        console.log(pokemon);
    })

    const displayPokemon = (pokemon) => {
        const pokemonHTMLString =  pokemon.map(pokeman => `
        <li>
            <img src = "${pokeman.image}"/>
            <h2>${pokeman.id}. ${pokeman.name}</h2>
            <p>Type: ${pokeman.type}</p>
        </li>
    `).join("")
        pokedex.innerHTML = pokemonHTMLString;
    };
}

fetchPokemon();





// const mapResults = (data) => `
//     <div>
//         <img src="${data.name}">
//     </div>
//
//     <div class = "results">
//         <h2 class="text-white">${data.name}</h2>
//         <p class="text-white">${data.weight}</p>
//     </div>`
//
// const userSearch = $("#input").val();
//
// const pokeSearchUrl = `https://pokeapi.co/api/v2/pokemon/${userSearch}`
//
// function searchPokemon(e){
//     fetch(pokeSearchUrl).then((response) => response.json()).then((data) => {
//         const pokeResults = data.map(mapResults);
//         return $(".results").html(pokeResults)
//
//         })
//     }



// searchPokemon();
// document.querySelector("#results").innerHTML = `
//         <div class="d-flex justify-content-center mt-5 me-3 flex-wrap">
//     <div>
//         <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
//     </div>
//
//     <div class = "results">
//         <h2 class="text-white">${data.name}</h2>
//         <p class="text-white">${data.weight}</p>
//     </div>
// </div>`;