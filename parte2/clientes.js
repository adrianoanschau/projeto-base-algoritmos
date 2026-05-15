// clientes.js

// Nossa "Base de Dados" temporária
const listaClientes = [];

/**
 * Função: Cria um objeto de cliente e o retorna
 * @param {String} nome 
 * @param {String} email 
 * @param {String} categoria 
 * @returns {Object} O objeto cliente criado
 */
function criarCliente(nome, email, categoria) {
    return {
        nome: nome,
        email: email,
        categoria: categoria // Ex: 'VIP' ou 'COMUM'
    };
}

/**
 * Procedimento: Cadastra um novo cliente na lista
 * @param {Object} cliente 
 */
function cadastrarCliente(cliente) {
    listaClientes.push(cliente);
    console.log(`✅ Sucesso: Cliente ${cliente.nome} cadastrado.`);
}

/**
 * Função: Retorna a lista completa de clientes
 * @returns {Array} A lista de clientes cadastrados
 */
function listarClientes() {
    return listaClientes;
}

module.exports = { criarCliente, cadastrarCliente, listarClientes };
