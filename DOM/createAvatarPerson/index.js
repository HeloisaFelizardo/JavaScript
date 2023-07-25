/* Renderizar lista de compras 
Complete a createAvatarfunção de forma que ela retorne um imgelemento baseado em urle o que classNameela recebe com */

/**
 * @param {string} url
 * @param {string} className
 */
const createAvatar = (url, className) => {
	const img = document.createElement('img');
	img.setAttribute('src', url);
	img.classList.add(className);
	return img;
};

// Sample usage - do not modify
console.log(createAvatar('/avatar/person.png', 'circle')); // <img src="/avatar/person.png" class="circle"> (as an element not a string)
console.log(createAvatar('/avatar/user.png', 'rounded')); // <img src="/avatar/user.png" class="rounded"> (as an element not a string)
