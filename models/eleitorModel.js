
const pool = require('../db');

async function insertEleitor(nome,cpf,endereco,senha) {
    try {
        await pool.query( 'INSERT INTO Eleitores (nome, cpf, endereço, senha,liberado) VALUES (?, ?, ?, ?,1)',[nome, cpf, endereco, senha]);
        
    } catch (error) {
        throw error;
    }
}

async function getTotalEleitores() {
    try {
        const [rows, fields] = await pool.query('SELECT COUNT(*) AS totalEleitores FROM Eleitores');
        return rows[0].totalEleitores;
    } catch (error) {
        throw new Error('Erro ao obter o total de eleitores do banco de dados');
    }
}




module.exports = {insertEleitor, getTotalEleitores};


