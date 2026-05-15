// app.js
const moduloClientes = require('./clientes');
const financeiro = require('./financeiro');

// 1. Cadastrando novos clientes
const cliente1 = moduloClientes.criarCliente("Adriano", "adriano@senac.com", "VIP");
const cliente2 = moduloClientes.criarCliente("Lucas", "lucas@email.com", "COMUM");

moduloClientes.cadastrarCliente(cliente1);
moduloClientes.cadastrarCliente(cliente2);

// 2. Listando para ver os IDs gerados
const todos = moduloClientes.listarClientes();
console.log("\n--- BANCO DE DADOS ATUALIZADO ---");
console.table(todos);

// 3. Simulando uma busca por ID (usando o ID do primeiro cliente da lista)
if (todos.length > 0) {
    const idParaBusca = todos[0].id;
    const clienteEncontrado = moduloClientes.buscarPorId(idParaBusca);
    
    console.log(`\n🔍 Buscando cliente de ID ${idParaBusca}...`);
    console.log(`Cliente encontrado: ${clienteEncontrado.nome}`);
}