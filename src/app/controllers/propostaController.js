const { vw_app } = require('../models');
const { Op } = require("sequelize");
class PropostaController {
  async index(req, res) {

    const {id_parceiro} = req.body

    try {
        const dados = await vw_app.findAll({  
          where:{
            id_parceiro:id_parceiro
          },
          order: [
            ['data_envio','DESC']
          ],
          limit:5
      });

      return res.json(dados).status(200)
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    const {data} = req.body
    try {
      const dados = await vw_app.findAll({ 
        where: data
       });

      return res.json(dados);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const user = await vw_app.create(req.body);

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      await user.update(req.body);

      return res.json({ user });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      await user.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new PropostaController();