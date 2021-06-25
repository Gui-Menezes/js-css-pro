var mostrarDados = document.querySelector('#lista-dados');
var btnSalvar = document.querySelector('#btnSalvar');
var validaStatus = document.querySelector('#status');

var chamada = new XMLHttpRequest();
var url = 'https://608850faa6f4a3001742632f.mockapi.io/api/v1/tasks';


btnSalvar.addEventListener('click', function(event) {
    event.preventDefault();
    enviarDados();
    chamaNotificacao();
});

// ------------------- NOTIFICAÇÃO (que não está aparecendo mais)----------------
function chamaNotificacao() {
    if(!Notification) {
        alert('Verifica notificação!')
    };
    return;

    if(Notification.permission !== 'granted') {
        Notification.requestPermission();
    };
    abreNotificacao();
};

function abreNotificacao() {
    if(Notification.permission !== 'granted') {
        Notification.requestPermission();
    } else {
        var notificacaoValue = new Notification("Notification Title", {
            icon: "https://image.flaticon.com/icons/png/128/1827/1827504.png",
            body: "Tarefa adicionada com sucesso!",
            image: "https://entretetizei.com.br/site/wp-content/uploads/2020/11/o-rei-leao.jpg"
        });
    }
};
// ------------------------------------------------------------------------------

// --------------- POST ----------------------
function enviarDados() {
    chamada.open('POST', url, true);
    chamada.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

    var tarefaInput = document.querySelector('#tarefa').value;
    var prioridadeInput = document.querySelector('#level').value;

    chamada.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 201) {
            pegaValor();
        }
    }
    chamada.send(
        JSON.stringify({
        title_task: tarefaInput,
        level: prioridadeInput
        })
    );
}
// ----------------------------------------------------------

//  --------------- GET ----------------------------
function pegaValor() {
    if (navigator.onLine) {
        console.log('Verifica se está online', navigator.onLine);
        validaStatus.innerHTML = '<p style="color:green">Enviado com sucesso!</p>';

        chamada.open('GET', url, true);
        chamada.onreadystatechange = function() {
            if(this.readyState === 4 && this.status === 200) {
                var array = JSON.parse(this.responseText);
                window.localStorage.setItem("title_task", JSON.stringify(array));
                window.localStorage.setItem("level", JSON.stringify(array));
            }
        }
    } else {
        var valorLocalStorage = window.localStorage.getItem("title_task");
        validaStatus.innerHTML = '<p style="color:red">Falha ao enviar.</p>';
    }
    chamada.send(null);
}
// -------------------------------------------
