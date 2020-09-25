const { Router } = require('express');
const UserController = require('./app/controllers/UserController');
const PropostaController = require('./app/controllers/propostaController');

const routes = Router();

routes.post('/users', UserController.index);

routes.get('/users/:id', UserController.show);

routes.post('/users', UserController.store);

routes.put('/users/:id', UserController.update);

routes.delete('/users/:id', UserController.destroy);




routes.post('/proposta',PropostaController.index);

routes.post('/propostafilter',PropostaController.show);

module.exports = routes;