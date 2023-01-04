function verificar(){
    nome = document.getElementById('nome').value;
    
    convidado = ['Janaina', 'Carlos', 'Mo', 'Mozao', 'Peste', 'Indiazinha', 'Franceszinho']

    if(convidado.includes(nome)){
        document.getElementById("permissao").innerText = 'Você pode Entrar!'
    }else{
        document.getElementById("permissao").innerText = 'Você não pode Entrar!'
    }
}