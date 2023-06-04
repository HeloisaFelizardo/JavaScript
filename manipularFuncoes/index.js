//First Class Functions
//Higher Order Functions

function falarMeuNome() {
	console.log('Meu nome é Heloisa');
}

function falarMeuNomeCompleto(falarMeuNome) {
	falarMeuNome();
	console.log(`Felizardo Campos`);
	return falarMeuNome;
}

falarMeuNomeCompleto(falarMeuNome)();

//Function declaration
function nomeDaFuncao() {
	console.log('nomeDaFuncao');
}

//Function expression
const nomeDeOutraFuncao = function () {
	console.log('nomdeDeOutraFunção');
};

nomeDaFuncao();
nomeDeOutraFuncao();

//Declaração Explicita - Imprime o contexto do objeto
function funcao1() {
	console.log(this);
}

//Declaração com arrow function - Não funciona para imprimir o contexto do objeto
const funcao2 = () => {
	console.log(this);
};

const renan = {
	nome: 'Renan',
	funcao1,
	funcao2,
};

renan.funcao1();
renan.funcao2();

//Closures - Quando declaramos uma função ela se lembre do contexto da onde ela foi declarada
function soma(x) {
	return (y) => {
		return x + y;
	};
}

console.log(soma(10)(20));

const somaParcial = soma(10);

console.log(somaParcial(20));
console.log(somaParcial(30));
console.log(somaParcial(40));

//Invocação Direta, Call, Apply e Operador New
const pessoa = {
	nome: 'Renan',
	idade: 30,
};

//Essa função não está no contexto do objeto
function gritar(prefixo) {
	console.log(prefixo, this.nome);
}

//Invocação direto
gritar('Olaaaaaa');

//método Apply - Recebe o contexto e os argumentos
gritar.apply(pessoa, ['Olaaaaa']);

//médtodo Call - Recebe o contexto e os argumentos
gritar.call(pessoa, 'Olaaaaa');

//Recebendo uma função como parametro
function adicao(x, y) {
	return x + y;
}

function multiplicao(x, y) {
	return x * y;
}

function calcular(x, operacao, y) {
	console.log(operacao(x, y));
}

calcular(10, adicao, 20);
calcular(10, multiplicao, 20);
