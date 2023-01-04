class Endereco {
    constructor(rua, cidade, cep) {
        this.rua = rua;
        this.cidade = cidade;
        this.cep = cep;
    }
}

const endereco1 = new Endereco('avenida uruguai', 'Rio Grande', '96212-194');

const endereco2 = new Endereco('pero vaz de caminha', 'Rio Grande', ' 96202-620');

function saoIguais(endereco1, endereco2){
    for(let chave1 in endereco1){
        for(let chave2 in endereco2){
            if(endereco1[chave1] === endereco2[chave2]){
                console.log(endereco1[chave1],"==",endereco2[chave2],true);
            }
        }
    }
}

saoIguais(endereco1, endereco2);

function memoriaIguais(endereco1, endereco2){
    for(let chave1 in endereco1){
        for(let chave2 in endereco2){
            if(chave1 === chave2){
                console.log(chave1,"==",chave2,true);
            }
        }
    }
}

memoriaIguais(endereco1, endereco2);

// resposta do video

function saoIguaisV(endereco1, endereco2){
    return endereco1.rua === endereco2.rua &&
            endereco1.cidade === endereco2.cidade &&
            endereco1.cep === endereco2.cep;
}
    
console.log(saoIguaisV(endereco1, endereco2));

function memoriaIguaisV(endereco1, endereco2){
    return endereco1 === endereco2;
}

console.log(memoriaIguaisV(endereco1, endereco2));