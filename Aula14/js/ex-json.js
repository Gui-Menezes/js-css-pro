var texto = '[ {"nome": "TV"} ]';

console.log(texto);

// JSON Parse: converte um texto em JSON (desde que o texto seja compatível):
var objeto = JSON.parse(texto);

console.log(objeto);
console.log(objeto[0].nome);

var carros = [
    {
        "nome": "Prisma",
        "ano": "2015"
    },
    {
        "nome": "Celta",
        "ano": "2012"
    }
];

console.log(carros);

// JSON Stringify converte um JSON válido em string.
var carrosString = JSON.stringify(carros);
console.log(carrosString);
