/* Você pergunta a uma garotinha: "Quantos anos você tem?" Ela sempre diz "x anos", onde x é um número aleatório entre 0 e 9.

Escreva um programa que retorne a idade da menina (0-9) como um número inteiro.

Suponha que a string de entrada de teste seja sempre uma string válida. Por exemplo, a entrada de teste pode ser "1 ano" ou "5 anos". O primeiro caractere na string é sempre um número. */

const getAge = (inputString) => Number(inputString.at(0));

console.log(getAge('4 years old'), 4);
