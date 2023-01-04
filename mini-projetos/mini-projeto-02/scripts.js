// Escreva uma função que usa 2 numeros e retorna o maior entre eles

function maior(n1, n2) {
    if(n1 > n2){
        return n1;
    }else{
        return n2;
    }
} 

function maior(n1, n2) {
    if(n1 > n2){
        return n1;
    }
    return n2;
}

function maior(n1, n2) {
    
    return n1 > n2 ? n1 : n2;
}

let n1 = 10;
let n2 = 5;

r = maior(n1, n2);

console.log('N1:', n1, 'N2:', n2, 'Maior:', r);