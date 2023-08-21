/* Aqui está uma dica rápida. Da mesma forma que as promessas, também temos um finally { ... }bloco .
Isso pode ser útil dentro das funções, pois pode ajudar a evitar alguma duplicação de código: */

const init = async () => {
	try {
		await wait(1_000);
		return 42;
	} catch (error) {
		console.log('An error has occurred');
		console.error(error);
		return 42;
	}
};
//O código acima pode ser refatorado usando try...catch...finally:

const initRefatored = async () => {
	try {
		await wait(1_000);
	} catch (error) {
		console.log('An error has occurred');
		console.error(error);
	} finally {
		return 42;
	}
};
//O finally { ... }bloco será executado após o bloco try { ... }oucatch { ... } .
