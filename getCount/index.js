/* Você recebe um inteiro N. Seu trabalho é descobrir quantas substrings dentro de N se dividem igualmente com N.

Confuso? Vou dividi-lo para você.

Digamos que você receba o número inteiro '877692'. 

8 does not evenly divide with 877692. 877692/8 = 109711 with 4 remainder.

7 does not evenly divide with 877692. 877692/7 = 125384 with 4 remainder.

7 does not evenly divide with 877692. 877692/7 = 125384 with 4 remainder.

6 evenly divides with 877692. 877692/6 = 146282 with 0 remainder.

9 does not evenly divide with 877692. 877692/9 = 97521 with 3 remainder.

2 evenly divides with 877692. 877692/2 = 438846 with 0 remainder.
Não vamos parar por aí. Precisamos verificar TODAS as substrings dentro de 877692.

87 does not evenly divide with 877692. 877692/87 = 10088 with 36 remainder.

77 does not evenly divide with 877692. 877692/77 = 11398 with 46 remainder.

76 does not evenly divide with 877692. 877692/76 = 11548 with 44 remainder.

69 does not evenly divide with 877692. 877692/69 = 12720 with 12 remainder.


etc.
#Regras:
-Se um número inteiro for 0, ele NÃO se divide uniformemente em nada.
-Mesmo que N possa dividir uniformemente consigo mesmo, não o contamos no número final. Por exemplo:

N = 23, the answer will be 0.  
-Se houver várias instâncias de um número, todas serão contadas. Por exemplo:

N = 11, the answer will be 2 
#Input: Um inteiro não negativo.

#Output: O número de vezes que você encontrou um número inteiro que era divisível por N
*/

function getCount(n) {
	//n is an integer.
	//Code goes here!

	return n
		.toString()
		.split('')
		.reduce((a, b) => {
			return a % Number(b) === 0;
		}, Number(n));
}

console.log(getCount(123), 2);
console.log(getCount(1230), 5);
console.log(getCount(1), 0);
console.log(getCount(11), 2);
console.log(getCount(1111111111), 25);
console.log(getCount(877692));
