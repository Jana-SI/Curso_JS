// Add Elementos a um Array
const numeros = [1,2,3];
console.log(numeros);

// Inicio
numeros.unshift(0);
console.log(numeros);

// Meio
numeros.splice(1,0,'a');
console.log(numeros);

// Final
numeros.push(5);
console.log(numeros);

// Encontrando Elementos do Tipo Primitivos
const numeros1 = [1,2,3,1,4];
console.log(numeros1.indexOf(2));
console.log(numeros1.lastIndexOf(1));
console.log(numeros1.indexOf(2) !== -1);
console.log(numeros1.includes(2));

// Encontrando Elementos do Tipo Referência
const marcas = [
    {id: 1, nome: 'Fulano'},
    {id: 2, nome: 'Ciclano'}
];

const marca = marcas.find(function(marca){
    return marca.nome === 'Fulano';
});

console.log(marca);

// Arrow Functions
const marca1 = marcas.find((marca1) => {
    return marca1.nome === 'Fulano';
});

console.log(marca1);
console.log(marcas.find(marca1 => marca1.nome === 'Fulano'));

// Removendo elementos de um Array
const numeros2 = [1,2,3,4,5,6];

// Final
const ultimo = numeros2.pop();

console.log(ultimo);
console.log(numeros2);

// Inicio
const primeiro = numeros2.shift();

console.log(primeiro);
console.log(numeros2);

// Meio
const meio = numeros.splice(2,1);

console.log(meio);
console.log(numeros2);

// Esvaziando um Array
let numeros3 = [1,2,3,4,5,6];
let outros = numeros3;

// Solução 1
/* numeros3 = [];
console.log(numeros3); 
console.log(outros);*/

// Solução 2
/* numeros3.length = 0;
console.log(numeros3);
console.log(outros); */

// Solução3
/* numeros3.splice(0,numeros3.length);
console.log(numeros3);
console.log(outros); */

// Solução 4
while(numeros3.length > 0){
    numeros3.pop();
}
console.log(numeros3);
console.log(outros);

// Combinando e Dividindo um Array
const p = [1,2,3];
const s = [4,5,6];
console.log(p,s);

// Combinar
const combinar = p.concat(s);
console.log(combinar);

// Dividir
const cortado = combinar.slice(1,3);
console.log(cortado);

// Operador Spread

const combinar2 = [...p,'a', ...s, 'a'];
console.log(combinar2);

const clonado = [...combinar2];
console.log(clonado);

// Foreach
const n = [1,2,3,4,5];

n.forEach((num, ind) => console.log(num,"-",ind));

// Combinando Arrays
const combinado = n.join(',');
console.log(combinado);

const frase = "Peste & Mozao 5 anos";
const r = frase.split(' ');
console.log(frase,r,r.join('-'));