
/*
index, show, update, destroy, store

index - listagem de sessoes
show - listar uma unica sessao
update - atualizar sessao
destroy - deletar sessao
store - criar sessao
*/

import User from '../models/User';

class SessionController {

  async store(req, res) {
    try {
      const { email } = req.body;
      let user = await User.findOne({ email });
      if (!user) {
        user = await User.create({ email });
      }
      return res.json(user)
    } catch (err) {
      console.log(err.message)
    }
  }

  index(req, res) {
    return res.json('funfando')
  }
}

export default new SessionController();