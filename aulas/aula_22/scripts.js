function Postagem(titulo, mensagem, autor){
    this.titulo = titulo,
    this.autor = autor,
    this.mensagem = mensagem,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

let postagem = new Postagem('Ep 20', 'de tirara o folego', 'Ciclano');

console.log(postagem);