/* Os caixas eletrônicos permitem códigos PIN de 4 ou 6 dígitos e os códigos PIN não podem conter nada além de exatamente 4 dígitos ou exatamente 6 dígitos.

Se a função receber uma sequência de PIN válida, retorne true, senão retorne false.

Exemplos ( entrada --> saída)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false */

function validatePIN(pin) {
	return /^(\d{4}|\d{6})$/.test(pin);
}

/* function validatePIN (pin) {
  var reg = new RegExp('^([0-9]{4}|[0-9]{6})$');
  return reg.test(pin);
} */

console.log(validatePIN('1'), false, "Wrong output for '1'");
console.log(validatePIN('12'), false, "Wrong output for '12'");
console.log(validatePIN('123'), false, "Wrong output for '123'");
console.log(validatePIN('1234'), true, "Wrong output for '1234'");
console.log(validatePIN('12345'), false, "Wrong output for '12345'");
console.log(validatePIN('1234567'), false, "Wrong output for '1234567'");
console.log(validatePIN('-1234'), false, "Wrong output for '-1234'");
console.log(validatePIN('1.234'), false, "Wrong output for '1.234'");
console.log(validatePIN('-1.234'), false, "Wrong output for '-1.234'");
console.log(validatePIN('00000000'), false, "Wrong output for '00000000'");
