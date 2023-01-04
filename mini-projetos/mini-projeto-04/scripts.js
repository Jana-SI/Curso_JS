// velocidade maxima de ate 70 => ok
// a cada 5km acima do limite você ganha 1 ponto
// math.flor()
// caso pontos maior que 12 -> carteira suspendida


verificarVelocidade(130);

function verificarVelocidade(velocidade) {

    const velocidadeMaxima = 70, kmPonto = 5, pontoMaior = 12;


    if(velocidade <= velocidadeMaxima){

        console.log('ok');

    }else{
        const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPonto);

        if(pontos >= pontoMaior){

            console.log('Carteira Suspensa');

        }else{

            console.log('Pontos:', pontos);

        }
    }
}