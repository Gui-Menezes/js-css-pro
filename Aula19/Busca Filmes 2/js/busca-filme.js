const mostraFilmes = document.querySelector('#btn-buscar');
const url = 'http://www.omdbapi.com/?s=';
const apiKey = '&apikey=994f918b';
const urlMaisInfos ='http://www.omdbapi.com/?t=';

mostraFilmes.addEventListener('click', function(event) {
    event.preventDefault();
    const valorBusca = document.querySelector('#buscador').value;
    const urlBusca = `${url}${valorBusca}${apiKey}`;
    const urlRestoInfos = `${urlMaisInfos}${valorBusca}${apiKey}`
    buscaFilme(urlBusca);
    buscaInfos(urlRestoInfos);
});

// ----GET----
const buscaFilme = (url) => {
    fetch(url, {
        method: "GET"
    }).then((resposta) => resposta.json())
    .then((resposta) => mostraArray(resposta));
};

const buscaInfos = (url) => {
    fetch(url, {
        method: "GET"
    }).then((response) => response.json())
    .then((response) => mostraArrayInfos(response))
};
// -------------

function mostraArray(resposta) {
    console.log(resposta);

    let saida = '';

    for(let i = 0; i < resposta.Search.length; i++){
        const {Poster, Title, Plot, Runtime, Genre, imdbRating} = resposta.Search[i];

        saida += `<div class="content">
        <div class="card">
            <div class="topCard">
                <h2 class="titulo">${Title}</h2>
                <p class="ano">${Plot}.</p>
        <div class="mediaCard">
            <img src="${Poster}" alt="${Title}
        </div>
        <div class="bottomCard">
            <p class="genero">Gênero: ${Genre}</p>
            <p class="duracao">Duração: ${Runtime}</p>
            <p class="nota">Nota: ${imdbRating}</p>
        </div>
            </div>
        </div>
    </div>`

        document.querySelector('.info-filmes').innerHTML = saida;
    }
}
