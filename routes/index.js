
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const eleicaoModel = require('../models/eleicaoModel');

router.get('/', (req, res) => {
    res.render('chose');
});
// Rota GET para exibir a página de login
router.get('/login', (req, res) => {
    res.render('login');
});


// Rota POST para processar o formulário de login


router.post('/login', usuarioController.login);

router.get('/User', (req, res) => {
  res.render('welcomeUser');
});

router.get('/votoCadastro', async (req, res) => {
  try {
      const eleicoes = await eleicaoModel.getAllEleicoes(); // Método para buscar todas as eleições
      res.render('cadastro_voto', { eleicoes });
  } catch (error) {
      res.status(500).send('Erro ao carregar eleições');
  }
});



router.post('/votoCadastro', usuarioController.addVoto);


router.get('/welcome', usuarioController.welcome);
router.get('/eleitorCadastro', (req, res) => {
    res.render('cadastro_eleitor');
  });
router.post('/eleitorCadastro', usuarioController.addEleitor);

router.get('/eleicaoCadastro', (req, res) => {
    res.render('cadastro_eleicao');
  });
router.post('/eleicaoCadastro', usuarioController.addEleicao);

router.get('/chapaCadastro', (req, res) => {
    res.render('cadastro_chapa');
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

router.get('/cargosCadastro', (req, res) => {
    res.render('cadastrar_cargos');
  });
router.post('/cargosCadastro', usuarioController.addCargo);

router.get('/candidatoChapaCadastro', (req, res) => {
    res.render('cadastro_candidato_chapa');
  });
router.post('/candidatoChapaCadastro', usuarioController.addcandidatosChapa )

router.get('/liberacao_eleitor', (req, res) => {
    res.render('liberacao_eleitor');
  });
router.get('/relatorioInicializacao', (req, res) => {
    res.render('relatorio_inicializacao');
  });
router.get('/relatorio_final', (req, res) => {
    res.render('relatorio_final');
  });


module.exports = router;


