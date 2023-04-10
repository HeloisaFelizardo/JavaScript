/* Nota para tradutores de Kata: Por favor, considere cuidadosamente a adequação do idioma escolhido com relação à implementação da ideia proposta por este Kata antes de criar e enviar uma tradução. Traduções de idiomas "inapropriados" (como o Python , que já provou ser um candidato ruim para este Kata) serão rejeitadas pelo autor deste Kata, mesmo que seja bem escrito (ou seja, contenha edições adequadas na descrição do Kata, muitas correções e testes aleatórios, etc.).

Cordas, cordas, cordas (Fácil)
Fundo
Oh não, houve alguns problemas com seu computador e agora você não pode converter nenhum tipo de dado para strings!

Tarefa
O toString()método foi desabilitado para booleans, numbers, arrays e objects. Seu objetivo é recuperar toString()os seguintes tipos de dados.

I. Booleanos
Para booleanos:

truedeve ser convertido para"true"
falsedeve ser convertido para"false"
II. Números
Para números, a conversão deve ser a seguinte:

// e.g.
(3).toString() === "3"
(3.14).toString() === "3.14"
(-78).toString() === "-78"
Math.PI.toString() === "3.141592653589793"
III. Matrizes
Para os propósitos deste Kata, você só deverá converter matrizes com números apenas em strings. No entanto, além de corrigi-lo, também gostaríamos de melhorá -lo. Gostaríamos de manter os colchetes ( []) ao redor do array "stringified" como seria visto no código Javascript. Por exemplo:

// e.g.
[].toString() === "[]"
[1].toString() === "[1]"
[2,4,8,17].toString() === "[2, 4, 8, 17]"
[Math.PI, Math.E].toString() === "[3.141592653589793,2.718281828459045]"
Como você deve ter notado nos exemplos acima, quando o array tem mais de um elemento, algumas das strings têm espaços e vírgulas separando cada item, mas algumas strings não. Para os propósitos deste Kata, se há espaços em branco ou não, não importa para arrays stringificados - antes de conduzir os testes, sua entrada é despojada de todos os espaços em branco.

Nota Final - IMPORTANTE
Seus toString()métodos recuperados devem ser apenas returna versão stringificada da entrada - NÃO devem alterar o valor original. Casos de teste foram criados para confirmar isso. */

Boolean.prototype.toString =
	Number.prototype.toString =
	Array.prototype.toString =
		function () {
			return JSON.stringify(this);
		};

console.log((123).toString(), '123');
console.log(Math.PI.toString(), '3.141592653589793');
console.log(Math.E.toString(), '2.718281828459045');
console.log(true.toString(), 'true');
console.log(false.toString(), 'false');
console.log([1, 2, 3, 4, 5].toString().replace(/\s+/g, ''), '[1,2,3,4,5]');
