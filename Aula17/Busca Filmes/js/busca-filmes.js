const mostraFilme = document.querySelector('.botao');

const chamada = new XMLHttpRequest();

mostraFilme.addEventListener('click', function (event) {
    event.preventDefault();
    const valorBusca = document.querySelector('.busca').value;
    const url = `http://www.omdbapi.com/?t=${valorBusca}&apikey=994f918b`;
    buscaFilme(url);
});

// ------------ GET ------------
function buscaFilme(url) {

    chamada.open('GET', url, true);
    chamada.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            var array = JSON.parse(this.responseText);
            mostraArray(array);
        }
    }
    chamada.send(null);
}
// --------------------------------

function mostraArray(array) {

    const {Poster, Title, Plot, Runtime, Genre, imdbRating} = array;
    // let poster = array.Poster;
    // let titulo = array.Title;
    // let descricao = array.Plot;
    // let duracao = array.Runtime;
    // let genero = array.Genre;
    // let nota = array.imdbRating;
    let saidaPoster = `<img src="${Poster}" alt="${Title}"/>`
    let saidaInfos = `<div class="titulo">${Title}</div>
    <div class="descricao">${Plot}.</div>
    <div class="duracao">Duração: ${Runtime}</div>
    <div class="genero">Gênero: ${Genre}</div>
    <div class="nota">Nota: ${imdbRating}</div>`

    // saida = '<div class="poster"><img src="' + array.Poster + '" alt="' + array.Title + '"</div>'

    document.querySelector('.poster').innerHTML = saidaPoster;
    document.querySelector('.infos').innerHTML = saidaInfos;
}
