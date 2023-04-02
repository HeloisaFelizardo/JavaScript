/* Seus colegas pediram que você copiasse alguns papéis para eles. Você sabe que há 'n' colegas e a papelada tem 'm' páginas.

Sua tarefa é calcular quantas páginas em branco você precisa. Se n < 0ou m < 0retornar 0.

Exemplo:
n= 5, m=5: 25
n=-5, m=5:  0
Aguardando traduções e feedback! Obrigado! */
const paperwork = (n, m) => (n < 0 || m < 0 ? 0 : n * m);

console.log(paperwork(5, 5), 25, 'Failed at paperwork(5, 5)');
console.log(paperwork(5, -5), 0, 'Failed at paperwork(5, -5)');
console.log(paperwork(-5, -5), 0, 'Failed at paperwork(-5, -5)');
console.log(paperwork(-5, 5), 0, 'Failed at paperwork(-5, 5)');
console.log(paperwork(5, 0), 0, 'Failed at paperwork(5, 0)');
