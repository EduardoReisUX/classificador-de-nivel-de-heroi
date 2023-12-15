'use strict';

const niveis_disponiveis = {
  1000: 'Ferro',
  2000: "Bronze",
  5000: "Prata",
  7000: "Ouro",
  8000: "Platina",
  9000: "Ascendente",
  10000: "Imortal"
}

/**
 *
 * @param {number} nivel_heroi nível do herói
 * @returns {string}
 */
function calcularNivel(nivel_heroi) {
  if (typeof nivel_heroi !== 'number') {
    return 'nivel_heroi não é um número'
  }

  for (const nivel in niveis_disponiveis) {
    if (nivel_heroi < nivel)
      return niveis_disponiveis[nivel]
  }

  return "Radiante"
}

/**
 *
 * @param nome {string} Nome do herói
 * @param nivel {string} Nível do herói
 * @returns {string}
 */
function exibir(nome, nivel) {
  return `O Herói de nome ${nome} está no nível ${nivel}`;
}

let nome = 'fulano';
let nivel = 10456;
let elo = calcularNivel(nivel);
console.log(exibir(nome, elo));
