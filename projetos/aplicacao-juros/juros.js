/*
Juros
Projeto passo a passo: Construindo uma aplicação de juros
*/

import entradaDados from 'readline-sync';

console.log("\nAplicação de Juros")

let valor = entradaDados.question("\nInforme o valor devido: R$ ");

let taxaJuros = '';

if(valor > 0){
    let dias = entradaDados.question("Informe quantos dias se passaram desde o vencimento: ");
    if(dias > 0){
        if(dias > 15){
           taxaJuros = 10;            
        }
        else{
           taxaJuros = 5;
        }
        let valorJuros = valor * (taxaJuros / 100);

        let valorTotal = Number(valor) + Number(valorJuros);

        console.log("\nValor original da dívida: R$ ", valor);
        console.log("Dias atrasados: ", dias);
        console.log("Taxa de juros: ", taxaJuros, "%");
        console.log("Valor total com juros: R$ ", valorTotal)
    }
    else{
        console.log("Você está em dia!");
    }
}
else{
    console.log("O valor da dívida deve ser maior que 0.");
}





