//Para fixar

//Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

/*
let player = {name: 'Marta',
        lastName: 'Silva',
        age: 34,
        medals: { golden: 2, silver: 3 }
    }
 console.log(player);
*/





//Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

/*
for (let key in names){
    console.log('Ola ' + names[key]);
}
*/





//Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

/*
for (let key in car){
    console.log(key + ': ' + car[key]);
}
*/





//Desenvolva cada exercício a seguir utilizando funções:

//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

/*
let a = 5;
let b = 10;
function sum (a, b){
    return a + b;
}
function sub (a , b){
    return a - b;
}
function mult (a, b){
    return a * b;
}
function div (a, b){
    return a / b;
}
function module (a, b){
    return a & b;
}
console.log(sum(a, b));
console.log(sub(a, b));
console.log(mult(a, b));
console.log(div(a, b));
console.log(module(a, b));
*/





//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

/*
const a = 5;
const b = 55;
function maior (a, b){
    if (a > b){
        return a;
    } else {
        return b;
    }
}
console.log(maior(a, b));
*/





//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

/*
const a = 5;
const b = 55;
const c = 555;
function maior (a, b, c){
    if (a > b && a > c){
        return a;
    } else if (b > a && b > c){
        return b;
    } else {
        return c;
    }
}
console.log(maior(a, b, c));
*/





//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

/*
let a = 0;
function positiveNegative (a){
    if (a > 0){
        return 'positive';
    } if (a < 0){
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log(positiveNegative(a));
*/





//Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

//Um ângulo será considerado inválido se não tiver um valor positivo.

/*
function triangleAngles (a, b, c){
    let sumAngles = a + b + c;
    if (a > 0 && b > 0 && c > 0){
        if (sumAngles === 180){
            return 'true';
        } else {
            return 'false'
        }
    } else {
        return 'erro, angulo invalido';
    }
}
console.log(triangleAngles(55, 50, 75));
*/