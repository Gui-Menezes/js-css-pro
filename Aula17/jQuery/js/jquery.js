console.log('Mostrou!');

//  Sem jQuery:
var semJquery = document.getElementById('teste');
console.log(semJquery);

//  Com jQuery:
// $ = document.querySelector()
var comJquery = $('#teste');
console.log(comJquery);


//  addEventListener:
$('#teste').on('click', function() {
    console.log('Enviado');
});

//  Esconde o botão:
$('#teste').hide();

// Fazer GET:
$.getJSON(
    "https://608850faa6f4a3001742632f.mockapi.io/api/v1/tasks",
    function(data) {
        console.log('data');
    }
);

// AJAX:
$.ajax({
    type: "POST",
    url: "https://608850faa6f4a3001742632f.mockapi.io/api/v1/tasks",
    data: {
        title_task: "Adicionando com POST jQuery",
        level: "30"
    }
});