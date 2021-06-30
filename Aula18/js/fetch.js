const url = 'https://608850faa6f4a3001742632f.mockapi.io/api/v1/tasks';


// // -----GET---------
// fetch(url, {
//     method: "GET"
// }).then(resposta => resposta.json()).then(resposta => console.log(resposta));
// // -------------------

// // -----POST----------
// fetch(url, {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json; charset=utf-8",
//     },
//     body: '{"title_task": "Adicionado com POST FETCH", "level": "8"}'
// })
// .then((resposta) => resposta.json())
// .then((resposta) => console.log(resposta));
// // ---------------------

// -------- PUT-------------
fetch (`${url}/1`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    },
    body: '{"title_task": "Adicionado com PUT FETCH", "level": "123456789"}'
})
.then((resposta) => resposta.json())
.then((resposta) => console.log(resposta));
// ----------------------------