// Solicita dois números ao usuário
let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));

// Variável que receberá os resultados
let resultado;

// Adição
resultado = numero1 + numero2;
console.log(`Adição: ${numero1} + ${numero2} = ${resultado}`);

// Usando operador de atribuição +=
resultado += 10;
console.log(`Adição com += (somando 10): resultado += 10 -> ${resultado}`);

// Subtração
resultado = numero1 - numero2;
console.log(`Subtração: ${numero1} - ${numero2} = ${resultado}`);

// Usando operador de atribuição -=
resultado -= 5;
console.log(`Subtração com -= (subtraindo 5): resultado -= 5 -> ${resultado}`);

// Multiplicação
resultado = numero1 * numero2;
console.log(`Multiplicação: ${numero1} * ${numero2} = ${resultado}`);

// Usando operador de atribuição *=
resultado *= 2;
console.log(`Multiplicação com *= (multiplicando por 2): resultado *= 2 -> ${resultado}`);

// Divisão
resultado = numero1 / numero2;
console.log(`Divisão: ${numero1} / ${numero2} = ${resultado}`);

// Usando operador de atribuição /=
resultado /= 2;
console.log(`Divisão com /= (dividindo por 2): resultado /= 2 -> ${resultado}`);

// Resto da divisão
resultado = numero1 % numero2;
console.log(`Resto da divisão: ${numero1} % ${numero2} = ${resultado}`);

// Usando operador de atribuição %=
resultado %= 2;
console.log(`Resto com %= (resto da divisão por 2): resultado %= 2 -> ${resultado}`);
