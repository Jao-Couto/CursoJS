//tipo de dados e variáveis
let a = 'Aluno';
var b = 10;
const c = 10.5
let d = null

a = 35
b = 'carlos'
console.log(a, b, c, d);



//Entruturas de Controle
if (b > 0)
    console.log("b > 0");

switch (b) {
    case 0:
        console.log("b == 0");
        break;
    case 10:
        console.log("b == 10");
        break;
    default:
        console.log("Não houve correspondência");

}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}


i = 0;
do {
    console.log(i);
    i++;
}
while (i < 0)



//Funçoes
function olaAluno(nome = "Aluno") {
    console.log("Olá " + nome);
}
olaAluno("João")


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

function Pessoa(nome, idade) {
    this.nome = nome,
        this.idade = idade,
        this.falar = function () {
            console.log("Olá, meu nome é " + this.nome);
        }
}

let pessoa2 = new Pessoa('Letícia', 19)
console.log(pessoa2);
console.log(pessoa2.nome, pessoa2.idade);
pessoa2.falar()



//Arrays
let lista = ["João", 30, true, { cargo: 'Funcionário' }, [1, 2, 3]]
console.log(lista);
console.log(lista[0]);


let numeros = [5, 8, 10, 1, 89]
numeros.push(6);
console.log(numeros);

numeros.pop()
console.log(numeros);

console.log(numeros.length);

numeros.forEach(function (item, index, array) {
    console.log("numeros[" + index + "] = " + item);
})



//Manipulação de Strings
let string = "teste"
console.log(string.concat("Ola"));
console.log(string + "Ola");

console.log(string.substring(2, 4));

console.log(string.indexOf("ste"));









//ES6

//arrow functions
const somar = (x) => x + 1
console.log(somar(23));


//map
let numeros2 = [5, 8, 10, 1, 89]
let res = numeros2.map((item, index, array) => {
    return item += index;
})
console.log(res);


//filter
let numeros3 = [5, 8, 10, 1, 89]
let res2 = numeros3.filter((item, index, array) => {
    return item >= 10
})
console.log(res2);

//reduce
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce((total, value, index, array) => {
    console.log(total, value, index);
    return total + value;
});
console.log(sum);


//for/of
const cars = ["BMW", "Volvo", "Mini"];
for (let x of cars) {
    console.log(x);
}

//Desestruturação
let pessoa3 = {
    nome: "João",
    idade: 22,
    falar: function () {
        console.log("Olá, meu nome é " + this.nome);
    }
}
const { nome, idade, falar } = pessoa3
console.log(nome, idade);
falar()

let numeros4 = [5, 8, 10, 1, 89]
const [num1, num2, num3] = numeros4
console.log(num1, num2, num3);

//spread ou Espalhamento
const newObj = { ...pessoa3, corCabelo: 'Preto' }
console.log(newObj);

const newArray = [...numeros4, 8]
console.log(newArray);

//Classes
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    nameYear() {
        return this.name + " - " + this.year
    }
}

let carro = new Car("Corolla", "2022")
console.log(carro.nameYear());

//Array ES6
let alf = Array.from("ABCDEFG")
console.log(alf);

const keysAlf = alf.keys()
for (let x of keysAlf) {
    console.log(x);
}


const numbers = [4, 9, 16, 25, 29];
function myFunction(value, index, array) {
    return value > 18;
}
console.log(numbers.find(myFunction));
console.log(numbers.findIndex(myFunction));


//Números ES6

console.log(Math.trunc(4.9))
console.log(Math.sign(10))
console.log(Math.sign(-10))
console.log(Math.sign(0))
console.log(Math.cbrt(8))
console.log(Number.isInteger(10))
console.log(Number.isInteger(10.1))



//Tratamento de erros
function dividir(dividendo, divisor) {
    if (divisor === 0) {
        throw new Error('Divisão por zero');
    }
    return dividendo / divisor;
}


try {
    //Código...
    let res = dividir(10, 0)
    throw "myException";
}
catch (err) {
    console.log("erro", err);
}
finally {
    console.log("Chegou ao fim");
}
