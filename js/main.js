$("button").click(function (){
    searchPokemon();
})

const mapResults = (data) => ` 
    <div>
        <img src="${data.name}">
    </div>

    <div class = "results">
        <h2 class="text-white">${data.name}</h2>
        <p class="text-white">${data.weight}</p>
    </div>`

const userSearch = $("#input").val();

const pokeSearchUrl = `https://pokeapi.co/api/v2/pokemon/${userSearch}`

function searchPokemon(e){
    fetch(pokeSearchUrl).then((response) => response.json()).then((data) => {
        const pokeResults = data.map(mapResults);
        return $(".results").html(pokeResults)

        })
    }



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