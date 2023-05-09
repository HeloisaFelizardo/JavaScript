/* Nesta tarefa simples, você recebe um número e deve torná-lo negativo. Mas talvez o número já seja negativo?

Exemplos
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notas
O número já pode ser negativo, caso em que nenhuma alteração é necessária.
Zero (0) não é verificado para nenhum sinal específico. Zeros negativos não fazem sentido matemático. */

const makeNegative = (num) => (num > 0 ? -num : num);

console.log(makeNegative(42), -42);
