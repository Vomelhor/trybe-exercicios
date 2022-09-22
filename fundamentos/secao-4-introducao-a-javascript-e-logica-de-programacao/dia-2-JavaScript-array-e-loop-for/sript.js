//Para fixar

//Obtenha o valor “Serviços” do array menu:

/*
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);
*/





//Procure o índice do valor “Portfólio” do array menu:

/*
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu[2];

console.log(indexOfPortfolio);
*/





//Adicione o valor “Contato” no final do array menu:
//De olho na dica 👀: Use o método .push()

/*
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');
console.log(menu);
*/





//Utilize o for para imprimir os elementos da lista groceryList com o console.log():

/*
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let i=0; i < 4; i += 1){
    console.log(groceryList[i]);
}
*/





//Utilize o for/of para imprimir os elementos da lista names com o console.log():

/*
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names){
    console.log(name);
}
*/





//Exercícios - agora, a prática

//Iremos utilizar esse array para realizar os próximos exercícios.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let index of numbers){
    console.log(index);
}

//Some todos os valores contidos no array e imprima o resultado;

let sum = 0;
for (let sumIndex = 0; sumIndex < numbers.length; sumIndex += 1){
    sum = numbers[sumIndex] + sum;
}
console.log(sum);

//Calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

let media = sum / numbers.length;
console.log(media);

//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

if (media > 20){
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual que 20');
}

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maior = 0;
for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] > maior){
        maior = numbers[index];
    }
}
console.log(maior);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numImpares = 0;
for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 != 0){
        numImpares += 1;
    }
}
if(numImpares == 0){
    console.log('nenhum valor ímpar encontrado')
} else {
    console.log(numImpares);
}

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menor = maior;
for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] < menor){
        menor = numbers[index];
    }
}
console.log(menor);

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let array = [];
let contador = 1;
for (let index = 0; index < 25; index += 1){
    array[index] = contador;
    contador += 1;
}
console.log(array);

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let resultado = 0;
for (let index = 0; index < array.length; index += 1){
    console.log(array[index] / 2);
}
