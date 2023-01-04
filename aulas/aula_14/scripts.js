const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    capacidadeBateria: 5000,
    ligar: function(){
        console.log("Fazendo ligação")
    }
}

// Factory Functions
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("Fazendo ligação")
        }
    }
}

const celular1 = criarCelular('Zenfone', 5.5, 5000);
console.log(celular1);
const celular2 = criarCelular('ASUS', 155.75, 5000);
console.log(celular2);