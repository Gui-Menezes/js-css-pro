window.localStorage.setItem("nome", "Guilherme");

const data = {
    nome: 'Guilherme Menezes',
    idade: 26,
    rua: "Debaixo da ponte no Centro da cidade"
};

window.localStorage.setItem("usuario", JSON.stringify(data));

var retornaObjetoDoStorage = window.localStorage.getItem('usuario');

console.log('mostra valor retornado', retornaObjetoDoStorage);
console.log('mostra valor retornado (JSON)', JSON.parse(retornaObjetoDoStorage));

// window.localStorage.removeItem('nome');
// window.localStorage.removeItem('usuario');

// Limpa TODO Local Storage:
// window.localStorage.clear();
