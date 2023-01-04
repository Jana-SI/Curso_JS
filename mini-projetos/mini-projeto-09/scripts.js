// criar uma função que exibe a quantidade de * que aquela linha possui

exibirAsteriscos(5);

function exibirAsteriscos(linhas) {
    let i, j, asterisco;

    for(i = 1; i <= linhas; i++){
        asterisco = '';

        for(j = 0; j < i; j++){
            asterisco += '*';
        }

        console.log(asterisco);
    }
    
}

function exibirAsteriscos(linhas) {
    let i, asterisco = '';

    for(i = 0; i < linhas; i++){
        asterisco += '*';
        console.log(asterisco);
    }
    
}