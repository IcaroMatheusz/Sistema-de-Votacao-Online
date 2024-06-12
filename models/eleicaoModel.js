
const pool = require('../db');
async function insertEleicao(data,local,nome) {
    try {
        await pool.query( 'INSERT INTO eleicoes (data,local,nome) VALUES (?, ?, ?)',[data,local,nome]);
    } catch (error) {
        throw error;
    }
}

async function getAllEleicoes() {
    try {
        const [rows] = await pool.query('SELECT id, nome FROM eleicoes');
        return rows;
    } catch (error) {
        throw error;
    }
}
async function getAllCandidatos() {
    try {
        const [rows] = await pool.query('SELECT id, nome FROM candidatos');
        return rows;
    } catch (error) {
        throw error;
    }
}
async function getAllCargos() {
    try {
        const [rows] = await pool.query('SELECT id, cargo FROM cargos');
        return rows;
    } catch (error) {
        throw error;
    }
}
async function getAllChapas() {
    try {
        const [rows] = await pool.query('SELECT id, nome FROM chapas');
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { insertEleicao, getAllEleicoes,getAllCargos,getAllCandidatos,getAllChapas };
