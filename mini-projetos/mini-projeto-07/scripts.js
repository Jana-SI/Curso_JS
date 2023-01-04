// Criar função somar que retorna a soma de todos os múltiplos de 3 e 5

somar(10);

function somar(limite) {

    let i, aux = 0;

    for (i = 0; i <= limite; i++) {

        if (i % 3 === 0) {

            aux += i;

        } else if (i % 5 === 0) {

            aux += i;

        }
    }
    
    console.log(aux);
}