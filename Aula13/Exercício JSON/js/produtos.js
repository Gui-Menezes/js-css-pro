var produtos = [
    {
        "id":1,
        "name":"Jaleco",
        "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
        "price":"R$ 999,99",
        "available":true
    },
    {
        "id":2,
        "name":"Avental",
        "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
        "price":"R$ 999,99",
        "available":true
    },
    {
        "id":3,
        "name":"Touca",
        "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
        "price":"R$ 999,99",
        "available":true
    },
    {
        "id":4,
        "name":"Fronha",
        "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
        "price":"R$ 999,99",
        "available":true
    },
    {
        "id":5,
        "name":"Embalagem",
        "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
        "price":"R$ 999,99",
        "available":true
    },
    {
        "id":6,
        "name":"Porta talher",
        "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
        "price":"R$ 999,99",
        "available":true
    },
    {
        "id":7,
        "name":"Porta absorvente",
        "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
        "price":"R$ 999,99",
        "available":true
    }
    ];

    // Capturar o elemento que vai recer os produtos:

    var root = document.getElementById('root');

    // Percorrer o JSON de produtos (array):

    // PRIMEIRA alternativa:
    // for (var i = 0; i < produtos.length; i++) {
    //     console.log(produtos[i]);
    //     root.innerHTML += produtos[i].name + '' + produtos[i].description + '' + produtos[i].price + '<br>';
    // }

    // SEGUNDA alternativa:
    // var resultado ='';
    // for (var i = 0; i < produtos.length; i++) {
    //     console.log(produtos[i]);
    //     resultado += produtos[i].name + '' + produtos[i].description + '' + produtos[i].price + '<br>';
    // }

    // root.innerHTML = resultado;


    // TERCEIRA alternativa (criando todo o HTML interno com JS):

    // for (var i = 0; i < produtos.length; i++) {
    //     var div = document.createElement('div');
    //     div.innerHTML = produtos[i].name + ' ' + produtos[i].description + ' ' + produtos[i].price;

    //     root.appendChild(div);
    // }

    // QUARTA variação (usando uma tabela):

        for (var i = 0; i < produtos.length; i++) {
            var tr = document.createElement('tr');

            var tdNome = document.createElement('td');
            tdNome.innerHTML = produtos[i].name;
            
            var tdDesc = document.createElement('td');
            tdDesc.innerHTML = produtos[i].description;

            var tdPreco = document.createElement('td');
            tdPreco.innerHTML = produtos[i].price;

            // Atribuição da hierarquia dos nodos:
            tr.appendChild(tdNome);
            tr.appendChild(tdDesc);
            tr.appendChild(tdPreco);

            // Atribui o elemento TR ao PAI root:
            root.appendChild(tr);
    }
