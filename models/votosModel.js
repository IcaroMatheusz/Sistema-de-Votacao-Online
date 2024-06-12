const pool = require('../db');

async function getTotalVotos() {
    try {
        const [rows, fields] = await pool.query('SELECT COUNT(numeros_voto) AS totalVotos FROM votos');
        return rows[0].totalVotos;
    } catch (error) {
        throw new Error('Erro ao obter o total de votos do banco de dados');
    }
}

module.exports = {getTotalVotos};