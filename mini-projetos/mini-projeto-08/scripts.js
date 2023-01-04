// Exercício Nota Escolar
// Obter a média a partir de um array

/* 0 - 59: F
 60 - 69: D
70 - 79: C
80 - 89: B
90 - 100: A */

const array = [70, 70, 80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {

    const media = calcularMedia(notas);
    
    if(media < 59) return 'F';

    else if(media < 69) return 'D';

    else if(media < 79) return 'C';
        
    else if(media < 89) return 'B';
        
    else return 'C';
}

function calcularMedia(array) {
    let soma = 0, valor;

    for(valor of array){
        soma += valor;
    }

    return soma / (array.length);
}