
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return  Math.floor(Math.random() * (max - min) + min);
}

function esperaAqui(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Não é uma String')

        setTimeout(() => {
            resolve(msg)
        }, tempo)
    });
};

// // Se o RESOLVE não for string = REJECT:
// esperaAqui(1234, rand(1, 5)).then((resposta) => {
//     console.log(resposta);
// }).catch((erro) => {
//     console.log(`ERRO ${erro}`);
// });

// Se o RESOLVE for string (encadeamento de Promise):
esperaAqui("Conexão com o Banco de Dados", rand(1, 5)).then((resposta) => {
    console.log(resposta);
    return esperaAqui("Buscar dados no Banco de Dados", rand(1, 5))
}).then((resposta) => {
    console.log(resposta);
    return esperaAqui("Tratar Dados", rand(1, 5))
}).then((resposta) => {
    console.log(resposta);
// Se o RESOLVE não for string = REJECT:
}).catch((erro) => {
    console.log(`ERRO ${erro}`);
});

console.log("Vai mostrar antes da Promise");
