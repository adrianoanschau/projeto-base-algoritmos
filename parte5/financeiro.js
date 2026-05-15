// financeiro.js

/**
 * Função: Calcula o total com desconto aplicado.
 * @param {number} valorBruto - O valor original antes do desconto.
 * @param {number} percentualDesconto - O percentual de desconto a ser aplicado.
 * @returns {number} O valor total após a aplicação do desconto.
 */
function calcularTotalComDesconto(valorBruto, percentualDesconto) {
    let desconto = valorBruto * (percentualDesconto / 100);
    let valorFinal = valorBruto - desconto;
    return valorFinal; // Essencial para ser uma função
}

// Exportamos para que outros arquivos possam usar
module.exports = { calcularTotalComDesconto };
