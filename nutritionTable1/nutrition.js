/**
 * @param {string} label
 * @param {string} value
 */
export function renderTableRow(label, value) {
	return `<tr>
    <td>${label}</td>
    <td> ${value} </td>
    </tr>`;
	console.log(label, value);
}
