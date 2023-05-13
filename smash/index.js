/* Escreva uma função que pegue um array de palavras e as junte em uma frase e retorne a frase. Você pode ignorar qualquer necessidade de limpar palavras ou adicionar pontuação, mas deve adicionar espaços entre cada palavra. Tenha cuidado, não deve haver um espaço no início ou no final da frase!

Exemplo
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great' */

const smash = (words) => words.join(' ');

console.log(smash(['hello', 'world']));
console.log(smash(['hello', 'amazing', 'world']));
console.log(smash(['this', 'is', 'a', 'really', 'long', 'sentence']));
