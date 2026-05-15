// app.js
const moduloClientes = require('./clientes');

// Ação de cadastro
const novoCliente = moduloClientes.criarCliente("Lucas", "lucas@email.com", "COMUM");
moduloClientes.cadastrarCliente(novoCliente);

// Ação de listagem
const todos = moduloClientes.listarClientes();
console.log("\n--- LISTA ATUALIZADA ---");
console.table(todos); // Dica: console.table gera uma tabela linda no terminal!