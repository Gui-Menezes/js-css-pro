var mostraTodosOsDados = document.querySelector('#lista-dados');
var botaoEnviarDados = document.querySelector('#enviar');
var validaStatus = document.querySelector('#status');

var chamada = new XMLHttpRequest();
var url = 'https://608850faa6f4a3001742632f.mockapi.io/api/v1/Produtos';

mostraTodosOsDados.addEventListener('click', function (event) {
    event.preventDefault();
    pegaValor();
});

botaoEnviarDados.addEventListener('click', function(event) {
    event.preventDefault();
    enviarDados();
});

pegaValor();

// --------------- POST ----------------------
function enviarDados() {
    chamada.open('POST', url, true);
    chamada.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

    var nomeInput = document.querySelector('#nome').value;
    var precoInput = document.querySelector('#preco').value;

    chamada.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 201) {
            pegaValor();
        }
    }

    chamada.send(
        JSON.stringify({
        nome: nomeInput,
        preco: precoInput
        })
    );
}
// ----------------------------------------------------------


//  --------------- GET ----------------------------
function pegaValor() {
    if (navigator.onLine) {
        console.log('Verifica se está online', navigator.onLine);
        validaStatus.innerHTML = '<p style="color:green">Online</p>';

        chamada.open('GET', url, true);
        chamada.onreadystatechange = function() {
            if(this.readyState === 4 && this.status === 200) {
                var array = JSON.parse(this.responseText);
                window.localStorage.setItem("produtos", JSON.stringify(array));
                mostraArray(array);
            }
        }
    } else {
        var valorLocalStorage = window.localStorage.getItem("produtos");
        validaStatus.innerHTML = '<p style="color:red">Offline</p>';

        mostraArray(JSON.parse(valorLocalStorage));
    }
    chamada.send(null);
}
// -------------------------------------------

//  ------------ Deletar item ------------
function Delete(id) {
    chamada.open("DELETE", url + "/" + id, true);
    chamada.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
            pegaValor();
        }
    };
    chamada.send(null);
}
// -------------------------------------------

function mostraArray(array) {
    var saida = '';

    var i ;

    for(i = 0; i < array.length; i++) {
        saida +=
        '<div class="container-card"><h1 class="titulo-card">' + 
        array[i].nome + 
        '</h1><div class="imagem"><img src="'+ 
        array[i].imagem + 
        '" alt="' + 
        array[i].nome + 
        '"></div><p class="preco">' + 
        array[i].preco + 
        '</p><p class="descricao">' + 
        array[i].descricao + 
        '</p><p class="loja">' + 
        array[i].loja + 
        '</p><button id="' + 
        array[i].id + 
        '" onClick=Delete(this.id) >Remover Itens</button></div>'

        // saida += '<a>' + array[i].nome + '</a></br>';
    }

    document.getElementById('lista-de-produtos').innerHTML = saida;

}