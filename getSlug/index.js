/**
 * Na ciência da computação, um slug é uma string usada para identificar um determinado item. Muitas vezes, esse slug é usado na URL para Search Engine Optimization e melhor experiência do usuário. Digamos que você tenha um produto chamado: "Easy assembly dining table". Não podemos usar este nome na barra de URL porque contém espaços (não ficará bonito, por exemplo https://example.com/item/Easy assembly dining table). É por isso que usamos um slug que se parece com isso:

easy-assembly-dining-tableentão a URL se torna: https://example.com/item/easy-assembly-dining-table.

Complete a função getSlug()de forma que ela retorne o slug com base no texto que receber, seguindo as regras abaixo:

O slug não deve ter mais de 15 caracteres. Quando houver mais de 15 caracteres, ignore tudo após o 15º caractere.
O slug deve estar sempre em letras minúsculas.
Os caracteres de espaço devem ser substituídos por hífens ( -).
 * @param {string} name
 */

const getSlug = (name) =>
	name.substring(0, 15).toLowerCase().replaceAll(' ', '-');

// Sample usage - do not modify
console.log(getSlug('IKEA table')); // "ikea-table"
console.log(getSlug('200cm Bed')); // "200cm-bed"
console.log(getSlug('Bedside lavalamp')); // "bedside-lavalam"
console.log(getSlug('A B C noodles')); // "a-b-c-noodles"
