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

//Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
//Bonus: use somente um if.

/*
const a = 5;
const b = 50;
const c = 555;
if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
    console.log(true);
} else {
    console.log(false);
}
*/





//Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
//Bonus: use somente um if.

/*
const a = 4;
const b = 55;
const c = 80;
if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0){
    console.log(true);
} else {
    console.log(false);
}
*/





//Utilize if/else para escrever um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
//Atente que, sobre o custo do produto, incide um imposto de 20%.
//Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
//O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
//valorCustoTotal = valorCusto + impostoSobreOCusto;
//lucro = valorVenda - valorCustoTotal (lucro de um produto);

/*
const custo = 1;
const valor = 2;
let imposto = 0.2 * custo;
let lucro = valor - (custo + imposto);
if (custo < 0 || valor < 0 || lucro < 0){
    console.log('erro!');
} else {
    console.log('A empresa tera ' + lucro * 1000 + ' de lucro ao vender 1000 produtos.')
}
*/





//Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.
//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
//A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
//INSS (Instituto Nacional do Seguro Social)
//Salário bruto até R$ 1.556,94: alíquota de 8%
//Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
//IR (Imposto de Renda)
//Até R$ 1.903,98: isento de imposto de renda
//De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
//Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
//O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
//Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
//Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
//R$ 2.670,00: salário com INSS já deduzido;
//7.5%: alíquota de imposto de renda;
//R$ 142,80 parcela a se deduzir do imposto.
//Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
//O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
//Resultado: R$ 2.612,55.
//De olho na dica 👀: que tal identificar as alíquotas com variáveis de nomes explicativos?

/*
let salarioBruto = 3000;
let salarioBase = 0;
let salarioLiquido = 0;
let impostoDeRenda = 0;
if (salarioBruto <= 1556.94){

    salarioBase= salarioBruto - (salarioBruto * 0.08);

} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    
    salarioBase = salarioBruto - (salarioBruto * 0.09);

} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){

    salarioBase = salarioBruto - (salarioBruto * 0.11);

} else if (salarioBruto > 5189.82){

    salarioBase = salarioBruto - 570.88;

}

if (salarioBase <= 1903.98){

    salarioLiquido = salarioBase;

} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
    
    impostoDeRenda = (salarioBase * 0.075) - 142.80;
    salarioLiquido = salarioBase - impostoDeRenda;

} else if (salarioBase >= 2826.65 && salarioBase <= 3751.05){

    impostoDeRenda = (salarioBase * 0.15) - 354.80;
    salarioLiquido = salarioBase - impostoDeRenda;

} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){

    impostoDeRenda = (salarioBase * 0.225) - 636.13;
    salarioLiquido = salarioBase - impostoDeRenda;

} else if (salarioBase > 4664.68){

    impostoDeRenda = (salarioBase * 0.275) - 869.36;
    salarioLiquido = salarioBase - impostoDeRenda;

}
console.log('R$ ' + salarioLiquido);
*/
