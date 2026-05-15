// app.js
const menu = require('./menu');
const moduloClientes = require('./clientes');

const minhasOpcoes = [
    {
        texto: "Cadastrar Cliente Completo",
        acao: (rl, retornar) => {
            // Pergunta 1: Nome
            rl.question("Digite o Nome: ", (nome) => {
                // Pergunta 2: Email (dentro do callback da primeira)
                rl.question("Digite o Email: ", (email) => {
                    // Pergunta 3: Categoria
                    rl.question("Categoria (VIP/COMUM): ", (cat) => {
                        
                        // Agora sim, com todos os dados, chamamos o módulo
                        const novoCliente = moduloClientes.criarCliente(nome, email, cat);
                        moduloClientes.cadastrarCliente(novoCliente);

                        console.log("\n✅ Processo finalizado!");
                        retornar(); // Volta para o menu principal
                    });
                });
            });
        }
    },
    {
        texto: "Listar Clientes",
        acao: (rl, retornar) => {
            const lista = moduloClientes.listarClientes();
            console.log("\n--- CLIENTES CADASTRADOS ---");
            console.table(lista);
            retornar();
        }
    }
];

menu.criarMenu("Sistema Comercial Senac", minhasOpcoes);
