// database.js
const fs = require('fs');

/**
 * Lê um arquivo JSON e retorna seu conteúdo
 * @param {string} caminho - O caminho do arquivo a ser lido
 * @returns {Array} - O conteúdo do arquivo ou um array vazio se o arquivo não existir
 */
function lerArquivo(caminho) {
    if (!fs.existsSync(caminho)) {
        return [];
    }
    const conteudo = fs.readFileSync(caminho, 'utf-8');
    return JSON.parse(conteudo || "[]");
}

/**
 * Salva dados em um arquivo JSON
 * @param {string} caminho - O caminho do arquivo a ser escrito
 * @param {Array} dados - Os dados a serem salvos
 */
function salvarArquivo(caminho, dados) {
    const stringData = JSON.stringify(dados, null, 2);
    fs.writeFileSync(caminho, stringData);
}

module.exports = { lerArquivo, salvarArquivo };
