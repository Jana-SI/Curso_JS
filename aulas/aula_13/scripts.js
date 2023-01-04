// 1. for

let i;

for(i = 0; i< 5; i++){
    console.log(i,'Estou aprendendo!');
}

for(i = 1; i <= 5; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

for(i = 5; i >= 1; i--){
    if(i % 2 !== 0){
        console.log(i);
    }
}

// 2. while, do .. while, for .. in, for .. of

i = 5;
while(i >= 1){

    if(i % 2 !== 0){
        console.log(i);
    }

    i--;

}

// 3. do .. while

i = 0;
do{
    console.log(i, 'digitando!');
    i++;
}while(i < 10);

// 4. for .. in

const pessoa = {
    nome: 'Janaina',
    idade: 29
};

// key - value
for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

const cores = ['Vermelho', 'Azul', 'Verde'];

for(let indice in cores){
    console.log(indice, cores[indice]);
}

// 5. for .. of

for(let cor of cores){
    console.log(cor);
}