//Faça um programa para calcular o valor de uma viagem.

//Você terá 3 variáveis. Sendo elas:
 //1 - Preço do combustível;
 //2 - Gasto médio de combustível do carro por KM;
 //3 - Distância em KM da viagem;

//Imprima no console o valor que será gasto para realizar esta viagem!

const precoCombustivel = 6.12;
const kmPorLitros = 15;
const distanciaEmKm = 175;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));