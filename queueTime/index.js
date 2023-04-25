/* Há fila para o autoatendimento no supermercado. Sua tarefa é escrever uma função para calcular o tempo total necessário para que todos os clientes façam check-out!

entrada
clientes: uma matriz de inteiros positivos representando a fila. Cada número inteiro representa um cliente e seu valor é a quantidade de tempo que eles precisam para fazer o check-out.
n: um inteiro positivo, o número de caixa registradoras.
saída
A função deve retornar um número inteiro, o tempo total necessário.

Importante
Por favor, veja os exemplos e esclarecimentos abaixo, para garantir que você entendeu a tarefa corretamente :)

Exemplos
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Esclarecimentos
Há apenas UMA fila atendendo a muitos caixas, e
A ordem da fila NUNCA muda, e
A primeira pessoa na fila (ou seja, o primeiro elemento na matriz/lista) procede a uma caixa assim que fica livre.
NB Você deve assumir que todas as entradas de teste serão válidas, conforme especificado acima.

PS A situação neste kata pode ser comparada à ideia mais relacionada à ciência da computação de um pool de threads, com relação à execução de vários processos ao mesmo tempo: https://en.wikipedia.org/wiki/Thread_pool */

function queueTime(customers, n) {
	//TODO
}

console.log(queueTime([], 1), 0);
console.log(queueTime([1, 2, 3, 4], 1), 10);
console.log(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
console.log(queueTime([1, 2, 3, 4, 5], 100), 5);
console.log(queueTime([5, 3, 4], 1), 12);
console.log(queueTime([10, 2, 3, 3], 2), 10);
console.log(queueTime([2, 3, 10, 2], 2), 12);
