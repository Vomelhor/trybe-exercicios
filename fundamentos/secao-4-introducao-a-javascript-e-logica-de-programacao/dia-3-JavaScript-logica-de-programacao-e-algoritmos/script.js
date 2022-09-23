//Exercícios - agora, a prática

//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

//O fatorial é representado pelo sinal !
//4! = 4 x 3 x 2 x 1 = 24

//Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

/*
let v = 10;
let fatorial = 0;
for (let index = 1; index <= v; index += 1){
    fatorial = index + fatorial;
}
if(fatorial == 0){
    fatorial += 1;
}
console.log(fatorial);

ou

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);
*/





//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
 
/*
let word = 'tryber';
let drow = '';
for (let index = word.length; index > 0; index -= 1){
    drow += word[index-1];
}
console.log(drow);

ou 

let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);
*/





//Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

/*
let maiorPalavra = '';
for (let index = 0; index < array.length; index += 1){
    if (maiorPalavra.length < array[index].length){
        maiorPalavra = array[index];
    }
}
console.log(maiorPalavra);

let menorPalavra = array[0];
for (let index = 0; index < array.length; index += 1){
    if (menorPalavra.length > array[index].length){
        menorPalavra = array[index];
    }
}
console.log(menorPalavra);
*/






//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

/*
let numeroPrimo;
let divisores = 0;

for (let index = 2; index <= 50; index += 1){
    for (let jndex = 1; jndex <= index; jndex += 1){
        if (index%jndex == 0){
            divisores += 1;
        }
    }
    if (divisores == 2){
        numeroPrimo = index;
    }
    divisores = 0;
}
console.log(numeroPrimo);
*/