// if ... else

// se hora estiver entre 06h ate 12h, exibir bom dia!
// se estiver entre 12h ate 18h, exibir boa tarde!
// caso contrario, exibir boa noite!

let hora = 22;

if(hora > 6 && hora < 12){
    console.log('Bom Dia!');
}else if(hora > 12 && hora < 18){
    console.log('Boa Tarde!');
}else{
    console.log('Boa Noite!');
}