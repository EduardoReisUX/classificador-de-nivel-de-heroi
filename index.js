"use strict"

/**
 * 
 * @param {number} nivel_heroi nível do herói
 * @returns {string}
 */
function calcularNivel(nivel_heroi) {
    if (typeof nivel_heroi !== "number") {
        throw new Error("nivel_heroi não é um número")
    }

    if (nivel_heroi < 1000) {
        return "Ferro"
    }
    if (nivel_heroi < 2000) {
        return "Ferro"
    }
    if (nivel_heroi < 5000) {
        return "Ferro"
    }
    if (nivel_heroi < 7000) {
        return "Ferro"
    }
    if (nivel_heroi < 8000) {
        return "Ferro"
    }
    if (nivel_heroi < 9000) {
        return "Ferro"
    }
    if (nivel_heroi < 10000) {
        return "Ferro"
    }
    
    return "Radiante"
}

/**
 * 
 * @param nome {string} Nome do herói
 * @param nivel {string} Nível do herói
 * @returns {string}
 */
function render(nome, nivel) {
    return `O Herói de nome ${nome} está no nível ${nivel}`
}

const nome = "fulano"
const nivel = 3456

const elo = calcularNivel(nivel)


console.log(render(nome, elo))
