var mostraNotificacao = document.querySelector('#mostra-notificacao');

mostraNotificacao.addEventListener('click', function(event) {
    event.preventDefault();
    chamaNotificacao();
});

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
            body: "Guilherme Menezes",
            image: "https://entretetizei.com.br/site/wp-content/uploads/2020/11/o-rei-leao.jpg"
        });
    }
};