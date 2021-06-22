var lista = document.getElementById('lista');

function carregaLista(pastelzinho) {

    var httpRequest = new XMLHttpRequest();

    httpRequest.open('GET', pastelzinho, true);

    httpRequest.onreadystatechange = function() {
        // lista.innerHTML = '<img src="./img/loader.gif"/>';
        mostraLoader(true);

        setTimeout(()=>{

            if (this.status == 200 && this.readyState == 4) {
                var meusProdutos = JSON.parse(this.responseText);
                // lista.innerHTML = "";
                mostraLoader(false);

                mostraLista(meusProdutos);
            }
    
        }, 2000)
    }

    httpRequest.send(null);
}

function mostraLoader(loading) {
    if (loading) {
        lista.innerHTML = '<img src="img/loader.gif">';
    } else {
        lista.innerHTML = '';
    }
};

function mostraLista(meusProdutos) {
    // var lista = document.getElementById('lista');
    
    var table = document.createElement('table');
    table.setAttribute('border', '2');
    lista.appendChild(table);

    var thead = document.createElement('thead');
    table.appendChild(thead);

    var tr = document.createElement('tr');
    thead.appendChild(tr);

    var th = document.createElement('th');
    th.innerHTML = 'Nome';
    tr.appendChild(th);

    var th = document.createElement('th');
    th.innerHTML = 'Preço';
    tr.appendChild(th);

    var th = document.createElement('th');
    th.innerHTML = 'Descrição';
    tr.appendChild(th);

    var th = document.createElement('th');
    th.innerHTML = 'Foto';
    tr.appendChild(th);

    var tbody = document.createElement('tbody');
    tbody.setAttribute('id', 'listaDados');
    table.appendChild(tbody);

    var respostaHTML = '';
    for (var i = 0; i < meusProdutos.length; i++) {
        respostaHTML += '<tr><td>' + meusProdutos[i].nome + '</td><td>' + meusProdutos[i].preco + '</td><td>' + meusProdutos[i].descricao + '</td><td>' + '<img src="' + meusProdutos[i].imagem + '">' + '</td:</tr>';
    }
    
    document.getElementById('listaDados').innerHTML = respostaHTML;
};

var btnListar = document.getElementById('btn-listar');
btnListar.addEventListener('click', function() {
    carregaLista('https://608850faa6f4a3001742632f.mockapi.io/api/v1/Produtos');
});

var btnLimpar = document.getElementById('btn-limpar');
btnLimpar.addEventListener('click', function() {
    lista.innerHTML = '';
});

var btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', function() {

    var nome = document.getElementById('nome').value;
    console.log(nome);

    var preco = document.getElementById('preco').value;
    console.log(preco);

    const data= {
        nome:nome,
        preco:preco
    };

    var dados = this.responseText;

    httpRequest = new XMLHttpRequest();
    // httpRequest.setRequestHeader('Content-type', 'application/json')

    dados = JSON.stringify(data);

    httpRequest.open('POST','https://608850faa6f4a3001742632f.mockapi.io/api/v1/Produtos', true);
    httpRequest.send(dados);

    console.log(dados);

});
