
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const eleicaoModel = require('../models/eleicaoModel');
const eleitorModel = require('../models/eleitorModel')
const votosModel = require('../models/votosModel');

router.get('/', (req, res) => {
    res.render('chose');
});
// Rota GET para exibir a página de login
router.get('/login', (req, res) => {
    res.render('login');
});


// Rota POST para processar o formulário de login

router.get('/totalEleitores', async (req, res) => {
  try {
      const totalEleitores = await eleitorModel.getTotalEleitores();
      res.json({ totalEleitores });
  } catch (error) {
      res.status(500).send('Erro ao obter o total de eleitores');
  }
});

router.get('/totalVotos', async (req, res) => {
  try {
      const totalVotos = await votosModel.getTotalVotos(); // Use a função do modelo de votos
      res.json({ totalVotos });
  } catch (error) {
      res.status(500).send('Erro ao obter o total de votos');
  }
});



router.post('/login', usuarioController.login);

router.get('/User', (req, res) => {
  res.render('welcomeUser');
});

router.get('/votoCadastro', async (req, res) => {
  try {
    
      const eleicoes = await eleicaoModel.getAllEleicoes(); 
      const candidatos = await eleicaoModel.getAllCandidatos(); // Método para buscar todas as eleições
      res.render('cadastro_voto', { eleicoes,candidatos });
  } catch (error) {
      res.status(500).send('Erro ao carregar eleições');
  }
});



router.post('/votoCadastro', usuarioController.addVoto);

// Adicione esta rota abaixo das outras rotas POST existentes
router.post('/relatorioInicializacao', (req, res) => {
  const { eleicao, dataHoraAbertura, totalEleitores } = req.body;
  
  // Aqui você pode processar os dados do formulário conforme necessário
  // No seu caso, parece que a quantidade de votos é sempre zero
  
  const totalVotos = 0; // Quantidade de votos é zero
  
  res.render('relatorio_inicializacao_pagina', { eleicao, dataHoraAbertura, totalEleitores, totalVotos });
});



router.get('/welcome', usuarioController.welcome);
router.get('/eleitorCadastro', (req, res) => {
    res.render('cadastro_eleitor');
  });
router.post('/eleitorCadastro', usuarioController.addEleitor);

router.get('/eleicaoCadastro', (req, res) => {
    res.render('cadastro_eleicao');
  });
router.post('/eleicaoCadastro', usuarioController.addEleicao);

router.get('/chapaCadastro', async (req, res) => {
  try {
      const eleicoes = await eleicaoModel.getAllEleicoes(); // Método para buscar todas as eleições
      res.render('cadastro_chapa', { eleicoes });
  } catch (error) {
      res.status(500).send('Erro ao carregar eleições');
  }
});
router.post('/chapaCadastro', usuarioController.addChapa);
router.get('/candidatoCadastro', (req, res) => {
    res.render('cadastro_candidato');
  });
router.post('/candidatoCadastro', usuarioController.addCandidato);

router.get('/votoCadastro', (req, res) => {
    res.render('cadastro_voto');
  });
router.post('/votoCadastro', usuarioController.addVoto);

router.get('/cargosCadastro', async (req, res) => {
  try {
      const eleicoes = await eleicaoModel.getAllEleicoes(); // Método para buscar todas as eleições
      res.render('cadastrar_cargos', { eleicoes });
  } catch (error) {
      res.status(500).send('Erro ao carregar eleições');
  }
});
router.post('/cargosCadastro', usuarioController.addCargo);

router.get('/candidatoChapaCadastro', async (req, res) => {
  try {
      const eleicoes = await eleicaoModel.getAllEleicoes();
      const chapas = await eleicaoModel.getAllChapas(); // Método para buscar todas as eleições
      const cargos = await eleicaoModel.getAllCargos();
      const candidatos = await eleicaoModel.getAllCandidatos();
      res.render('cadastro_candidato_chapa', { eleicoes,chapas,cargos,candidatos });
  } catch (error) {
      res.status(500).send('Erro ao carregar');
  }
});
router.post('/candidatoChapaCadastro', usuarioController.addcandidatosChapa )

router.get('/liberacao_eleitor', (req, res) => {
    res.render('liberacao_eleitor');
  });
router.get('/relatorioInicializacao', async (req, res) => {
  try {
  const eleicoes = await eleicaoModel.getAllEleicoes();
  res.render('relatorio_inicializacao', {eleicoes });
} catch (error) {
  res.status(500).send('Erro ao carregar');
}
  });
router.get('/relatorio_final', async (req, res) => {
  try {
    const eleicoes = await eleicaoModel.getAllEleicoes();
    res.render('relatorio_final', {eleicoes});
  } catch (error) {
    res.status(500).send('Erro ao carregar');
  }
  });


module.exports = router;


