
var mostraFilme = document.querySelector('.botao');

var chamada = new XMLHttpRequest();

mostraFilme.addEventListener('click', function (event) {
    event.preventDefault();
    let valorBusca = document.querySelector('.busca').value;
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
    let poster = array.Poster;
    let titulo = array.Title;
    let descricao = array.Plot;
    let duracao = array.Runtime;
    let genero = array.Genre;
    let nota = array.imdbRating;
    let saidaPoster = `<img src="${poster}" alt="${titulo}"/>`
    let saidaInfos = `<div class="titulo">${titulo}</div>
    <div class="descricao">${descricao}.</div>
    <div class="duracao">Duração: ${duracao}</div>
    <div class="genero">Gênero: ${genero}</div>
    <div class="nota">Nota: ${nota}</div>`

    // saida = '<div class="poster"><img src="' + array.Poster + '" alt="' + array.Title + '"</div>'

    document.querySelector('.poster').innerHTML = saidaPoster;
    document.querySelector('.infos').innerHTML = saidaInfos;
}
