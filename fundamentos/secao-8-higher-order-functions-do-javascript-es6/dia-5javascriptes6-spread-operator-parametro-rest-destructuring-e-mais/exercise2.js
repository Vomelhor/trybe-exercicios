// escreva sum abaixo

const sum = (...numbers) => numbers.reduce(((acc, value) => acc + value), 0);

console.log(sum(1, 3, 4, 5));