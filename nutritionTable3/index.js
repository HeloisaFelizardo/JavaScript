import { renderTableRow } from './nutrition.js';

const carbs = { title: 'Carbs', value: 17 };
const protein = { title: 'Protein', value: 19 };
const fat = { title: 'Fat', value: 5 };

let html = '';

html += renderTableRow(carbs);
html += renderTableRow(protein);
html += renderTableRow(fat);

const tbody = document.querySelector('#nutrition-table tbody');
tbody.insertAdjacentHTML('beforeend', html);
