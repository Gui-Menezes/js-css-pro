function carregaDados (arquivo) {

    var httpRequest = new XMLHttpRequest();

    // Na volta, chama: callback:
    httpRequest.onload = mostraDados;

    // Incluir o onloadstart ANTES do .open e .send.
    httpRequest.onloadstart = mostraLoader;

    httpRequest.open('GET', arquivo, true);
    httpRequest.send(null);
}

function mostraLoader () {
    var lista = document.getElementById('lista');
    // Pode ser incluída uma imagem <img> no lugar do texto.
    // Pode ser incluído código HTML (<div class="loader"</div) e estilizar via CSS.
    lista.innerHTML = 'Carregando...';
}



function mostraDados() {
    var lista = document.getElementById('lista');
    // A necessidade do THIS é devido ao responseText ser inserido pelo httpRequest.onload
    // e se tornar uma propriedade DESTA (this) função.
    lista.innerHTML = this.responseText;
}

// Automatizando um botão para fazer o Ajax:

var btnProdutos = document.getElementById('btn-produtos');
btnProdutos.addEventListener('click', function() {
    carregaDados('produtos.html');
});

var btnCarros = document.getElementById('btn-carros');
btnCarros.addEventListener('click', function() {
    carregaDados('carros.html');
});