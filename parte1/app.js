// app.js

const { calcularTotalComDesconto } = require('./financeiro');

/**
 * Procedimento: Apenas executa a tarefa de imprimir, sem retorno
 * @param {String} cliente 
 * @param {number} valorFinal 
 */
function imprimirCupom(cliente, valorFinal) {
    console.log("/---------------------------------------------\\");
    console.log("|               LOJA MODA SENAC               |");
    console.log("|---------------------------------------------|");
    console.log(`| CLIENTE:         ${cliente.toUpperCase().padEnd(26, ' ')} |`);
    console.log(`| TOTAL A PAGAR:   R$ ${valorFinal.toFixed(2).padStart(12, ' ').padEnd(23, ' ')} |`);
    console.log("\\---------------------------------------------/");
}

// Execução do exemplo
let resultado = calcularTotalComDesconto(200, 10); // 10% de desconto em R$ 200
imprimirCupom("Adriano Anschau", resultado);
