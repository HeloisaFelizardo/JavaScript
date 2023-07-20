/* Moedas preferenciais 
Conclua a getShortTextParagraphsfunção de forma que ela retorne uma matriz de todos os parágrafos que tenham um texto com menos de 10 caracteres. */
const getShortTextParagraphs = () => {
	const paragraph = document.querySelectorAll('p');
	return [...paragraph].filter((text) => text.textContent.length < 10);
};

// Sample usage - do not modify
console.log(getShortTextParagraphs());
