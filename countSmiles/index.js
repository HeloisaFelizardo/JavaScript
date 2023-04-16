/* Dado um array (arr) como argumento, complete a função countSmileysque deve retornar o número total de rostos sorridentes.

Regras para um rosto sorridente:

Cada rosto sorridente deve conter um par de olhos válido. Os olhos podem ser marcados como :ou;
Um rosto sorridente pode ter um nariz, mas não necessariamente. Os caracteres válidos para um nariz são -ou~
Todo rosto sorridente deve ter uma boca sorridente que deve ser marcada com )ouD
Nenhum caractere adicional é permitido, exceto os mencionados.

Exemplos de smileys válidos: :) :D ;-D :~)
Smileys inválidos: ;( :> :} :]

Exemplo
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Observação
No caso de uma matriz vazia, retorne 0. Você não será testado com entrada inválida (a entrada sempre será uma matriz). A ordem dos elementos do rosto (olhos, nariz, boca) será sempre a mesma.

 */

//return the total number of smiling faces in the array
const countSmileys = (arr) =>
	arr.filter((x) => /^[:;][-~]?[)D]/.test(x)).length;

/* function countSmileys(arr) {
  let smileys = 0;
  let validSmileys = [":D", ";D", ":)", ";)", ":-D", ";-D", ":-)", ";-)", ":~D", ";~D", ":~)", ";~)"];
  for (let i = 0; i < arr.length; i++) {
    if (validSmileys.includes(arr[i])) {
      smileys++;
    }
  }
  return smileys;
} */

/* function countSmileys(arr) {
  const validEmojis = [
    ":)",
    ":D",
    ":-)",
    ":~)",
    ":-D",
    ":~D",
    ";)",
    ";D",
    ";-)",
    ";~)",
    ";-D",
    ";~D",
  ];
  return arr.filter((emoji) => validEmojis.includes(emoji)).length;
} */

console.log(countSmileys([]), 0);
console.log(countSmileys([':D', ':~)', ';~D', ':)']), 4);
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
