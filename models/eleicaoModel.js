
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

module.exports = { insertEleicao, getAllEleicoes };
