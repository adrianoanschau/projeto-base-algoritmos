// app.js

const financeiro = require('./financeiro');
const moduloClientes = require('./clientes');

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

// 1. Criando e Cadastrando Clientes (Ações de Cadastro)
const novoCliente = moduloClientes.criarCliente("Carlos Silva", "carlos@email.com", "VIP");
moduloClientes.cadastrarCliente(novoCliente);

const outroCliente = moduloClientes.criarCliente("Ana Souza", "ana@email.com", "COMUM");
moduloClientes.cadastrarCliente(outroCliente);

// 2. Processando uma Venda para um cliente específico
const lista = moduloClientes.listarClientes();

let clienteAtual = lista[0]; // Pegando o primeiro cliente (Carlos)

// Regra de negócio: Se for VIP, ganha 20% de desconto, senão 5%
let taxaDesconto = (clienteAtual.categoria === "VIP") ? 20 : 5;

let valorVenda = 300.00;
let valorComDesconto = financeiro.calcularTotalComDesconto(valorVenda, taxaDesconto);

imprimirCupom(`${clienteAtual.nome} (${clienteAtual.categoria})`, valorComDesconto);

clienteAtual = lista[1]; // Pegando o primeiro cliente (Carlos)

// Regra de negócio: Se for VIP, ganha 20% de desconto, senão 5%
taxaDesconto = (clienteAtual.categoria === "VIP") ? 20 : 5;

valorVenda = 210.00;
valorComDesconto = financeiro.calcularTotalComDesconto(valorVenda, taxaDesconto);

imprimirCupom(`${clienteAtual.nome} (${clienteAtual.categoria})`, valorComDesconto);