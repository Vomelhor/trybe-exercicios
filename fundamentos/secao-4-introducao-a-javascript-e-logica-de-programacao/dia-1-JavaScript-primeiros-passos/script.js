//Variaveis

/*
let myName = 'Vitor';
const birthCity = 'Pontalina';
let birthYear = 1996;
console.log(myName + birthCity + birthYear);
birthYear = 2030;
console.log(birthYear);
birthCity = 'Wisconsin Dells';
console.log(birthCity);

Mensagem de erro pois nao e possivel mudar uma constante.
*/





//Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

/*
const base = 5;
const heigth = 8;
const area = base * heigth;
console.log(area);
const perimeter = base * 2 + heigth * 2;
console.log(perimeter);
*/





//Condições If e Else

/*
const nota = 100;

if (nota >= 80){
    console.log('Parabéns, você foi aprovada(o)!');
} else if (nota < 80 && nota >= 60){
    console.log('Você está na nossa lista de espera');
} else {
    console.log('Você foi reprovada(o)');
}
*/





//Operadores lógicos

/*
let weekDay = 'quarta-feira';
if (weekDay == 'segunda-feira' || weekDay == 'terça-feira' || weekDay == 'quarta-feira' || weekDay == 'quinta-feira' || weekDay == 'sexta-feira'){
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
}else {
    console.log('FINALMENTE, descanso merecido UwU');
}
*/





//Switch e Case

/*
let status;

switch (status) {
    case 'aprovada': console.log('Parabéns, você foi aprovada(o)!');
    break;
    case 'lista': console.log('Você está na nossa lista de espera');
    break;
    case 'reprovada': console.log('Você foi reprovada(o)');
    break;
    default: console.log('Informação incorreta');
}
*/





//Exercícios - agora, a prática

//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.

/*
let a = 1;
let b = 1;
let adicao = (a + b);
let subtracao = (a - b);
let multiplicacao = (a * b);
let divisao = (a / b);
let modulo = (a % b);

console.log(adicao, subtracao, multiplicacao, divisao, modulo);
*/

//Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

/*
let a = 10;
let b = 5;
if (a > b){
    console.log(a + ' maior que ' + b);
} else {
    console.log(a + ' menor que ' + b);
}
*/

//Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

/*
let a = 100;
let b = 30;
let c = 5;
if (a > b && a > c){
    console.log(a + ' e o maior numero');
} else if (b > a && b > c) {
    console.log(b + ' e o maior numero');
} else {
    console.log(c + ' e o maior numero');
}
*/

//Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

/*
let a = 5;
if (a > 0){
    console.log('positive');
} else if (a < 0) {
    console.log('negative');
} else {
    console.log('zero');
}
*/

//🚀 Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

/*
let a = 5;
let b = 36;
let c = 144;
if (a < 1 || b < 1 || c < 1){
    console.log('erro!');
}else if (a + b + c == 180){
    console.log(true);
} else {
    console.log(false);
}
*/

//Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop (bispo) -> diagonals (diagonais)

/*
let chess = 'KING';
let result = chess.toLowerCase();
console.log(result);
switch (result) {
    case 'king': console.log('one square in any direction');
    break;
    case 'queen': console.log('diagonally, horizontally, or vertically');
    break;
    case 'rook': console.log('horizontally or vertically');
    break;
    case 'bishop': console.log('diagonally');
    break;
    case 'knight': console.log('in an L shape');
    break;
    case 'pawn': console.log('vertically forward');
    break;
    default: console.log('erro!');
}
*/

//Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
//Porcentagem >= 90 -> A
//Porcentagem >= 80 -> B
//Porcentagem >= 70 -> C
//Porcentagem >= 60 -> D
//Porcentagem >= 50 -> E
//Porcentagem < 50 -> F
//O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

/*
let a = 50;

if (a < 0 || a > 100){
    console.log('erro!');
} else if (a >= 90) {
    console.log('Grade A');
} else if (a >= 80) {
    console.log('Grade B');
} else if (a >= 70) {
    console.log('Grade C');
} else if (a >= 60) {
    console.log('Grade D');
} else if (a >= 50) {
    console.log('Grade E');
} else if (a < 50) {
    console.log('Grade F');
}
*/





//🚀 Há um par entre nós

