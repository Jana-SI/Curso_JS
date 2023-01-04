// criar função para mostrar os números primos

// divisivel por um ou por ele mesmo

exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite) {

    let i;

    for(i = 2; i < limite; i++){

        if(numeroPrimo(i)) console.log(i);
        
    }
}

function numeroPrimo(numero){

    let j;

    for(j = 2; j < numero; j++){

        if(numero % j === 0){

           return false;

        }
    }

    return true;
}