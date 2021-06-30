const mostraFilmes = document.querySelector('#btn-buscar');
const url = 'http://www.omdbapi.com/?s=';
const apiKey = '&apikey=994f918b';

mostraFilmes.addEventListener('click', function(event) {
    event.preventDefault();
    const valorBusca = document.querySelector('#buscador').value;
    const urlBusca = `${url}${valorBusca}${apiKey}`;
    buscaFilme(urlBusca);
});

// ----GET----
const buscaFilme = (url) => {
    fetch(url, {
        method: "GET"
    }).then((resposta) => resposta.json())
    .then((resposta) => mostraArray(resposta));   
};
// -------------

function mostraArray(resposta) {
    let saida = '';
    for(let i = 0; i < resposta.Search.length; i++){
        const {Poster, Title, Plot, Runtime, Genre, imdbRating} = resposta.Search[i];
        saida += `<img src="${Poster}" alt="${Title}"/>
        <div class="titulo">${Title}</div>
        <div class="descricao">${Plot}.</div>
        <div class="duracao">Duração: ${Runtime}</div>
        <div class="genero">Gênero: ${Genre}</div>
        <div class="nota">Nota: ${imdbRating}</div>`
    }
    // console.log(saida);
    document.querySelector('.filmes').innerHTML = saida;
}









