function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria
    this.ligar = function(){
        console.log("Fazendo Ligação ... ");
    }
}

const celular1 = new Celular('Zenfone', 5.5, 5000);
console.log(celular1);

const celular2 = new Celular('ASUS', 5.5, 5000);
console.log(celular2);