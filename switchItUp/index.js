/* Quando receber um número entre 0-9, retorne-o por extenso.

Entrada :: 1

Saída :: "Um".

Se o seu idioma for compatível, tente usar uma instrução switch .

 */

function switchItUp(number) {
	//Write your own Code!
	switch (number) {
		case 0:
			return 'Zero';
		case 1:
			return 'One';
		case 2:
			return 'Two';
		case 3:
			return 'Three';
		case 4:
			return 'Four';
		case 5:
			return 'Five';
		case 6:
			return 'Six';
		case 7:
			return 'Seven';
		case 8:
			return 'Eight';
		case 9:
			return 'Nine';
	}
}

/* Alternativas
    
   function switchItUp(number){
        //Write your own Code!
        var a = number;
        var b = {
        0: "Zero",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine"
        };
        return b[a];
}

switchItUp = (n) =>
	[
		'Zero',
		'One',
		'Two',
		'Three',
		'Four',
		'Five',
		'Six',
		'Seven',
		'Eight',
		'Nine',
	][n]; 
    
*/

console.log(switchItUp(1), 'One');
console.log(switchItUp(3), 'Three');
console.log(switchItUp(5), 'Five');
