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

async function executar() {
    const fase1 = await esperaAqui("Fase1", rand(1, 5));
    console.log(fase1);
    const fase2 = await esperaAqui("Fase2", rand(1, 5));
    console.log(fase2);
    const fase3 = await esperaAqui("Fase3", rand(1, 5));
    console.log(fase3);

    console.log(`Terminamos a fase: ${fase3}`);
}

// Usando arrow function:
// const executar = aync () => {
//     const fase1 = await esperaAqui("Fase1", rand(1, 5));
//     console.log(fase1);
//     const fase2 = await esperaAqui("Fase2", rand(1, 5));
//     console.log(fase2);
//     const fase3 = await esperaAqui("Fase3", rand(1, 5));
//     console.log(fase3);

//     console.log(`Terminamos a fase: ${fase3}`);
// };

executar();