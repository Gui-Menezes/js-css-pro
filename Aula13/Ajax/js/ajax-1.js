    function carregaDados (arquivo) {

    var httpRequest = new XMLHttpRequest();

    // Na volta, chama: callback:
    httpRequest.onload = mostraDados;

    httpRequest.open('GET', arquivo, true);
    httpRequest.send(null);
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