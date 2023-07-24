/* Selected country 
Fornecemos a você um <select>elemento com alguns países. Complete a getSelectedCountryfunção de forma que retorne o país selecionado pelo usuário. */

export const getSelectedCountry = () => {
	return document.querySelector('#countries-dropdown').value;
};
