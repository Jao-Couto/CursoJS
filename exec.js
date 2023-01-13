
//Objetos
let pessoa = {
    nome: "João",
    idade: 22,
    falar: function () {
        console.log("Olá, meu nome é " + this.nome);
    }
}
console.log(pessoa);
console.log(pessoa.nome, pessoa.idade);
pessoa.falar()


