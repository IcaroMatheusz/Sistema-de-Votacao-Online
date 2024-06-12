

const pool = require('../db');


async function getUserByUsernameAndPassword(username, password) {
  const [rows] = await pool.execute('SELECT * FROM eleitores WHERE cpf = ? AND senha = ?', [username, password]);
  return rows[0];
}
async function insertCargo(cargo,eleicao_id) {
  try {
      await pool.query( 'INSERT INTO cargos (cargo,eleicao_id) VALUES (?, ?)',[cargo,eleicao_id]);
  } catch (error) {
      throw error;
  }
}
async function insertcandidatosChapa(chapa_id,cargo_id,eleicao_id) {
  try {
      await pool.query( 'INSERT INTO candidatoschapas (chapa_id,cargo_id,eleicao_id) VALUES (?, ?,?)',[chapa_id,cargo_id,eleicao_id]);
  } catch (error) {
      throw error;
  }
}
async function insertVoto(candidato_id,eleicao_id) {
  try {
      await pool.query( 'INSERT INTO votos (numeros_voto,candidato_id,eleicao_id) VALUES (1,?,?)',[candidato_id,eleicao_id]);
  } catch (error) {
      throw error;
  }
}
async function insertChapa(nome,eleicao_id) {
  try {
      await pool.query( 'INSERT INTO chapas (nome,eleicao_id) VALUES (?, ?)',[nome,eleicao_id]);
  } catch (error) {
      throw error;
  }
}
async function insertCandidato(nome,cpf,endereco,senha_votacao,email) {
  try {
      await pool.query( 'INSERT INTO candidatos (nome,cpf,endereço,senha_votação,email) VALUES (?,?,?,?,?)',[nome,cpf,endereco,senha_votacao,email]);
  } catch (error) {
      throw error;
  }
}
module.exports = { getUserByUsernameAndPassword,insertCargo,insertcandidatosChapa,insertVoto,insertChapa,insertCandidato };


