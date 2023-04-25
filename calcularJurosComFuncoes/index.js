/*  Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */

const aplicarDesconto = (valor, desconto) => {
	return valor - valor * (desconto / 100);
};

const aplicarJuros = (valor, juros) => {
	return valor + valor * (juros / 100);
};

(function () {
	const precoEtiqueta = 100;
	const formaDePagamento = 4;

	formaDePagamento === 1
		? console.log(
				aplicarDesconto(precoEtiqueta, 10).toFixed(2) + ' no débito'
		  )
		: formaDePagamento === 2
		? console.log(
				aplicarDesconto(precoEtiqueta, 15).toFixed(2) +
					' à vista no dinheiro ou pix'
		  )
		: formaDePagamento === 3
		? console.log(precoEtiqueta.toFixed(2) + ' 2x sem Juros')
		: console.log(
				aplicarJuros(precoEtiqueta, 10).toFixed(2) + ' Acima de 2x'
		  );
})();

/* console.log(valorPago(100, 1), 'debito');
console.log(valorPago(100, 2), 'A vista no dinheiro ou pix');
console.log(valorPago(100, 3), '2x sem Juros');
console.log(valorPago(100, 4), 'Acima de 2x'); */
