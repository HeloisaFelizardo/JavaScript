/**
 * Este é o mesmo desafio de antes. No entanto, tente resolvê-lo usando o truque que você aprendeu na lição anterior (mas você não é obrigado).

Complete a função getDropdownde forma que ela retorne o seguinte HTML que preencherá o <select></select>elemento existente. O HTML retornado deve ter a seguinte aparência:

Deve começar com:<option value="">Please select</option>
Então, para cada país, você deve ter o <option>para isso. Por exemplo, para o país "Holanda" , você deve ter o seguinte<option value="netherlands">Netherlands</option>
Observe como o valor contém o nome do país em letras minúsculas. Os demais países também deverão comparecer seguindo os mesmos critérios.
/**
 * @param {string[]} countries
 */
export const getDropdown = (countries) => {
	console.log(countries);
	return `<option value="">Please select</option>
    ${countries
		.map(
			(country) =>
				`<option value="${country.toLowerCase()}">${country}</option>`
		)
		.join('')}`;
};
