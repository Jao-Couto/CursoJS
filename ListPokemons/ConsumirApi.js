let listPokemons = document.getElementById('listPokemons')
let ini = 0


let carregarButton = document.getElementById('carregar')
carregarButton.addEventListener('click', function () {
    loadPokemons()
})

async function loadPokemons() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=' + ini + '&limit=20'
    try {
        let pokemon = await (await fetch(url)).json()
        pokemon.results.map(async item =>  {
            let poke = await (await fetch(item.url)).json()
            let section = document.createElement('section');
            section.style = "margin: 10px;"

            section.innerHTML = `<h1 style="font-size: 30px; margin: 0;">${poke.name}</h1>
                    <h2 style="font-size: 18px; margin: 10px;">Habilidades</h2>
                    <ul> `;
            poke.abilities.map(item => {
                section.innerHTML += `<li>${item.ability.name}</li>`
            })

            section.innerHTML += `</ul>
                    <h2 style="font-size: 18px; margin: 10px;">Tipo</h2>
                    <ul> `;
            poke.types.map(item => {
                section.innerHTML += `<li>${item.type.name}</li>`
            })
            section.innerHTML += '</ul>';

            listPokemons.appendChild(section)
            ini += 20
        })
    }catch(err){
        let mostrar = document.createElement('h1');
        mostrar.style = "margin: 10px; color:red;"
        mostrar.innerHTML = `Erro ao acessar API: ${err} `;
        listPokemons.prepend(mostrar)
    }
}


