// criar um objeto endereço que contem:
/* rua
cidade
cep
exibirEndereço(endereco)*/

let endereco  = {
    rua: 'avenida uruguai',
    cidade: 'Rio Grande',
    cep: '96212-194'
};

function exibirEndereco(endereco){
    
    for(let chave in endereco){
        console.log(chave,':',endereco[chave]);
    }

}

exibirEndereco(endereco);