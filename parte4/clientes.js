// clientes.js

const db = require('./database');
const CAMINHO_CADASTRO = __dirname + '/clientes.json';

/**
 * Função: Cria um objeto de cliente e o retorna
 * @param {String} nome 
 * @param {String} email 
 * @param {String} categoria 
 * @returns {Object} O objeto cliente criado
 */
function criarCliente(nome, email, categoria) {
    return {
        id: Date.now(),
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
    const lista = db.lerArquivo(CAMINHO_CADASTRO);

    lista.push(cliente);
    db.salvarArquivo(CAMINHO_CADASTRO, lista);

    console.log(`✅ Sucesso: Cliente ${cliente.nome} cadastrado.`);
}

/**
 * Função: Retorna a lista completa de clientes
 * @returns {Array} A lista de clientes cadastrados
 */
function listarClientes() {
    return db.lerArquivo(CAMINHO_CADASTRO);
}

/**
 * Função: Busca um cliente pelo ID
 * @param {number} id 
 * @returns {Object|null} O cliente encontrado ou null
 */
function buscarPorId(id) {
    const lista = db.lerArquivo(CAMINHO_CADASTRO);
    return lista.find(cliente => cliente.id === id);
}

module.exports = { criarCliente, cadastrarCliente, listarClientes, buscarPorId };
