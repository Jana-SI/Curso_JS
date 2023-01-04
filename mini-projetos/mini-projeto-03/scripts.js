// divisivel por 3 => fizz
// divisivel por 5 => buzz
// divisivel por 3 e 5 => FizzBuzz
// não divivel por 3 ou 5 => entrada
// não eh um numero => nao eh um numero

const resultado = fizzBuzz(11);
console.log(resultado);

function fizzBuzz(entrada) {

    if(typeof entrada !== 'number'){
        return 'Não é um numero';
    }else if((entrada % 3 === 0) && (entrada % 5 === 0)){
        return 'FizzBuzz';
    }else if(entrada % 3 === 0){
        return 'Fizz';
    }else if(entrada % 5 === 0){
        return 'Buzz';
    }
    
    return entrada;
}