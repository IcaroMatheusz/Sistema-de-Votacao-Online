

const express = require('express');
const app = express();
const port = 3000;
var path = require('path');

// Middleware para analisar o corpo das solicitações
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Configurando o Express para usar EJS como mecanismo de modelo
app.set('view engine', 'ejs');


// Middleware para servir arquivos estáticos
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')))

// Middleware para registrar as rotas
const indexRouter = require('./routes/index');
app.use('/', indexRouter);


// Middleware para lidar com erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});


// Iniciando o servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
