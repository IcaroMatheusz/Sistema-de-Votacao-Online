
const pool = require('../db');
async function insertEleitor(nome,cpf,endereco,senha) {
    try {
        await pool.query( 'INSERT INTO Eleitores (nome, cpf, endereço, senha,liberado) VALUES (?, ?, ?, ?,1)',[nome, cpf, endereco, senha]);
       
    } catch (error) {
        throw error;
    }
}
module.exports = {insertEleitor};


