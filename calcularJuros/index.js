/*  Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */

const calcularJuros = (precoEtiqueta = 0, formaDePagamento = 0) => {
	return formaDePagamento === 1
		? (precoEtiqueta - precoEtiqueta * 0.1).toFixed(2)
		: formaDePagamento === 2
		? (precoEtiqueta - precoEtiqueta * 0.15).toFixed(2)
		: formaDePagamento === 3
		? precoEtiqueta.toFixed(2)
		: (precoEtiqueta + precoEtiqueta * 0.1).toFixed(2);
};

console.log(calcularJuros(100, 1), 'debito');
console.log(calcularJuros(100, 2), 'A vista no dinheiro ou pix');
console.log(calcularJuros(100, 3), '2x sem Juros');
console.log(calcularJuros(100, 4), 'Acima de 2x');
