

const { insertEleicao } = require('../models/eleicaoModel');
const { insertEleitor } = require('../models/eleitorModel');
const usuarioModel = require('../models/usuarioModel');


async function login(req, res) {
    const { username, password } = req.body;


    try {
        const user = await usuarioModel.getUserByUsernameAndPassword(username, password);
        
        if (user) {
            // Usuário autenticado, redirecionar para a página de boas-vindas
            res.redirect('/User');
        } else {
            // Credenciais inválidas, redirecionar de volta para a página de login
            res.redirect('/login');
        }
    } catch (error) {
        console.error('Erro durante a autenticação:', error);
        res.status(500).send('Erro durante a autenticação');
    }
}


async function welcome(req, res) {
    const { username, tipo } = req.query;


    // Renderizar a página de boas-vindas com os dados do usuário
    res.render('welcome', { usuario: username, tipo: tipo });
}

async function addEleitor(req, res) {
    const { nome, cpf,endereco,senha} = req.body;
    try {
        const id = await insertEleitor(nome, cpf,endereco,senha);
      res.redirect('/welcome')
    } catch (error) {
        console.error('Erro ao inserir Eleitor:', error);
      res.render('error', { message: 'Erro ao inserir Eleitor', returnLink: '/welcome' });
    }
}
async function addEleicao(req, res) {
    const {data,local,nome} = req.body;
    try {
        const id = await insertEleicao(data,local,nome);
      res.redirect('/welcome')
    } catch (error) {
        console.error('Erro ao inserir eleicao:', error);
      res.render('error', { message: 'Erro ao inserir eleicao', returnLink: '/welcome' });
    }
}
async function addCargo(req, res) {
    const {cargo,eleicao_id} = req.body;
    try {
        const id = await usuarioModel.insertCargo(cargo,eleicao_id);
      res.redirect('/welcome')
    } catch (error) {
        console.error('Erro ao inserir Cargo:', error);
      res.render('error', { message: 'Erro ao inserir Cargo', returnLink: '/welcome' });
    }
}
async function addcandidatosChapa(req, res) {
    const {chapa_id,cargo_id,eleicao_id} = req.body;
    try {
        const id = await usuarioModel.insertcandidatosChapa(chapa_id,cargo_id,eleicao_id);
      res.redirect('/welcome')
    } catch (error) {
        console.error('Erro ao inserir candidatosChapa:', error);
      res.render('error', { message: 'Erro ao inserir candidatosChapa', returnLink: '/welcome' });
    }
}
async function addVoto(req, res) {
    const {cadidato_id,eleicao_id} = req.body;
    try {
        const id = await usuarioModel.insertVoto(cadidato_id,eleicao_id);
      res.redirect('/User')
    } catch (error) {
        console.error('Erro ao inserir Voto:', error);
      res.render('error', { message: 'Erro ao inserir Voto', returnLink: '/welcome' });
    }
}
async function addChapa(req, res) {
    const {nome,eleicao_id} = req.body;
    try {
        const id = await usuarioModel.insertChapa(nome,eleicao_id);
      res.redirect('/welcome')
    } catch (error) {
        console.error('Erro ao inserir Chapa:', error);
      res.render('error', { message: 'Erro ao inserir Chapa', returnLink: '/welcome' });
    }
}
async function addCandidato(req, res) {
    const {nome,cpf,endereco,senha_votacao,email} = req.body;
    try {
        const id = await usuarioModel.insertCandidato(nome,cpf,endereco,senha_votacao,email);
      res.redirect('/welcome')
    } catch (error) {
        console.error('Erro ao inserir Candidato:', error);
      res.render('error', { message: 'Erro ao inserir Candidato', returnLink: '/welcome' });
    }
}
module.exports = { login, welcome,addEleitor,addEleicao,addCargo,addcandidatosChapa,addVoto,addChapa,addCandidato };


