// primeira opção

let FaixaPreco = [
    {tooltip: 'até R$ 700', minimo: 0, maximo: 700},
    {tooltip: 'de R$ 700 a R$ 1000', minimo: 700, maximo: 1000},
    {tooltip: 'de R$ 1000 ou mais', minimo: 1000, maximo: 9999999}
];

console.log(FaixaPreco);

// segunda opção
function criaFaixaPreco(tooltip, minimo, maximo){
    return{
        tooltip, minimo, maximo
    }
}

let FaixaPreco2 = [
    criaFaixaPreco('até R$ 700', 0, 700),
    criaFaixaPreco('de R$ 700 a R$ 1000', 700, 1000),
    criaFaixaPreco('de R$ 1000 ou mais', 1000, 9999999)
]

console.log(FaixaPreco2);

// terceira opção
function fP3(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let FaixaPreco3 = [
    new fP3('até R$ 700', 0, 700),
    new fP3('de R$ 700 a R$ 1000', 700, 1000),
    new fP3('de R$ 1000 ou mais', 1000, 9999999)
]

console.log(FaixaPreco3);