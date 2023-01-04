// Criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto

const serie = {
    titulo: 'A Casa do Dragão',
    ano: 2022,
    emissora: 'HBO',
    personagem: 'Rhaenyra',
    Idioma: 'Inglês'
}

exibirPropriedades(serie);

function exibirPropriedades(obj) {
    for(prop in obj){
        if(typeof obj[prop] === 'string'){
            console.log(prop, obj[prop]);
        }
    }
}