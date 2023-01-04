// verbo + substantivo

let corSite = "azul";

function resetaCor (){
    corSite = "";
};

function resetaCor1 (cor){
    corSite = cor;
};

function resetaCor2 (cor, tonalidade){
    corSite = cor + " " + tonalidade;
};

console.log(corSite);
resetaCor();
console.log(corSite);
resetaCor1("vermelho");
console.log(corSite);
resetaCor2("verde", "claro");
console.log(corSite);