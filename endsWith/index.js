/* Complete a solução para que retorne verdadeiro se o primeiro argumento (string) passado terminar com o 2º argumento (também uma string). */

const solution = (str, ending) => str.endsWith(ending);

console.log(solution('abcde', 'cde'), true);
console.log(solution('abcde', 'abc'), false);
