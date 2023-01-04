// Operadores aritiméticos (+ - * / **)
let salario = 100;
let soma = salario + salario;
let sub = salario - salario;
let mult = salario * salario;
let div = salario / salario;
let expo = 5 ** 5;

console.log(soma, sub, mult, div, expo);

// operadores de incremento e decremento
let idade = 18;

console.log(idade--, --idade, idade++, ++idade, idade);

// operadores atribuição
let valor = 100;

valor += valor;
console.log(valor);

valor -= valor;
console.log(valor);

// operadores de comparação
// igualdade estrita
console.log(1 === 1);
console.log('1' === 1);

// igualdade solta
console.log(1 == 1);
console.log('1' == 1);

// operadores ternário
let pontos = 200;
let tipo = pontos > 100 ? 'premium' : 'comum';

console.log(tipo);

// operadores logicos
// e (&&) retorna true se os dois operandos forem true
// ou (||) retorna true se um dos operandos forem true
// not (!) 

let maiorIdade = false;
let posssuiCT = false;
let podeAplicar = maiorIdade || posssuiCT;

console.log('pode aplicar: ', podeAplicar);

let candidatoRecusado = !podeAplicar;
console.log('Candidato Recusado: ', candidatoRecusado);

// Operadores bitwise
// Comparações não boleanas

// falsy, são undefined, null, 0, false, '', NaN - not a number

let corPersonalizada = '';
let corPadrão = 'Azul';
let corPerfil = corPersonalizada || corPadrão;

console.log('Cor Personalizada: ', corPersonalizada, ' - Cor Padrão: ', corPadrão, ' - Cor Perfil: ', corPerfil);

// truthy
