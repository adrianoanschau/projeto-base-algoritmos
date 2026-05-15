// menu.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * @param {string} titulo - O nome do sistema
 * @param {Array} opcoes - Array de objetos { texto: string, acao: function }
 */
function criarMenu(titulo, opcoes) {
    console.log(`\n==============================`);
    console.log(`    ${titulo.toUpperCase()}    `);
    console.log(`==============================`);
    
    opcoes.forEach((opt, index) => {
        console.log(`${index + 1}. ${opt.texto}`);
    });
    console.log(`0. Sair`);
    console.log(`==============================`);

    rl.question("Escolha uma opção: ", (escolha) => {
        if (escolha === '0') {
            console.log("Encerrando sistema...");
            rl.close();
            return;
        }

        const indice = parseInt(escolha) - 1;
        const opcaoSelecionada = opcoes[indice];

        if (opcaoSelecionada && typeof opcaoSelecionada.acao === 'function') {
            // Executa a ação definida lá no app.js
            // Passamos o rl para que a função de ação possa fazer perguntas se precisar
            opcaoSelecionada.acao(rl, () => criarMenu(titulo, opcoes));
        } else {
            console.log("⚠️ Opção inválida!");
            criarMenu(titulo, opcoes);
        }
    });
}

module.exports = { criarMenu };
